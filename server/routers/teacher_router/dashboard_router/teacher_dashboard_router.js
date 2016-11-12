const teacherDashboardRouter = require('express').Router();
const authMiddleware = require('../../../middlewares/auth.js');

teacherDashboardRouter.route('/')
.get(authMiddleware.checkSignIn, function (req, res) {
	res.send('i was redirected to teacherdashboardrouter');
});

teacherDashboardRouter.route('/calendar/events')
.post(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be creating events in my database from chart.js');
});

teacherDashboardRouter.route('/profile')
.post(authMiddleware.checkSignIn, function (req, res) {
	res.send('i should be creating events in my database from chart.js');
});

module.exports = teacherDashboardRouter;
