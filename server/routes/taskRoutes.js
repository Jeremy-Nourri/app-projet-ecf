const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const taskController = require('../controllers/taskController')

const router = new Router();

router.post('/create-task', verifyToken, taskController.createTask);
router.put('/project/:projectId/task/:taskId/update', verifyToken, taskController.updateTask);
router.delete('/project/:projectId/task/:taskId/delete', verifyToken, taskController.deleteTask);

module.exports = router;