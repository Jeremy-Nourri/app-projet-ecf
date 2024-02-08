const { Router } = require('express');
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes')

const router = new Router();

router.use(projectRoutes, userRoutes, taskRoutes);

module.exports = router;