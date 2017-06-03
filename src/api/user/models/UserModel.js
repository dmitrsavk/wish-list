const db = require('../../../libs/db');

import * as Sequelize from 'sequelize';

const UserModel = db.define('user', {
	id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id'
    },
	login: {
		type: Sequelize.STRING,
		field: 'login'
	},
	password: {
		type: Sequelize.STRING,
		field: 'password'
	},
	createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
    },
});

export default UserModel;
