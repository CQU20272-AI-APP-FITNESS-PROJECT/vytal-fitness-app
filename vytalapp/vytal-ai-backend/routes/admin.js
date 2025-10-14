import express from 'express';
import db from '../db.js';
import auth from '../middleware/authMiddleware.js';
import admin from '../middleware/adminMiddleware.js';

const router = express.Router();

// === METRICS ===
router.get('/metrics', auth, admin, async (req, res) => {
    try {
        const [userCount] = await db.query('SELECT COUNT(id) as count FROM users');
        const [apiUsageCount] = await db.query('SELECT COUNT(id) as count FROM ai_usage_logs');
        const [productCount] = await db.query('SELECT COUNT(id) as count FROM products');
        const [salesCount] = await db.query('SELECT COUNT(id) as count FROM product_clicks');
        res.json({
            totalUsers: userCount[0].count,
            apiUsage: apiUsageCount[0].count,
            totalProducts: productCount[0].count,
            sales: salesCount[0].count
        });
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

// === USER MANAGEMENT ===
router.get('/users', auth, admin, async (req, res) => {
    try {
        const [users] = await db.query('SELECT id, fullName, email, role FROM users');
        res.json(users);
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

// --- THIS IS THE NEWLY ADDED CODE BLOCK ---
// It allows updating a user's full name and role.
router.put('/users/:id', auth, admin, async (req, res) => {
    const { fullName, role } = req.body;
    const { id } = req.params;
    try {
        await db.query('UPDATE users SET fullName = ?, role = ? WHERE id = ?', [fullName, role, id]);
        res.json({ msg: 'User updated successfully' });
    } catch (err) {
        console.error("Update user error:", err.message);
        res.status(500).send('Server Error');
    }
});
// --- END OF NEW CODE BLOCK ---

router.delete('/users/:id', auth, admin, async (req, res) => {
    try {
        await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
        res.json({ msg: 'User deleted' });
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

// === PRODUCT MANAGEMENT ===
router.get('/products', auth, admin, async (req, res) => {
    try {
        const [products] = await db.query('SELECT * FROM products');
        res.json(products);
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

router.post('/products', auth, admin, async (req, res) => {
    const { name, imageUrl, category, price, purchaseLink } = req.body;
    try {
        await db.query('INSERT INTO products (name, imageUrl, category, price, purchaseLink) VALUES (?, ?, ?, ?, ?)', [name, imageUrl, category, price, purchaseLink]);
        res.status(201).json({ msg: 'Product created' });
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

router.put('/products/:id', auth, admin, async (req, res) => {
    const { name, imageUrl, category, price, purchaseLink } = req.body;
    try {
        await db.query('UPDATE products SET name = ?, imageUrl = ?, category = ?, price = ?, purchaseLink = ? WHERE id = ?', [name, imageUrl, category, price, purchaseLink, req.params.id]);
        res.json({ msg: 'Product updated' });
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

router.delete('/products/:id', auth, admin, async (req, res) => {
    try {
        await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        res.json({ msg: 'Product deleted' });
    } catch (err) { console.error(err.message); res.status(500).send('Server Error'); }
});

// === CHART DATA ROUTE ===
router.get('/charts/product-clicks', auth, admin, async (req, res) => {
    try {
        const [data] = await db.query(`
            SELECT p.name, COUNT(pc.id) as clicks
            FROM products p
            LEFT JOIN product_clicks pc ON p.id = pc.productId
            GROUP BY p.id, p.name
            ORDER BY clicks DESC
        `);
        res.json(data);
    } catch (err) {
        console.error("Chart data error:", err.message);
        res.status(500).send('Server Error');
    }
});

export default router;