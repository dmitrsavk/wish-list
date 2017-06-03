import UserModel from '../models/UserModel';

export default class UserService {
	async list() {
		return UserModel.findAll();
	}
}
