/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 1 | Getting Started with PhantomJS
 * Recipe 4  | Running a PhantomJS script with arguments
 */
var system = require('system');

if (system.args.length === 0) {
  console.log('No arguments were passed in.');
} else {
  system.args.forEach(function(arg, index) {
    console.log('[' + index + '] ' + arg);
  });
}

phantom.exit();
