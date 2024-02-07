const { Router } = require('express');
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken')

const router = new Router();

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router.get('/profile/:id', verifyToken, userController.getUser);

module.exports = router;