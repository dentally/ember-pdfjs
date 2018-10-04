/* globals PDFJS */
export default {
    name: 'init-pdfjs-workersrc',

    initialize: function() {
      pdfjsLib.disableWorker = true;
      pdfjsLib.workerSrc = '';
    }
}