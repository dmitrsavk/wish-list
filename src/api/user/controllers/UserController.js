import UserService from '../services/UserService';
const userService = new UserService();

export default class UserController {
	async list(req, res) {
		const result = await userService.list(); 
		res.send(result);
	}
}
