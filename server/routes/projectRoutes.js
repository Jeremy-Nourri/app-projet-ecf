const { Router } = require('express');
const projectController = require('../controllers/projectController')

const router = new Router();

router.post('/create-project', projectController.createProject)

module.exports = router;