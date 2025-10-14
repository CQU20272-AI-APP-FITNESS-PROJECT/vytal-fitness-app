import express from 'express';
import db from '../db.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
    try {
        const [products] = await db.query('SELECT * FROM products');
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/click/:id', auth, async (req, res) => {
    const productId = req.params.id;
    const userId = req.user.id;
    try {
        await db.query(
            'INSERT INTO product_clicks (userId, productId) VALUES (?, ?)',
            [userId, productId]
        );
        res.status(200).json({ msg: 'Product click logged' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;