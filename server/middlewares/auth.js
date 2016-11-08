var authMiddleware = {};
const Teacher = require('../models/teacher_model');
const bcrypt = require('bcrypt');

authMiddleware.isValidEmail = function (req, res, next) {
	Teacher.findOne({
		where: { email: req.body.email, },
	})
	.then((teacher) => {
		if (teacher !== null) {
			res.status(400).send('That email is already regisstered');
		} else {
			next();
		}
	})
	.catch((err) => {
		res.status(500).send(err);
	});
};

authMiddleware.hashPassword = function (req, res, next) {
	next();
};

module.exports = authMiddleware;
