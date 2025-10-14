import express from 'express';
import auth from '../middleware/authMiddleware.js';
import { CohereClient } from 'cohere-ai';
import db from '../db.js';

const router = express.Router();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post('/generate-plan', auth, async (req, res) => {
  const { goal, availableDays, timePerDay } = req.body;
  const userId = req.user.id;

  if (!goal || !availableDays || !timePerDay) {
    return res.status(400).json({ msg: 'Goal, available days, and time per day are required.' });
  }

  // --- FINAL, MOST EXPLICIT PROMPT ---
  const structuredPrompt = `
    You are an expert fitness planner. Your task is to generate a personalized 7-day workout plan.

    User's Inputs:
    - Primary Goal: "${goal}"
    - Available Workout Days: "${availableDays}"
    - Time Available Per Session: "${timePerDay}"

    Instructions:
    1. Create a plan for a full 7-day week.
    2. CRITICAL MAPPING: You MUST map the days as follows: Day 1 is Monday, Day 2 is Tuesday, Day 3 is Wednesday, Day 4 is Thursday, Day 5 is Friday, Day 6 is Saturday, Day 7 is Sunday.
    3. Schedule the main workouts ONLY on the days that match the user's "Available Workout Days". For example, if the user says "Tuesday", you must place a workout on Day 2.
    4. All other days MUST be designated as "Active Recovery" or "Full Rest".
    5. Each workout session must be designed to fit within the user's "Time Available Per Session".
    6. Your response MUST be a valid JSON object with no text or markdown outside of it.

    The JSON object's "day" field MUST include both the number and the name of the week's day, like this exact format:
    {
      "planTitle": "Your Personalized 7-Day Plan for ${goal}",
      "days": [
        {
          "day": "Day 1 - Monday",
          "focus": "Example: Upper Body (Workout Day)",
          "exercises": [ {"name": "Push-ups", "details": "3 sets of 10 reps"} ]
        },
        {
          "day": "Day 2 - Tuesday",
          "focus": "Example: Full Rest",
          "exercises": [ {"name": "No activity", "details": "Rest and recover"} ]
        }
      ]
    }
  `;

  try {
    const response = await cohere.chat({
      model: 'command-a-03-2025', // Using the better model for consistency
      message: structuredPrompt,
      temperature: 0.2,
    });

    const aiResponseText = response.text;
    
    const jsonStartIndex = aiResponseText.indexOf('{');
    const jsonEndIndex = aiResponseText.lastIndexOf('}');
    
    if (jsonStartIndex === -1 || jsonEndIndex === -1) {
      throw new Error("Valid JSON object not found in AI response.");
    }

    const jsonString = aiResponseText.substring(jsonStartIndex, jsonEndIndex + 1);
    const planJson = JSON.parse(jsonString);

    const logPrompt = `Goal: ${goal}, Days: ${availableDays}, Time: ${timePerDay}`;
    await db.query(
        'INSERT INTO ai_usage_logs (userId, prompt, response) VALUES (?, ?, ?)',
        [userId, logPrompt, aiResponseText]
    );

    res.json(planJson);

  } catch (err) {
    console.error('AI Plan Generation Error:', err);
    res.status(500).send({ msg: 'Failed to generate workout plan. The AI may have returned an invalid format.' });
  }
});

export default router;