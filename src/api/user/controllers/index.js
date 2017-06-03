import express from 'express';
const router = express.Router();

import UserController from './UserController';

const userController = new UserController();

router.get('/', userController.list);

module.exports = router;
