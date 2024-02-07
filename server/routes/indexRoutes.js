const { Router } = require('express');
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

const router = new Router();

router.use(projectRoutes, userRoutes);

module.exports = router;