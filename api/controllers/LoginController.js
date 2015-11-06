/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function(req, res) {
    res.view('./login', {
      errors: req.flash('error')
    });
}}
