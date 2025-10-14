-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2025 at 04:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vytal_ai_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ai_usage_logs`
--

CREATE TABLE `ai_usage_logs` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `prompt` text DEFAULT NULL,
  `response` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ai_usage_logs`
--

INSERT INTO `ai_usage_logs` (`id`, `userId`, `prompt`, `response`, `createdAt`) VALUES
(1, 2, 'Diet plan for weightloss, in 7 days', 'Here’s a **7-day diet plan** focused on healthy, sustainable weight loss. This plan emphasizes whole foods, balanced meals, and portion control. Pair it with regular exercise for best results. Always consult a healthcare professional before starting any new diet.\n\n---\n\n### **General Guidelines**\n- **Hydration**: Drink at least 2–3 liters of water daily.  \n- **Portion Control**: Eat until 80% full.  \n- **Avoid**: Processed foods, sugary drinks, and excessive salt.  \n- **Snacks**: Opt for fruits, nuts, or veggies if needed.  \n\n---\n\n### **7-Day Diet Plan**\n\n#### **Day 1: Detox Day**  \n- **Breakfast**: Oatmeal with berries and a sprinkle of chia seeds.  \n- **Lunch**: Grilled chicken salad with olive oil and lemon dressing.  \n- **Dinner**: Steamed vegetables (broccoli, zucchini, carrots) with quinoa.  \n\n#### **Day 2: Protein Focus**  \n- **Breakfast**: Scrambled eggs with spinach and whole-grain toast.  \n- **Lunch**: Grilled fish (salmon/tilapia) with roasted sweet potatoes.  \n- **Dinner**: Lentil soup with a side of mixed greens.  \n\n#### **Day 3: Veggie Day**  \n- **Breakfast**: Smoothie (spinach, banana, almond milk, protein powder).  \n- **Lunch**: Veggie stir-fry (tofu/paneer) with brown rice.  \n- **Dinner**: Grilled zucchini, bell peppers, and asparagus with hummus.  \n\n#### **Day 4: Fiber Boost**  \n- **Breakfast**: Whole-grain toast with avocado and a boiled egg.  \n- **Lunch**: Quinoa salad with chickpeas, cucumber, and cherry tomatoes.  \n- **Dinner**: Baked chicken breast with steamed broccoli and cauliflower.  \n\n#### **Day 5: Low-Carb Day**  \n- **Breakfast**: Greek yogurt with a handful of almonds and a drizzle of honey.  \n- **Lunch**: Grilled shrimp with a side of asparagus.  \n- **Dinner**: Cauliflower rice with mixed veggies and tofu.  \n\n#### **Day 6: Balanced Day**  \n- **Breakfast**: Chia pudding (chia seeds, almond milk, and berries).  \n- **Lunch**: Whole-grain wrap with turkey, lettuce, and avocado.  \n- **Dinner**: Grilled fish with a side of roasted Brussels sprouts.  \n\n#### **Day 7: Light Day**  \n- **Breakfast**: Smoothie bowl (blended fruits with topped nuts and seeds).  \n- **Lunch**: Vegetable soup with a slice of whole-grain bread.  \n- **Dinner**: Grilled chicken with a side of cucumber and tomato salad.  \n\n---\n\n### **Tips for Success**  \n- **Meal Prep**: Prepare meals in advance to avoid unhealthy choices.  \n- **Cheat Smart**: Allow one small treat per day (e.g., dark chocolate).  \n- **Stay Active**: Incorporate 30 minutes of exercise daily (walking, jogging, or yoga).  \n\nRemember, consistency is key! Small, sustainable changes lead to long-term results. You’ve got this—keep pushing forward! 💪✨', '2025-09-26 11:41:32'),
(2, 2, 'New diet plan', 'Here’s a balanced and sustainable diet plan to support your fitness goals. Adjust portions based on your activity level, age, and gender. Focus on whole, nutrient-dense foods and stay hydrated!\n\n### **Daily Meal Plan**\n**Breakfast (7–8 AM)**  \n- **Option 1:** Oatmeal with almond milk, mixed berries, chia seeds, and a scoop of protein powder.  \n- **Option 2:** Scrambled eggs with spinach, avocado, and whole-grain toast.  \n\n**Mid-Morning Snack (10–11 AM)**  \n- Greek yogurt with a handful of almonds or a piece of fruit (apple, banana, or orange).  \n\n**Lunch (12:30–1:30 PM)**  \n- **Option 1:** Grilled chicken or tofu with quinoa, roasted vegetables (broccoli, carrots, zucchini), and a side salad with olive oil and lemon dressing.  \n- **Option 2:** Lentil or chickpea salad with mixed greens, cherry tomatoes, cucumbers, and a splash of balsamic vinegar.  \n\n**Afternoon Snack (3–4 PM)**  \n- Hummus with carrot sticks, celery, or whole-grain crackers.  \n\n**Dinner (6–7 PM)**  \n- **Option 1:** Baked salmon or grilled shrimp with sweet potato and steamed asparagus.  \n- **Option 2:** Turkey or veggie stir-fry with brown rice and a variety of veggies (bell peppers, snap peas, mushrooms).  \n\n**Evening Snack (Optional, 8–9 PM)**  \n- A small handful of mixed nuts or a protein smoothie (whey/plant-based protein, spinach, almond milk).  \n\n---\n\n### **Key Tips for Success**  \n- **Hydration:** Drink at least 2–3 liters of water daily.  \n- **Portion Control:** Listen to your body and stop eating when you’re 80% full.  \n- **Meal Prep:** Prepare meals in advance to stay on track.  \n- **Limit Processed Foods:** Avoid sugary snacks, fried foods, and excessive carbs.  \n- **Flexibility:** Allow yourself a treat meal once a week to stay motivated.  \n\nRemember, consistency is key! Pair this diet with regular exercise for the best results. You’ve got this—every healthy choice brings you closer to your goals! 💪✨', '2025-09-26 11:46:45'),
(3, 2, 'Generated plan for: general fitness', '```json\n{\n  \"planTitle\": \"7-Day Workout Plan for General Fitness\",\n  \"days\": [\n    {\n      \"day\": 1,\n      \"focus\": \"Full Body Strength\",\n      \"exercises\": [\n        {\"name\": \"Squats\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Push-ups\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Plank\", \"details\": \"3 sets, 30-second hold\"}\n      ]\n    },\n    {\n      \"day\": 2,\n      \"focus\": \"Cardio and Core\",\n      \"exercises\": [\n        {\"name\": \"Brisk Walking or Cycling\", \"details\": \"30 minutes\"},\n        {\"name\": \"Russian Twists\", \"details\": \"3 sets of 20 reps (10 per side)\"},\n        {\"name\": \"Flutter Kicks\", \"details\": \"3 sets of 15 reps\"}\n      ]\n    },\n    {\n      \"day\": 3,\n      \"focus\": \"Upper Body\",\n      \"exercises\": [\n        {\"name\": \"Dumbbell Bench Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Bent-Over Rows\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Tricep Dips\", \"details\": \"3 sets of 12 reps\"}\n      ]\n    },\n    {\n      \"day\": 4,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Yoga or Pilates\", \"details\": \"45 minutes\"},\n        {\"name\": \"Light Stretching\", \"details\": \"15 minutes\"}\n      ]\n    },\n    {\n      \"day\": 5,\n      \"focus\": \"Lower Body\",\n      \"exercises\": [\n        {\"name\": \"Bulgarian Split Squats\", \"details\": \"3 sets of 10 reps per leg\"},\n        {\"name\": \"Romanian Deadlifts\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Glute Bridges\", \"details\": \"3 sets of 15 reps\"}\n      ]\n    },\n    {\n      \"day\": 6,\n      \"focus\": \"HIIT\",\n      \"exercises\": [\n        {\"name\": \"Jump Squats\", \"details\": \"3 sets of 15 reps\"},\n        {\"name\": \"Mountain Climbers\", \"details\": \"3 sets, 30 seconds\"},\n        {\"name\": \"Burpee Jump\", \"details\": \"3 sets of 10 reps\"}\n      ]\n    },\n    {\n      \"day\": 7,\n      \"focus\": \"Rest and Recovery\",\n      \"exercises\": [\n        {\"name\": \"Gentle Stretching\", \"details\": \"20 minutes\"},\n        {\"name\": \"Leisurely Walk\", \"details\": \"30-minute casual walk\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 11:54:31'),
(4, 2, 'Goal: Muscle building, Days: Monday, Tuesday, Saturday, Time: 30 minutes', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Muscle Building Plan\",\n  \"days\": [\n    {\n      \"day\": 1,\n      \"focus\": \"Upper Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Push-ups\", \"details\": \"4 sets of 12 reps\"},\n        {\"name\": \"Dumbbell Shoulder Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Bent-over Dumbbell Rows\", \"details\": \"3 sets of 12 reps\"}\n      ]\n    },\n    {\n      \"day\": 2,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Walking or Light Jogging\", \"details\": \"20 minutes\"},\n        {\"name\": \"Full Body Stretching\", \"details\": \"10 minutes\"}\n      ]\n    },\n    {\n      \"day\": 3,\n      \"focus\": \"Lower Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Bodyweight Squats\", \"details\": \"4 sets of 15 reps\"},\n        {\"name\": \"Lunges\", \"details\": \"3 sets of 12 reps per leg\"},\n        {\"name\": \"Calf Raises\", \"details\": \"3 sets of 20 reps\"}\n      ]\n    },\n    {\n      \"day\": 4,\n      \"focus\": \"Full Rest\",\n      \"exercises\": []\n    },\n    {\n      \"day\": 5,\n      \"focus\": \"Core and Upper Body (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Plank\", \"details\": \"3 sets of 30 seconds\"},\n        {\"name\": \"Russian Twists\", \"details\": \"3 sets of 20 reps\"},\n        {\"name\": \"Dumbbell Chest Press\", \"details\": \"3 sets of 10 reps\"}\n      ]\n    },\n    {\n      \"day\": 6,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Yoga or Pilates\", \"details\": \"20 minutes\"},\n        {\"name\": \"Light Stretching\", \"details\": \"10 minutes\"}\n      ]\n    },\n    {\n      \"day\": 7,\n      \"focus\": \"Full Body Circuit (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Burpees\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Jump Squats\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Mountain Climbers\", \"details\": \"3 sets of 20 reps\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 12:01:02'),
(5, 2, 'Goal: Muscle building, Days: Monday, Tuesday, Saturday, Time: 30 minutes', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Muscle Building Plan\",\n  \"days\": [\n    {\n      \"day\": 1,\n      \"focus\": \"Upper Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Push-ups\", \"details\": \"4 sets of 12 reps\"},\n        {\"name\": \"Dumbbell Shoulder Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Bent-over Dumbbell Rows\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Plank\", \"details\": \"3 sets of 30 seconds\"}\n      ]\n    },\n    {\n      \"day\": 2,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Walking\", \"details\": \"20 minutes at moderate pace\"},\n        {\"name\": \"Full Body Stretching\", \"details\": \"10 minutes\"}\n      ]\n    },\n    {\n      \"day\": 3,\n      \"focus\": \"Lower Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Bodyweight Squats\", \"details\": \"4 sets of 15 reps\"},\n        {\"name\": \"Lunges\", \"details\": \"3 sets of 12 reps per leg\"},\n        {\"name\": \"Glute Bridges\", \"details\": \"3 sets of 15 reps\"},\n        {\"name\": \"Calf Raises\", \"details\": \"3 sets of 20 reps\"}\n      ]\n    },\n    {\n      \"day\": 4,\n      \"focus\": \"Full Rest\",\n      \"exercises\": []\n    },\n    {\n      \"day\": 5,\n      \"focus\": \"Full Rest\",\n      \"exercises\": []\n    },\n    {\n      \"day\": 6,\n      \"focus\": \"Full Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Push-ups\", \"details\": \"4 sets of 12 reps\"},\n        {\"name\": \"Bodyweight Squats\", \"details\": \"4 sets of 15 reps\"},\n        {\"name\": \"Plank with Shoulder Taps\", \"details\": \"3 sets of 10 taps per side\"},\n        {\"name\": \"Russian Twists\", \"details\": \"3 sets of 20 reps (10 per side)\"}\n      ]\n    },\n    {\n      \"day\": 7,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Yoga or Pilates\", \"details\": \"20 minutes\"},\n        {\"name\": \"Light Stretching\", \"details\": \"10 minutes\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 12:05:23'),
(6, 2, 'Goal: Muscle building, Days: Monday, Tuesday, Saturday, Time: 1 hour', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Muscle Building Plan\",\n  \"days\": [\n    {\n      \"day\": 1,\n      \"focus\": \"Upper Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Bench Press\", \"details\": \"4 sets of 8-10 reps\"},\n        {\"name\": \"Pull-Ups\", \"details\": \"3 sets of 8 reps\"},\n        {\"name\": \"Dumbbell Shoulder Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Barbell Bicep Curls\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Tricep Dips\", \"details\": \"3 sets of 10 reps\"}\n      ]\n    },\n    {\n      \"day\": 2,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Walking\", \"details\": \"30 minutes at moderate pace\"},\n        {\"name\": \"Full Body Stretching\", \"details\": \"15 minutes\"}\n      ]\n    },\n    {\n      \"day\": 3,\n      \"focus\": \"Lower Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Squats\", \"details\": \"4 sets of 8-10 reps\"},\n        {\"name\": \"Deadlifts\", \"details\": \"3 sets of 8 reps\"},\n        {\"name\": \"Lunges\", \"details\": \"3 sets of 12 reps per leg\"},\n        {\"name\": \"Leg Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Calf Raises\", \"details\": \"4 sets of 15 reps\"}\n      ]\n    },\n    {\n      \"day\": 4,\n      \"focus\": \"Full Rest\",\n      \"exercises\": []\n    },\n    {\n      \"day\": 5,\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Yoga or Pilates\", \"details\": \"30 minutes\"},\n        {\"name\": \"Light Core Work\", \"details\": \"10 minutes (e.g., planks, leg raises)\"}\n      ]\n    },\n    {\n      \"day\": 6,\n      \"focus\": \"Full Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Overhead Press\", \"details\": \"4 sets of 8-10 reps\"},\n        {\"name\": \"Bent-Over Rows\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Front Squats\", \"details\": \"3 sets of 8 reps\"},\n        {\"name\": \"Dumbbell Bench Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Farmer\'s Walk\", \"details\": \"3 sets of 40 meters\"}\n      ]\n    },\n    {\n      \"day\": 7,\n      \"focus\": \"Full Rest\",\n      \"exercises\": []\n    }\n  ]\n}\n```', '2025-09-26 12:08:07'),
(7, 2, 'Goal: Lose weight, Days: Monday, Wednesday, Friday, Time: 30 minutes', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Plan for Lose Weight\",\n  \"days\": [\n    {\n      \"day\": \"Day 1 - Monday\",\n      \"focus\": \"Full Body HIIT (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Jumping Jacks\", \"details\": \"30 seconds\"},\n        {\"name\": \"Bodyweight Squats\", \"details\": \"30 seconds\"},\n        {\"name\": \"Push-ups\", \"details\": \"30 seconds\"},\n        {\"name0\": \"Rest\", \"details\": \"30 seconds\"},\n        {\"name\": \"Repeat Circuit\", \"details\": \"3 rounds total (25 minutes)\"},\n        {\"name\": \"Cool Down Stretch\", \"details\": \"5 minutes\"}\n      ]\n    },\n    {\n      \"day\": \"Day 2 - Tuesday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Walking or Yoga\", \"details\": \"30 minutes at a comfortable pace\"}\n      ]\n    },\n    {\n      \"day\": \"Day 3 - Wednesday\",\n      \"focus\": \"Lower Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Bodyweight Squats\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Lunges (each leg)\", \"details\": \"3 sets of 10 reps per leg\"},\n        {\"name\": \"Glute Bridges\", \"details\": \"3 sets of 15 reps\"},\n        {\"name\": \"Wall Sit\", \"details\": \"3 sets of 30 seconds\"},\n        {\"name\": \"Cool Down Stretch\", \"details\": \"5 minutes\"}\n      ]\n    },\n    {\n      \"day\": \"Day 4 - Thursday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 5 - Friday\",\n      \"focus\": \"Cardio and Core (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"High Knees\", \"details\": \"30 seconds\"},\n        {\"name\": \"Plank\", \"details\": \"30 seconds\"},\n        {\"name\": \"Mountain Climbers\", \"details\": \"30 seconds\"},\n        {\"name\": \"Bicycle Crunches\", \"details\": \"30 seconds\"},\n        {\"name\": \"Rest\", \"details\": \"30 seconds\"},\n        {\"name\": \"Repeat Circuit\", \"details\": \"3 rounds total (25 minutes)\"},\n        {\"name\": \"Cool Down Stretch\", \"details\": \"5 minutes\"}\n      ]\n    },\n    {\n      \"day\": \"Day 6 - Saturday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Walking or Swimming\", \"details\": \"30 minutes at a comfortable pace\"}\n      ]\n    },\n    {\n      \"day\": \"Day 7 - Sunday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 12:11:08'),
(8, 2, 'Goal: Lean muscle mass build, Days: Monday, Wednesday, Friday, Time: 1 hour', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Plan for Lean Muscle Mass Build\",\n  \"days\": [\n    {\n      \"day\": \"Day 1 - Monday\",\n      \"focus\": \"Upper Body (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Bench Press\", \"details\": \"4 sets of 8-10 reps\"},\n        {\"name\": \"Pull-Ups\", \"details\": \"3 sets of 8-10 reps\"},\n        {\"name\": \"Dumbbell Shoulder Press\", \"details\": \"3 sets of 10-12 reps\"},\n        {\"name\": \"Lateral Raises\", \"details\": \"3 sets of 12-15 reps\"},\n        {\"name\": \"Plank\", \"details\": \"3 sets of 30-45 seconds\"}\n      ]\n    },\n    {\n      \"day\": \"Day 2 - Tuesday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Yoga or Stretching\", \"details\": \"30 minutes\"},\n        {\"name\": \"Walking\", \"details\": \"20-30 minutes at a moderate pace\"}\n      ]\n    },\n    {\n      \"day\": \"Day 3 - Wednesday\",\n      \"focus\": \"Lower Body (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Squats\", \"details\": \"4 sets of 8-10 reps\"},\n        {\"name\": \"Deadlifts\", \"details\": \"3 sets of 8-10 reps\"},\n        {\"name\": \"Lunges\", \"details\": \"3 sets of 10-12 reps per leg\"},\n        {\"name\": \"Leg Press\", \"details\": \"3 sets of 10-12 reps\"},\n        {\"name\": \"Calf Raises\", \"details\": \"4 sets of 15-20 reps\"}\n      ]\n    },\n    {\n      \"day\": \"Day 4 - Thursday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 5 - Friday\",\n      \"focus\": \"Full Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Barbell Squats\", \"details\": \"4 sets of 8-10 reps\"},\n        {\"name\": \"Bent-Over Rows\", \"details\": \"3 sets of 8-10 reps\"},\n        {\"name\": \"Overhead Press\", \"details\": \"3 sets of 10-12 reps\"},\n        {\"name\": \"Kettlebell Swings\", \"details\": \"3 sets of 12-15 reps\"},\n        {\"name\": \"Russian Twists\", \"details\": \"3 sets of 20 reps (10 per side)\"}\n      ]\n    },\n    {\n      \"day\": \"Day 6 - Saturday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Swimming or Cycling\", \"details\": \"30-40 minutes at a moderate pace\"},\n        {\"name\": \"Core Work\", \"details\": \"15-20 minutes of light core exercises\"}\n      ]\n    },\n    {\n      \"day\": \"Day 7 - Sunday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 12:12:10'),
(9, 2, 'Goal: Lose weight, Days: Sunday, Time: 2 hours', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Plan for Lose Weight\",\n  \"days\": [\n    {\n      \"day\": \"Day 1 - Monday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Walking\", \"details\": \"30 minutes at a moderate pace\"}\n      ]\n    },\n    {\n      \"day\": \"Day 2 - Tuesday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 3 - Wednesday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Yoga or Stretching\", \"details\": \"30 minutes of gentle practice\"}\n      ]\n    },\n    {\n      \"day\": \"Day 4 - Thursday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 5 - Friday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Cycling or Swimming\", \"details\": \"30 minutes at a moderate pace\"}\n      ]\n    },\n    {\n      \"day\": \"Day 6 - Saturday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 7 - Sunday\",\n      \"focus\": \"Full Body Weight Loss Workout\",\n      \"exercises\": [\n        {\"name\": \"Warm-up\", \"details\": \"10 minutes of dynamic stretching or light cardio\"},\n        {\"name\": \"High-Intensity Interval Training (HIIT)\", \"details\": \"30 minutes (e.g., 30 seconds sprint, 30 seconds walk, repeat)\"},\n        {\"name\": \"Strength Training Circuit\", \"details\": \"45 minutes (3 rounds of 12 reps each: Squats, Push-ups, Lunges, Plank-to-Rows, Bicycle Crunches)\"},\n        {\"name\": \"Cool Down\", \"details\": \"15 minutes of stretching to improve flexibility and reduce muscle soreness\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 20:57:02'),
(10, 3, 'Goal: Building Lean Muscle Mass, Days: Monday Tuesday Thursday Saturday, Time: 45 minutes', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Plan for Building Lean Muscle Mass\",\n  \"days\": [\n    {\n      \"day\": \"Day 1 - Monday\",\n      \"focus\": \"Upper Body (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Push-ups\", \"details\": \"3 sets of 12-15 reps\"},\n        {\"name\": \"Dumbbell Bench Press\", \"details\": \"3 sets of 10-12 reps\"},\n        {\"name\": \"Dumbbell Rows\", \"details\": \"3 sets of 10-12 reps per arm\"},\n        {\"name\": \"Shoulder Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Plank\", \"details\": \"3 sets of 30-45 seconds\"}\n      ]\n    },\n    {\n      \"day\": \"Day 2 - Tuesday\",\n      \"focus\": \"Lower Body (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Squats\", \"details\": \"3 sets of 12-15 reps\"},\n        {\"name\": \"Lunges\", \"details\": \"3 sets of 10 reps per leg\"},\n        {\"name\": \"Deadlifts\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Calf Raises\", \"details\": \"3 sets of 15 reps\"},\n        {\"name\": \"Glute Bridge\", \"details\": \"3 sets of 12-15 reps\"}\n      ]\n    },\n    {\n      \"day\": \"Day 3 - Wednesday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Yoga or Stretching\", \"details\": \"20-30 minutes\"},\n        {\"name\": \"Walking\", \"details\": \"20-30 minutes at a moderate pace\"}\n      ]\n    },\n    {\n      \"day\": \"Day 4 - Thursday\",\n      \"focus\": \"Full Body Strength (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Pull-ups or Lat Pulldowns\", \"details\": \"3 sets of 8-10 reps\"},\n        {\"name\": \"Kettlebell Swings\", \"details\": \"3 sets of 12-15 reps\"},\n        {\"name\": \"Goblet Squats\", \"details\": \"3 sets of 10-12 reps\"},\n        {\"name\": \"Push Press\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Russian Twists\", \"details\": \"3 sets of 20 reps (10 per side)\"}\n      ]\n    },\n    {\n      \"day\": \"Day 5 - Friday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 6 - Saturday\",\n      \"focus\": \"HIIT and Core (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Burpees\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Mountain Climbers\", \"details\": \"3 sets of 30 seconds\"},\n        {\"name\": \"Jump Squats\", \"details\": \"3 sets of 12-15 reps\"},\n        {\"name\": \"Bicycle Crunches\", \"details\": \"3 sets of 20 reps (10 per side)\"},\n        {\"name\": \"Leg Raises\", \"details\": \"3 sets of 12-15 reps\"}\n      ]\n    },\n    {\n      \"day\": \"Day 7 - Sunday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Yoga or Stretching\", \"details\": \"20-30 minutes\"},\n        {\"name\": \"Walking or Swimming\", \"details\": \"20-30 minutes at a moderate pace\"}\n      ]\n    }\n  ]\n}\n```', '2025-09-26 21:41:52'),
(11, 2, 'Goal: Belly Fat reduction, Days: Monday Tuesday Wedesday, Time: 2 hrs', '```json\n{\n  \"planTitle\": \"Your Personalized 7-Day Plan for Belly Fat Reduction\",\n  \"days\": [\n    {\n      \"day\": \"Day 1 - Monday\",\n      \"focus\": \"Cardio & Core (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Running or Jogging\", \"details\": \"30 mins\"},\n        {\"name\": \"Plank\", \"details\": \"3 sets of 1 min\"},\n        {\"name\": \"Russian Twists\", \"details\": \"3 sets of 20 reps (10 per side)\"},\n        {\"name\": \"Bicycle Crunches\", \"details\": \"3 sets of 15 reps (per side)\"},\n        {\"name\": \"Mountain Climbers\", \"details\": \"3 sets of 30 seconds\"}\n      ]\n    },\n    {\n      \"day\": \"Day 2 - Tuesday\",\n      \"focus\": \"HIIT & Core (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Jump Squats\", \"details\": \"30 seconds on, 30 seconds off for 15 mins\"},\n        {\"name\": \"Burpees\", \"details\": \"30 seconds on, 30 seconds off for 10 mins\"},\n        {\"name\": \"Leg Raises\", \"details\": \"3 sets of 15 reps\"},\n        {\"name\": \"Side Plank (each side)\", \"details\": \"3 sets of 30 seconds\"},\n        {\"name\": \"Cool Down Stretching\", \"details\": \"10 mins\"}\n      ]\n    },\n    {\n      \"day\": \"Day 3 - Wednesday\",\n      \"focus\": \"Strength Training & Core (Workout Day)\",\n      \"exercises\": [\n        {\"name\": \"Dumbbell Squats\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Push-ups\", \"details\": \"3 sets of 15 reps\"},\n        {\"name\": \"Dumbbell Rows\", \"details\": \"3 sets of 12 reps (per arm)\"},\n        {\"name\": \"Deadlifts\", \"details\": \"3 sets of 10 reps\"},\n        {\"name\": \"Hanging Leg Raises\", \"details\": \"3 sets of 12 reps\"},\n        {\"name\": \"Cool Down Stretching\", \"details\": \"10 mins\"}\n      ]\n    },\n    {\n      \"day\": \"Day 4 - Thursday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Light Walking or Yoga\", \"details\": \"30-45 mins\"},\n        {\"name\": \"Stretching\", \"details\": \"15 mins\"}\n      ]\n    },\n    {\n      \"day\": \"Day 5 - Friday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    },\n    {\n      \"day\": \"Day 6 - Saturday\",\n      \"focus\": \"Active Recovery\",\n      \"exercises\": [\n        {\"name\": \"Swimming or Cycling\", \"details\": \"30-45 mins\"},\n        {\"name\": \"Stretching\", \"details\": \"15 mins\"}\n      ]\n    },\n    {\n      \"day\": \"Day 7 - Sunday\",\n      \"focus\": \"Full Rest\",\n      \"exercises\": [\n        {\"name\": \"No activity\", \"details\": \"Rest and recover\"}\n      ]\n    }\n  ]\n}\n```', '2025-10-06 11:08:50');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imageUrl` varchar(2083) NOT NULL,
  `category` enum('fitness','weight','diet','others') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `purchaseLink` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `imageUrl`, `category`, `price`, `purchaseLink`) VALUES
(1, 'Whey Protein', 'https://www.optimumnutrition.co.in/cdn/shop/files/GSW_Fish_oil.jpg?v=1754025895&width=823', '', 99.99, 'https://www.optimumnutrition.co.in/products'),
(2, 'Apple Smart Watch', 'https://www.apple.com/v/watch/bs/images/overview/select/product_s11__c23ym6fc09me_large.png', 'fitness', 3769.99, 'https://www.apple.com/uk/watch/');

-- --------------------------------------------------------

--
-- Table structure for table `product_clicks`
--

CREATE TABLE `product_clicks` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `clickedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_clicks`
--

INSERT INTO `product_clicks` (`id`, `userId`, `productId`, `clickedAt`) VALUES
(1, 2, 1, '2025-09-26 12:34:05'),
(2, 2, 1, '2025-09-26 12:37:30'),
(3, 2, 2, '2025-09-26 13:00:36'),
(4, 3, 1, '2025-09-26 21:43:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `primaryGoal` varchar(100) DEFAULT 'Not set',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `otp` varchar(6) DEFAULT NULL,
  `otp_expires` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `primaryGoal`, `createdAt`, `otp`, `otp_expires`) VALUES
(1, 'Admin User', 'Harif7335@gmail.com	\r\n', '$2a$10$vsMdfgVFt96gDG3LpC0EpOs9NAgE0xhMab1YzAvGpSjkcjYFyW2c2', 'admin', 'Not set', '2025-09-26 10:36:19', '552041', '2025-10-14 02:14:36'),
(2, 'hamza', 'hamza.arif@cqumail.com ', '$2a$10$AQhcnJxWZvGaD8G6B45CCu8djmhAXspsEYtC8yJZ.oaFCubTiIwfu', 'user', 'Weightloss', '2025-09-26 11:27:42', NULL, NULL),
(3, 'Kelly M. Cox', 'kcox@mail.com', '$2a$10$KSVJZisWCTCSOoLEN38ATeYeTu/z2rDRHuwbPalYvnvJAtJsn6MEi', 'user', 'Gain Muscle', '2025-09-26 21:40:43', NULL, NULL),
(7, 'sucil', 'sucilbhandari11@gmail.com', '$2a$10$MgElW0fRYsV//xQp/fP5bOplGWlZIFm23MjwtedMrYiy1mp8hwO1.', 'user', 'Not set', '2025-10-13 14:57:08', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_activity`
--

CREATE TABLE `user_activity` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `loginTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `logoutTime` timestamp NULL DEFAULT NULL,
  `durationSeconds` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ai_usage_logs`
--
ALTER TABLE `ai_usage_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_clicks`
--
ALTER TABLE `product_clicks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_activity`
--
ALTER TABLE `user_activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ai_usage_logs`
--
ALTER TABLE `ai_usage_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product_clicks`
--
ALTER TABLE `product_clicks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_activity`
--
ALTER TABLE `user_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ai_usage_logs`
--
ALTER TABLE `ai_usage_logs`
  ADD CONSTRAINT `ai_usage_logs_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_clicks`
--
ALTER TABLE `product_clicks`
  ADD CONSTRAINT `product_clicks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_clicks_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_activity`
--
ALTER TABLE `user_activity`
  ADD CONSTRAINT `user_activity_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
