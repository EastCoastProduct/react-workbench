'use strict';
/*eslint max-len:0*/

var config = {};

config.env = process.env.NODE_ENV || 'development';
config.database = process.env.DATABASE || 'mongodb://localhost:27017/development';

module.exports = config;
