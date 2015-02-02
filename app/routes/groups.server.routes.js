'use strict';

module.exports = function(app) {
	// User Routes
	var groups = require('../../app/controllers/groups.server.controller');
    var user = require('../controllers/users.server.controller');

	// Setting up the group api
	app.route('/groups').get(user.requiresLogin, groups.getAll);
	app.route('/groups/create').post(user.requiresLogin, groups.save);
};
