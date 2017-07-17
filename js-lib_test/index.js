jsLibs.exportModule('test-lib', 'index', (require, module) => { 'use strict';

const TestLib = require('./TestLib');

module.exports = new TestLib();
 });
