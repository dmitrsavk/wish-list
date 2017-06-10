import express from 'express';
const router = express.Router();

import UserController from './UserController';

const userController = new UserController();

router.get('/', userController.list);
router.post('/', userController.userByEmailAndPassword);
router.post('/create', userController.createUser);

module.exports = router;
