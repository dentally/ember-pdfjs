'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-pdfjs',

  included: function(app, parentAddon) {

    this._super.included.apply(this, arguments);

    var target = (parentAddon || app);

    target.import(target.bowerDirectory + '/pdfjs-dist/build/pdf.min.js');
    target.import(target.bowerDirectory + '/pdfjs-dist/build/pdf.worker.min.js');
    target.import(target.bowerDirectory + '/pdfjs-dist/web/pdf_viewer.css');
    target.import(target.bowerDirectory + '/pdfjs-dist/web/pdf_viewer.js');
  }
}
