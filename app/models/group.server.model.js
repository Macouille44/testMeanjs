'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Group Schema
 */
var GroupSchema = new Schema({
	author: {
		type: String,
		trim: true,
		default: ''
	},
	name: {
		type: String,
		trim: true,
        unique: 'Group already exists',
        required: 'Please fill in a username'
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Group', GroupSchema);
