define([
  'require',
  'jquery',
  'base/js/namespace',
], function (
  requirejs,
  $,
  Jupyter,
) {
  "use strict";

  var params = {
      my_config_value: 100
  };

  var initialize = function () {
    console.log('Ext init')
    $.extend(true, params, Jupyter.notebook.config.zen_ui);
    $('<link/>')
      .attr({
        rel: 'stylesheet',
        type: 'text/css',
        href: requirejs.toUrl('./zen-overrides.css')
      })
      .appendTo('head');
  };

  var load_ipython_extension = function () {
    console.log('Ext begin')
    return Jupyter.notebook.config.loaded.then(initialize);
  };

  return {
    load_ipython_extension: load_ipython_extension
  };
});
