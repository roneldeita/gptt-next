webpackHotUpdate(2,{

/***/ "./static/css/login-form.css":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"dlPnzszP8HqAHJ8UjL23c","title":"C7D9zTSw5dC-Ief5PLbW_"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = link.onerror = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev.nextSibling);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      module.hot.accept();
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1520932528077");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=2.14e8570e02c9a5f834ae.hot-update.js.map