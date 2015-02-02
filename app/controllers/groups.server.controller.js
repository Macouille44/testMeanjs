'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    errorHandler = require('./errors.server.controller'),
    mongoose = require('mongoose'),
    Group = mongoose.model('Group');

/**
 * Get Groups
 */
exports.getAll = function (req, res) {

    //res.json({test: 12345});

    // Init Variables
    var message = null;

    // Get all groups
    Group.find(function (err, groups) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(groups);
        }
    });
};

/**
 * Add Group
 */
exports.save = function (req, res) {
    // Init Variables
    var message = null;
    var group = new Group(req.body);

    // Then save the group
    group.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(group);
        }
    });
};
