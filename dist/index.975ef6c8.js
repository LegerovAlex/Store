// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _header = require("./components/header");
var _main = require("./components/main");
var _cards = require("./components/cards");
var _footer = require("./components/footer");
var _search = require("./utils/search");
var _addInCart = require("./utils/addInCart");
var _cart = require("./components/cart");
var _\u0441artItems = require("./components/\u0441artItems");
var _preloader = require("./components/preloader");

},{"./components/header":"aorvA","./components/main":"lDxZi","./components/cards":"kZUEy","./components/footer":"bjsug","./components/cart":"97YSD","./components/preloader":"bRV95","./utils/search":"gWZJw","./utils/addInCart":"kkC9i","./components/сartItems":"hrp3s"}],"aorvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _createElement = require("../utils/createElement");
var _render = require("../utils/render");
var _logoSvg = require("../assets/icons/logo.svg");
var _logoSvgDefault = parcelHelpers.interopDefault(_logoSvg);
const subTitileElement = (0, _createElement.createElement)("p", [
    document.createTextNode("Our environment, the world in which we live and work, is a mirror of our attitudes and expectations")
], {
    cssClass: [
        "header-content__subtitle"
    ]
});
const titleElement = (0, _createElement.createElement)("h1", [
    document.createTextNode("Happiness blooms from within")
], {
    cssClass: [
        "header-content__title"
    ]
});
const contentElement = (0, _createElement.createElement)("div", [
    titleElement,
    subTitileElement
], {
    cssClass: [
        "header-content"
    ]
});
const rowElement = (0, _createElement.createElement)("div", [
    contentElement
], {
    cssClass: [
        "header-row"
    ]
});
const logoImgElement = (0, _createElement.createElement)("img", [], {
    cssClass: [
        "hedaer-logo__img"
    ],
    attrs: {
        src: (0, _logoSvgDefault.default)
    }
});
const logoElement = (0, _createElement.createElement)("div", [
    logoImgElement
], {
    cssClass: [
        "header-logo"
    ]
});
const containerElement = (0, _createElement.createElement)("div", [
    logoElement,
    rowElement
], {
    cssClass: [
        "container",
        "header-container"
    ]
});
const headerElement = (0, _createElement.createElement)("div", [
    containerElement
], {
    cssClass: [
        "header"
    ]
});
(0, _render.render)(headerElement, "#root");

},{"../utils/createElement":"c7i4C","../utils/render":"d8Qkz","../assets/icons/logo.svg":"gtEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7i4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function createElement(type, childs = [], options = {}) {
    const cssClass = options.cssClass || [];
    const attrs = options.attrs || {};
    const element = document.createElement(type);
    element.classList.add(...cssClass);
    Object.keys(attrs).forEach((key)=>{
        element.setAttribute(key, attrs[key]);
    });
    element.append(...childs);
    return element;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d8Qkz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
function render(element, parentClassName) {
    const rootElement = document.querySelector(parentClassName);
    rootElement.append(element);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtEwr":[function(require,module,exports) {
module.exports = require("c0c1c58e0ee29f9").getBundleURL("bLxZJ") + "logo.0ff1e26a.svg" + "?" + Date.now();

},{"c0c1c58e0ee29f9":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lDxZi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cartNotificationElement", ()=>cartNotificationElement);
parcelHelpers.export(exports, "cartElement", ()=>cartElement);
parcelHelpers.export(exports, "notFoundMessageElement", ()=>notFoundMessageElement);
parcelHelpers.export(exports, "searchElement", ()=>searchElement);
var _createElement = require("../utils/createElement");
var _render = require("../utils/render");
var _preloader = require("./preloader");
var _cartSvg = require("../assets/icons/cart.svg");
var _cartSvgDefault = parcelHelpers.interopDefault(_cartSvg);
const cardsElement = (0, _createElement.createElement)("div", [], {
    cssClass: [
        "main__product-cards"
    ]
});
const cartNotificationElement = (0, _createElement.createElement)("div", [], {
    cssClass: [
        "notification-circle"
    ]
});
const cartImgElement = (0, _createElement.createElement)("img", [], {
    cssClass: [
        "main-cart__img"
    ],
    attrs: {
        src: (0, _cartSvgDefault.default)
    }
});
const cartElement = (0, _createElement.createElement)("button", [
    cartImgElement,
    cartNotificationElement
], {
    cssClass: [
        "main-cart"
    ]
});
const titleElement = (0, _createElement.createElement)("h2", [
    document.createTextNode("Featured")
], {
    cssClass: [
        "main__title"
    ]
});
const inputElement = (0, _createElement.createElement)("input", [], {
    cssClass: [
        "main-search__input"
    ],
    attrs: {
        type: "text",
        placeholder: "Search..."
    }
});
const notFoundMessageElement = (0, _createElement.createElement)("div", [
    document.createTextNode("The product was not found")
], {
    cssClass: [
        "not-found-message"
    ]
});
const searchElement = (0, _createElement.createElement)("div", [
    inputElement,
    (0, _preloader.preloader)
], {
    cssClass: [
        "main-search"
    ]
});
const rowElement = (0, _createElement.createElement)("div", [
    titleElement,
    cartElement
], {
    cssClass: [
        "main-row"
    ]
});
const containerElement = (0, _createElement.createElement)("div", [
    rowElement,
    searchElement,
    cardsElement
], {
    cssClass: [
        "container",
        "main-container"
    ]
});
const mainElement = (0, _createElement.createElement)("div", [
    containerElement
], {
    cssClass: [
        "main"
    ]
});
(0, _render.render)(mainElement, "#root");

},{"../utils/createElement":"c7i4C","../utils/render":"d8Qkz","./preloader":"bRV95","../assets/icons/cart.svg":"32ua5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRV95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preloader", ()=>preloader);
var _createElement = require("../utils/createElement");
const preloader = (0, _createElement.createElement)("div", [
    document.createTextNode("Loading...")
], {
    cssClass: [
        "preloader"
    ]
});

},{"../utils/createElement":"c7i4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32ua5":[function(require,module,exports) {
module.exports = require("43c20018c1755142").getBundleURL("bLxZJ") + "cart.323bed84.svg" + "?" + Date.now();

},{"43c20018c1755142":"lgJ39"}],"kZUEy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCard", ()=>createCard);
var _store = require("../utils/store");
var _createElement = require("../utils/createElement");
var _render = require("../utils/render");
const createCard = ({ id, title, priceLast, img })=>{
    const cardButtonElement = (0, _createElement.createElement)("button", [
        document.createTextNode("BUY")
    ], {
        cssClass: [
            "product-card__button"
        ],
        attrs: {
            id: Number(id)
        }
    });
    const cardPriceElement = (0, _createElement.createElement)("div", [
        document.createTextNode(`${priceLast} $`)
    ], {
        cssClass: [
            "product-card__price"
        ]
    });
    const cardNameElement = (0, _createElement.createElement)("div", [
        document.createTextNode(title)
    ], {
        cssClass: [
            "product-card__name"
        ]
    });
    const cardImgElement = (0, _createElement.createElement)("img", [], {
        cssClass: [
            "product-card__img"
        ],
        attrs: {
            src: img,
            alt: title
        }
    });
    const productCardElement = (0, _createElement.createElement)("div", [
        cardImgElement,
        cardNameElement,
        cardPriceElement,
        cardButtonElement
    ], {
        cssClass: [
            "product-card"
        ],
        attrs: {
            id: Number(id)
        }
    });
    return productCardElement;
};
(0, _store.getDate)().then((data)=>{
    data.map((productData)=>{
        const productCard = createCard(productData);
        (0, _render.render)(productCard, ".main__product-cards");
    });
}).catch((error)=>{
    console.error("An error occurred while fetching the data:", error);
});

},{"../utils/store":"k2jPV","../utils/createElement":"c7i4C","../utils/render":"d8Qkz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k2jPV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDate", ()=>getDate);
var _preloader = require("../components/preloader");
var _\u0441artItems = require("../components/\u0441artItems");
async function getDate() {
    (0, _preloader.preloader).classList.add("preloader--active");
    try {
        const responce = await fetch("https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS");
        if (!responce.ok) throw new Error("WhoOps");
        const data = await responce.json();
        (0, _preloader.preloader).classList.remove("preloader--active");
        (0, _\u0441artItems.updateCartNotification)();
        return data;
    } catch (error) {
        console.log("Something wrong", error);
    }
}

},{"../components/preloader":"bRV95","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/сartItems":"hrp3s"}],"hrp3s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateCartNotification", ()=>updateCartNotification);
var _main = require("./main");
var _cart = require("./cart");
var _createElement = require("../utils/createElement");
var _render = require("../utils/render");
(0, _cart.modalButtonOrderElement).addEventListener("click", ()=>{
    (0, _cart.modalContentElement).innerHTML = "";
    localStorage.clear();
    retrieveCartData();
    calcAmountPrice();
    updateCartNotification();
});
(0, _main.cartElement).addEventListener("click", ()=>{
    (0, _cart.modalElement).classList.add("modal--active");
});
(0, _cart.modalButtonElement).addEventListener("click", ()=>{
    (0, _cart.modalElement).classList.remove("modal--active");
});
(0, _cart.modalElement).addEventListener("click", (event)=>{
    if (event.target === (0, _cart.modalElement)) (0, _cart.modalElement).classList.remove("modal--active");
});
(0, _main.cartElement).addEventListener("click", retrieveCartData);
const createCartItems = ({ id, title, priceLast })=>{
    const itemPriceElement = (0, _createElement.createElement)("div", [
        document.createTextNode(`${priceLast} $`)
    ], {
        cssClass: [
            "cart-item__price"
        ]
    });
    const itemNameElement = (0, _createElement.createElement)("div", [
        document.createTextNode(title)
    ], {
        cssClass: [
            "cart-item__name"
        ]
    });
    const cartElement = (0, _createElement.createElement)("div", [
        itemNameElement,
        itemPriceElement
    ], {
        cssClass: [
            "cart-item"
        ],
        attrs: {
            id: Number(id)
        }
    });
    return cartElement;
};
function retrieveCartData() {
    const keys = Object.keys(localStorage);
    if (keys.length == 0) (0, _cart.modalContentElement).innerHTML = "Cart is empty...";
    else {
        (0, _cart.modalContentElement).innerHTML = "";
        keys.forEach((key)=>{
            const productInfo = localStorage.getItem(key);
            const productData = JSON.parse(productInfo);
            const cartItems = createCartItems(productData);
            (0, _render.render)(cartItems, ".modal__content");
        });
        calcAmountPrice();
    }
}
function calcAmountPrice() {
    const cartItems = document.querySelectorAll(".cart-item__price");
    let totalPrice = 0;
    cartItems.forEach((price)=>{
        totalPrice += parseFloat(price.textContent);
    });
    const cartAmountElement = document.querySelector(".cart-total__amount");
    cartAmountElement.textContent = totalPrice + " $";
}
function updateCartNotification() {
    if (localStorage.length > 0) (0, _main.cartNotificationElement).classList.add("notification-circle--active");
    else (0, _main.cartNotificationElement).classList.remove("notification-circle--active");
}

},{"./main":"lDxZi","./cart":"97YSD","../utils/createElement":"c7i4C","../utils/render":"d8Qkz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97YSD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modalButtonOrderElement", ()=>modalButtonOrderElement);
parcelHelpers.export(exports, "cartAmountElement", ()=>cartAmountElement);
parcelHelpers.export(exports, "modalContentElement", ()=>modalContentElement);
parcelHelpers.export(exports, "modalButtonElement", ()=>modalButtonElement);
parcelHelpers.export(exports, "modalElement", ()=>modalElement);
var _createElement = require("../utils/createElement");
var _render = require("../utils/render");
const modalButtonOrderElement = (0, _createElement.createElement)("div", [
    document.createTextNode("Remove all")
], {
    cssClass: [
        "order-button"
    ]
});
const cartAmountElement = (0, _createElement.createElement)("div", [
    document.createTextNode("0 $")
], {
    cssClass: [
        "cart-total__amount"
    ]
});
const cartLabelElement = (0, _createElement.createElement)("div", [
    document.createTextNode("Amount:")
], {
    cssClass: [
        "cart-total__label"
    ]
});
const cartTotalElement = (0, _createElement.createElement)("div", [
    cartLabelElement,
    cartAmountElement
], {
    cssClass: [
        "cart-total"
    ]
});
const modalFotterElement = (0, _createElement.createElement)("div", [
    cartTotalElement,
    modalButtonOrderElement
], {
    cssClass: [
        "modal__footer"
    ]
});
const modalContentElement = (0, _createElement.createElement)("div", [], {
    cssClass: [
        "modal__content"
    ]
});
const modalButtonElement = (0, _createElement.createElement)("button", [
    document.createTextNode("X")
], {
    cssClass: [
        "modal__close"
    ]
});
const modalTitleElement = (0, _createElement.createElement)("h2", [
    document.createTextNode("Cart")
], {
    cssClass: [
        "modal__title"
    ]
});
const modalHeaderElement = (0, _createElement.createElement)("div", [
    modalTitleElement,
    modalButtonElement
], {
    cssClass: [
        "modal__header"
    ]
});
const modalInnerElement = (0, _createElement.createElement)("div", [
    modalHeaderElement,
    modalContentElement,
    modalFotterElement
], {
    cssClass: [
        "modal__inner"
    ]
});
const modalElement = (0, _createElement.createElement)("div", [
    modalInnerElement
], {
    cssClass: [
        "modal"
    ]
});
(0, _render.render)(modalElement, ".main");

},{"../utils/createElement":"c7i4C","../utils/render":"d8Qkz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjsug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "phoneElement", ()=>phoneElement);
var _createElement = require("../utils/createElement");
var _render = require("../utils/render");
const emailElement = (0, _createElement.createElement)("a", [
    document.createTextNode("email: example@example.com")
], {
    cssClass: [
        "footer__email"
    ],
    attrs: {
        href: "example@example.com"
    }
});
const phoneElement = (0, _createElement.createElement)("a", [
    document.createTextNode("tel: +123456789")
], {
    cssClass: [
        "footer__phone"
    ],
    attrs: {
        href: "tel:+1234567890"
    }
});
const contactsElement = (0, _createElement.createElement)("div", [
    phoneElement,
    emailElement
], {
    cssClass: [
        "footer__contacts"
    ]
});
const textElement = (0, _createElement.createElement)("p", [
    document.createTextNode("*only for the same region")
], {
    cssClass: [
        "footer__text"
    ]
});
const titleElement = (0, _createElement.createElement)("h2", [
    document.createTextNode("Free Shipping Services")
], {
    cssClass: [
        "footer__title"
    ]
});
const containerElement = (0, _createElement.createElement)("div", [
    titleElement,
    textElement,
    contactsElement
], {
    cssClass: [
        "container",
        "footer-container"
    ]
});
const footerElement = (0, _createElement.createElement)("div", [
    containerElement
], {
    cssClass: [
        "footer"
    ]
});
(0, _render.render)(footerElement, "#root");

},{"../utils/createElement":"c7i4C","../utils/render":"d8Qkz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWZJw":[function(require,module,exports) {
var _cards = require("../components/cards");
var _render = require("./render");
var _main = require("../components/main");
var _debounce = require("./debounce");
var _preloader = require("../components/preloader");
(0, _main.searchElement).addEventListener("input", (0, _debounce.debounce)(searchItems, 500));
async function searchItems(event) {
    const searchText = event.target.value.trim().toLowerCase();
    const productContainer = document.querySelector(".main__product-cards");
    productContainer.innerHTML = "";
    (0, _preloader.preloader).classList.add("preloader--active");
    try {
        const response = await fetch(`https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS?search=${searchText}`);
        if (!response.ok) {
            (0, _render.render)((0, _main.notFoundMessageElement), ".main__product-cards");
            throw new Error("No products found with this name");
        }
        const data = await response.json();
        data.map((productData)=>{
            const productCard = (0, _cards.createCard)(productData);
            (0, _render.render)(productCard, ".main__product-cards");
        });
    } catch (error) {
        console.log("Error while executing the request:", error);
    }
    (0, _preloader.preloader).classList.remove("preloader--active");
}

},{"../components/cards":"kZUEy","./render":"d8Qkz","../components/main":"lDxZi","./debounce":"ai2oT","../components/preloader":"bRV95"}],"ai2oT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(func, delay) {
    let timeroutId;
    return function executedFunction(...args) {
        clearTimeout(timeroutId);
        timeroutId = setTimeout(()=>{
            func.apply(this, args);
        }, delay);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkC9i":[function(require,module,exports) {
var _\u0441artItems = require("../components/\u0441artItems");
async function addToCart(event) {
    if (event.target.closest(".product-card__button")) {
        event.preventDefault();
        const buttonId = event.target.getAttribute("id");
        try {
            const responce = await fetch(`https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS/${buttonId}`);
            if (!responce.ok) throw new Error("Whoops");
            const productData = await responce.json();
            const uniqueKey = `${buttonId}_${Date.now()}`;
            const productInfo = JSON.stringify({
                id: productData.id,
                title: productData.title,
                priceLast: productData.priceLast
            });
            localStorage.setItem(uniqueKey, productInfo);
        } catch (error) {
            console.log("Error while fetching product data:", error);
        }
    }
    (0, _\u0441artItems.updateCartNotification)();
}
const productCardsContainer = document.querySelector(".main__product-cards");
productCardsContainer.addEventListener("click", addToCart);

},{"../components/сartItems":"hrp3s"}]},["farZc","8lqZg"], "8lqZg", "parcelRequirebf5a")

//# sourceMappingURL=index.975ef6c8.js.map
