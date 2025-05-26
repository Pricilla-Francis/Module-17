const router = require('express').Router();
const userRoutes = require('./api/userRouters');
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
