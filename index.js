/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-aframe',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/aframe.js');
  }
};
