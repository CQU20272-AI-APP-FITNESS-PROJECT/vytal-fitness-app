import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';
import { sendOtpEmail } from '../utils/emailService.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  try {
    const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ msg: 'User with this email already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const [result] = await db.query(
      'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)',
      [fullName, email, hashedPassword]
    );
    const userId = result.insertId;
    res.status(201).json({ msg: 'User registered successfully', userId: userId });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please provide email and password' });
  }
  try {
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    await db.query('UPDATE users SET otp = ?, otp_expires = ? WHERE id = ?', [otp, otpExpires, user.id]);
    await sendOtpEmail(user.email, otp);
    res.status(200).json({ msg: 'OTP sent to your email successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ msg: 'Please provide email and OTP' });
  }
  try {
    const [users] = await db.query('SELECT * FROM users WHERE email = ? AND otp = ?', [email, otp]);
    if (users.length === 0) {
      return res.status(400).json({ msg: 'Invalid OTP' });
    }
    const user = users[0];

    if (new Date() > new Date(user.otp_expires)) {
      return res.status(400).json({ msg: 'OTP has expired. Please try again.' });
    }

    await db.query('UPDATE users SET otp = NULL, otp_expires = NULL WHERE id = ?', [user.id]);

    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };
    
    const secret = process.env.JWT_SECRET.trim();
    
    const token = jwt.sign(
        payload,
        secret,
        { expiresIn: '5h' }
    );

    res.json({
        token,
        user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role
        }
    });

  } catch (err) {
    console.error('VERIFY OTP ERROR:', err);
    res.status(500).send('Server error');
  }
});

export default router;