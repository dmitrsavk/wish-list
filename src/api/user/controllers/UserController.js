import UserService from '../services/UserService';
const userService = new UserService();

export default class UserController {
	async list(req, res) {
		const result = await userService.list(); 
		res.send(result);
	}

	async userByEmailAndPassword(req, res) {
		const result = await userService.userByEmailAndPassword(
			req.body.login,
			req.body.password
		);
		res.send(result);
	}

	async createUser(req, res) {
		const result = await userService.createUser(
			req.body.login,
			req.body.password
		);
		res.send(result);
	}
}
