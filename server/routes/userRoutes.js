const { Router } = require('express');
const userController = require('../controllers/userController')

const router = new Router();

router.post('/signup', userController.signUp);

module.exports = router;