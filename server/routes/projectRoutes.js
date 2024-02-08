const { Router } = require('express');
const projectController = require('../controllers/projectController');
const verifyToken = require('../middlewares/verifyToken')

const router = new Router();

router.post('/create-project', verifyToken, projectController.createProject);
router.get('/user/:id/projects', verifyToken, projectController.getProjectsByUser);
router.put('/user/:id/project/:projectId/update', verifyToken, projectController.updateProject);
router.delete('/user/:id/project/:projectId/delete', verifyToken, projectController.deleteProject);

module.exports = router;