var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log('in getConfig with ts:' + Date.now());
  var cfg = require("config.js");
  return callback(null, {data: cfg.config});
};


exports.testWeb = function(params, callback) {
  $fh.web({
    url: "http://www.google.com",
    method: "GET",
    contentType: "text/html",
    charset: "UTF-8",
    period: 60000 //cache for 1 min
  }, function(err, result) {
    if (err) {
      console.log("Error : " + err.message);
    } else {
      var data = result.body;
      console.log("Response is " + data);
    }
    return callback(err, result);
  })
}