import UserModel from '../models/UserModel';

export default class UserService {
	async list() {
		return UserModel.findAll();
	}

	async userByEmailAndPassword(email, password) {
		return UserModel.findOne({
			where: {
				login: email,
				password: password
			}
		});
	}

	async createUser(email, password) {
		return UserModel.create({
			login: email,
			password: password
		});
	}
}
