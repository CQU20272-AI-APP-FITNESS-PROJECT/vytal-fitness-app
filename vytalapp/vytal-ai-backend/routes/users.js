import express from 'express';
import db from '../db.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/me', auth, async (req, res) => {
    try {
        const [users] = await db.query('SELECT id, fullName, email, primaryGoal FROM users WHERE id = ?', [req.user.id]);
        if (users.length === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(users[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/me', auth, async (req, res) => {
    const { fullName, primaryGoal } = req.body;
    try {
        await db.query(
            'UPDATE users SET fullName = ?, primaryGoal = ? WHERE id = ?',
            [fullName, primaryGoal, req.user.id]
        );
        res.json({ msg: 'Profile updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;