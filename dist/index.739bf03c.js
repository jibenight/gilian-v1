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
})({"cVgJb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
var _splideExtensionVideo = require("@splidejs/splide-extension-video");
var _splideExtensionVideoMinCss = require("@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css");
var _splideMinCss = require("@splidejs/splide/dist/css/splide.min.css");
var _animateCss = require("animate.css");
var _data = require("../../data");
// js for menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n)=>n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
// solve anchor issue height
const navigationHeight = document.querySelector(".navbar").offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight - 1 + "px");
// slider with Splide for carrousel
new (0, _splideDefault.default)("#main-carousel", {
    type: "fade",
    rewind: true,
    padding: "8rem",
    width: "75vw",
    breakpoints: {
        1000: {
            width: "100vw",
            padding: "0"
        }
    }
}).mount();
// video slide for clips
new (0, _splideDefault.default)("#video-slides", {
    type: "fade",
    rewind: true,
    padding: "8rem",
    width: "75vw",
    breakpoints: {
        1000: {
            padding: "0",
            width: "100vw"
        }
    },
    video: {
        loop: true
    }
}).mount({
    Video: (0, _splideExtensionVideo.Video)
});
// add class for animate on title h2
const elementsToLoadIn = new Set([
    ...document.querySelectorAll("#event h2"),
    ...document.querySelectorAll("#clips h2"),
    ...document.querySelectorAll("#galerie h2"),
    ...document.querySelectorAll("#presentation h2"),
    ...document.querySelectorAll("#footer h2")
]);
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};
function observerFlipInX(entries) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) entry.target.classList.add("animate__flipInX");
        else entry.target.classList.remove("animate__flipInX");
    });
}
const observer = new IntersectionObserver(observerFlipInX, observerOptions);
elementsToLoadIn.forEach((el)=>observer.observe(el));
// add animate fadin for slider
const elementsToLoadIn2 = new Set([
    ...document.querySelectorAll(".fade")
]);
function observerFadIn(entries) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) entry.target.classList.add("animate__fadeIn");
        else entry.target.classList.remove("animate__fadeIn");
    });
}
const observer2 = new IntersectionObserver(observerFadIn, observerOptions);
elementsToLoadIn2.forEach((el)=>observer2.observe(el));
// hide email
const email = document.getElementById("email-contact");
const part1 = "contact";
const part2 = Math.pow(2, 6);
const part3 = String.fromCharCode(part2);
const part4 = "gilian-officiel.com";
const part5 = part1 + String.fromCharCode(part2) + part4;
const emailResult = "<a href=mailto:" + part5 + ">" + part1 + part3 + part4 + "</a>";
email.insertAdjacentHTML("afterbegin", emailResult);
for (const i of Object.entries((0, _data.dataClips)))console.log(i[0][1]); // affiche 3, 5, 7 dans la console

},{"@splidejs/splide":"5CJev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@splidejs/splide-extension-video":"e4I1P","@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css":"g0nYl","@splidejs/splide/dist/css/splide.min.css":"1SEZe","animate.css":"8t3va","../../data":"5pclG"}],"5CJev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLASSES", ()=>CLASSES);
parcelHelpers.export(exports, "CLASS_ACTIVE", ()=>CLASS_ACTIVE);
parcelHelpers.export(exports, "CLASS_ARROW", ()=>CLASS_ARROW);
parcelHelpers.export(exports, "CLASS_ARROWS", ()=>CLASS_ARROWS);
parcelHelpers.export(exports, "CLASS_ARROW_NEXT", ()=>CLASS_ARROW_NEXT);
parcelHelpers.export(exports, "CLASS_ARROW_PREV", ()=>CLASS_ARROW_PREV);
parcelHelpers.export(exports, "CLASS_CLONE", ()=>CLASS_CLONE);
parcelHelpers.export(exports, "CLASS_CONTAINER", ()=>CLASS_CONTAINER);
parcelHelpers.export(exports, "CLASS_FOCUS_IN", ()=>CLASS_FOCUS_IN);
parcelHelpers.export(exports, "CLASS_INITIALIZED", ()=>CLASS_INITIALIZED);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST);
parcelHelpers.export(exports, "CLASS_LOADING", ()=>CLASS_LOADING);
parcelHelpers.export(exports, "CLASS_NEXT", ()=>CLASS_NEXT);
parcelHelpers.export(exports, "CLASS_OVERFLOW", ()=>CLASS_OVERFLOW);
parcelHelpers.export(exports, "CLASS_PAGINATION", ()=>CLASS_PAGINATION);
parcelHelpers.export(exports, "CLASS_PAGINATION_PAGE", ()=>CLASS_PAGINATION_PAGE);
parcelHelpers.export(exports, "CLASS_PREV", ()=>CLASS_PREV);
parcelHelpers.export(exports, "CLASS_PROGRESS", ()=>CLASS_PROGRESS);
parcelHelpers.export(exports, "CLASS_PROGRESS_BAR", ()=>CLASS_PROGRESS_BAR);
parcelHelpers.export(exports, "CLASS_ROOT", ()=>CLASS_ROOT);
parcelHelpers.export(exports, "CLASS_SLIDE", ()=>CLASS_SLIDE);
parcelHelpers.export(exports, "CLASS_SPINNER", ()=>CLASS_SPINNER);
parcelHelpers.export(exports, "CLASS_SR", ()=>CLASS_SR);
parcelHelpers.export(exports, "CLASS_TOGGLE", ()=>CLASS_TOGGLE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PAUSE", ()=>CLASS_TOGGLE_PAUSE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PLAY", ()=>CLASS_TOGGLE_PLAY);
parcelHelpers.export(exports, "CLASS_TRACK", ()=>CLASS_TRACK);
parcelHelpers.export(exports, "CLASS_VISIBLE", ()=>CLASS_VISIBLE);
parcelHelpers.export(exports, "DEFAULTS", ()=>DEFAULTS);
parcelHelpers.export(exports, "EVENT_ACTIVE", ()=>EVENT_ACTIVE);
parcelHelpers.export(exports, "EVENT_ARROWS_MOUNTED", ()=>EVENT_ARROWS_MOUNTED);
parcelHelpers.export(exports, "EVENT_ARROWS_UPDATED", ()=>EVENT_ARROWS_UPDATED);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PAUSE", ()=>EVENT_AUTOPLAY_PAUSE);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAY", ()=>EVENT_AUTOPLAY_PLAY);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAYING", ()=>EVENT_AUTOPLAY_PLAYING);
parcelHelpers.export(exports, "EVENT_CLICK", ()=>EVENT_CLICK);
parcelHelpers.export(exports, "EVENT_DESTROY", ()=>EVENT_DESTROY);
parcelHelpers.export(exports, "EVENT_DRAG", ()=>EVENT_DRAG);
parcelHelpers.export(exports, "EVENT_DRAGGED", ()=>EVENT_DRAGGED);
parcelHelpers.export(exports, "EVENT_DRAGGING", ()=>EVENT_DRAGGING);
parcelHelpers.export(exports, "EVENT_END_INDEX_CHANGED", ()=>EVENT_END_INDEX_CHANGED);
parcelHelpers.export(exports, "EVENT_HIDDEN", ()=>EVENT_HIDDEN);
parcelHelpers.export(exports, "EVENT_INACTIVE", ()=>EVENT_INACTIVE);
parcelHelpers.export(exports, "EVENT_LAZYLOAD_LOADED", ()=>EVENT_LAZYLOAD_LOADED);
parcelHelpers.export(exports, "EVENT_MOUNTED", ()=>EVENT_MOUNTED);
parcelHelpers.export(exports, "EVENT_MOVE", ()=>EVENT_MOVE);
parcelHelpers.export(exports, "EVENT_MOVED", ()=>EVENT_MOVED);
parcelHelpers.export(exports, "EVENT_NAVIGATION_MOUNTED", ()=>EVENT_NAVIGATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_OVERFLOW", ()=>EVENT_OVERFLOW);
parcelHelpers.export(exports, "EVENT_PAGINATION_MOUNTED", ()=>EVENT_PAGINATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_PAGINATION_UPDATED", ()=>EVENT_PAGINATION_UPDATED);
parcelHelpers.export(exports, "EVENT_READY", ()=>EVENT_READY);
parcelHelpers.export(exports, "EVENT_REFRESH", ()=>EVENT_REFRESH);
parcelHelpers.export(exports, "EVENT_RESIZE", ()=>EVENT_RESIZE);
parcelHelpers.export(exports, "EVENT_RESIZED", ()=>EVENT_RESIZED);
parcelHelpers.export(exports, "EVENT_SCROLL", ()=>EVENT_SCROLL);
parcelHelpers.export(exports, "EVENT_SCROLLED", ()=>EVENT_SCROLLED);
parcelHelpers.export(exports, "EVENT_SHIFTED", ()=>EVENT_SHIFTED);
parcelHelpers.export(exports, "EVENT_SLIDE_KEYDOWN", ()=>EVENT_SLIDE_KEYDOWN);
parcelHelpers.export(exports, "EVENT_UPDATED", ()=>EVENT_UPDATED);
parcelHelpers.export(exports, "EVENT_VISIBLE", ()=>EVENT_VISIBLE);
parcelHelpers.export(exports, "EventBinder", ()=>EventBinder);
parcelHelpers.export(exports, "EventInterface", ()=>EventInterface);
parcelHelpers.export(exports, "FADE", ()=>FADE);
parcelHelpers.export(exports, "LOOP", ()=>LOOP);
parcelHelpers.export(exports, "LTR", ()=>LTR);
parcelHelpers.export(exports, "RTL", ()=>RTL);
parcelHelpers.export(exports, "RequestInterval", ()=>RequestInterval);
parcelHelpers.export(exports, "SLIDE", ()=>SLIDE);
parcelHelpers.export(exports, "STATUS_CLASSES", ()=>STATUS_CLASSES);
parcelHelpers.export(exports, "Splide", ()=>Splide);
parcelHelpers.export(exports, "SplideRenderer", ()=>SplideRenderer);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "TTB", ()=>TTB);
parcelHelpers.export(exports, "Throttle", ()=>Throttle);
parcelHelpers.export(exports, "default", ()=>Splide);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
    CREATED: CREATED,
    MOUNTED: MOUNTED,
    IDLE: IDLE,
    MOVING: MOVING,
    SCROLLING: SCROLLING,
    DRAGGING: DRAGGING,
    DESTROYED: DESTROYED
};
function empty(array) {
    array.length = 0;
}
function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
    return func.bind.apply(func, [
        null
    ].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop() {};
function raf(func) {
    return requestAnimationFrame(func);
}
function typeOf(type, subject) {
    return typeof subject === type;
}
function isObject(subject) {
    return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
    return subject === null;
}
function isHTMLElement(subject) {
    try {
        return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
        return false;
    }
}
function toArray(value) {
    return isArray(value) ? value : [
        value
    ];
}
function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
}
function includes(array, value) {
    return array.indexOf(value) > -1;
}
function push(array, items) {
    array.push.apply(array, toArray(items));
    return array;
}
function toggleClass(elm, classes, add) {
    if (elm) forEach(classes, function(name) {
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children) {
    forEach(children, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
    forEach(nodes, function(node) {
        var parent = (ref || node).parentNode;
        if (parent) parent.insertBefore(node, ref);
    });
}
function matches(elm, selector) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
    var children2 = parent ? slice(parent.children) : [];
    return selector ? children2.filter(function(child) {
        return matches(child, selector);
    }) : children2;
}
function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
    if (object) (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
    });
    return object;
}
function assign(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            object[key] = source[key];
        });
    });
    return object;
}
function merge(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            if (isArray(value)) object[key] = value.slice();
            else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
            else object[key] = value;
        });
    });
    return object;
}
function omit(object, keys) {
    forEach(keys || ownKeys(object), function(key) {
        delete object[key];
    });
}
function removeAttribute(elms, attrs) {
    forEach(elms, function(elm) {
        forEach(attrs, function(attr) {
            elm && elm.removeAttribute(attr);
        });
    });
}
function setAttribute(elms, attrs, value) {
    if (isObject(attrs)) forOwn(attrs, function(value2, name) {
        setAttribute(elms, name, value2);
    });
    else forEach(elms, function(elm) {
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
}
function create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    parent && append(parent, elm);
    return elm;
}
function style(elm, prop, value) {
    if (isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!isNull(value)) elm.style[prop] = "" + value;
}
function display(elm, display2) {
    style(elm, "display", display2);
}
function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
        preventScroll: true
    });
}
function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function rect(target) {
    return target.getBoundingClientRect();
}
function remove(nodes) {
    forEach(nodes, function(node) {
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}
function query(parent, selector) {
    return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
    return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
}
function timeOf(e) {
    return e.timeStamp;
}
function unit(value) {
    return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
    if (!condition) throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return min(max(minimum, number), maximum);
}
function sign(x) {
    return +(x > 0) - +(x < 0);
}
function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function format(string, replacements) {
    forEach(replacements, function(replacement) {
        string = string.replace("%s", "" + replacement);
    });
    return string;
}
function pad(number) {
    return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
    return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, function(target, event, namespace) {
            var isEventTarget = "addEventListener" in target;
            var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
            isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
            listeners.push([
                target,
                event,
                namespace,
                callback,
                remover
            ]);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, function(target, event, namespace) {
            listeners = listeners.filter(function(listener) {
                if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                    listener[4]();
                    return false;
                }
                return true;
            });
        });
    }
    function dispatch(target, type, detail) {
        var e;
        var bubbles = true;
        if (typeof CustomEvent === "function") e = new CustomEvent(type, {
            bubbles: bubbles,
            detail: detail
        });
        else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, bubbles, false, detail);
        }
        target.dispatchEvent(e);
        return e;
    }
    function forEachEvent(targets, events, iteratee) {
        forEach(targets, function(target) {
            target && forEach(events, function(events2) {
                events2.split(" ").forEach(function(eventNS) {
                    var fragment = eventNS.split(".");
                    iteratee(target, fragment[0], fragment[1]);
                });
            });
        });
    }
    function destroy() {
        listeners.forEach(function(data) {
            data[4]();
        });
        empty(listeners);
    }
    return {
        bind: bind,
        unbind: unbind,
        dispatch: dispatch,
        destroy: destroy
    };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
        binder.bind(bus, toArray(events).join(" "), function(e) {
            callback.apply(callback, isArray(e.detail) ? e.detail : []);
        });
    }
    function emit(event) {
        binder.dispatch(bus, event, slice(arguments, 1));
    }
    if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
    return assign(binder, {
        bus: bus,
        on: on,
        off: apply(binder.unbind, bus),
        emit: emit
    });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
        if (!paused) {
            rate = interval ? min((now() - startTime) / interval, 1) : 1;
            onUpdate && onUpdate(rate);
            if (rate >= 1) {
                onInterval();
                startTime = now();
                if (limit && ++count >= limit) return pause();
            }
            id = raf(update);
        }
    }
    function start(resume) {
        resume || cancel();
        startTime = now() - (resume ? rate * interval : 0);
        paused = false;
        id = raf(update);
    }
    function pause() {
        paused = true;
    }
    function rewind() {
        startTime = now();
        rate = 0;
        if (onUpdate) onUpdate(rate);
    }
    function cancel() {
        id && cancelAnimationFrame(id);
        rate = 0;
        id = 0;
        paused = true;
    }
    function set(time) {
        interval = time;
    }
    function isPaused() {
        return paused;
    }
    return {
        start: start,
        rewind: rewind,
        pause: pause,
        cancel: cancel,
        set: set,
        isPaused: isPaused
    };
}
function State(initialState) {
    var state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return includes(toArray(states), state);
    }
    return {
        set: set,
        is: is
    };
}
function Throttle(func, duration) {
    var interval = RequestInterval(duration || 0, func, null, 1);
    return function() {
        interval.isPaused() && interval.start();
    };
}
function Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = EventBinder();
    var queries = [];
    function setup() {
        var isMin = options.mediaQuery === "min";
        ownKeys(breakpoints).sort(function(n, m) {
            return isMin ? +n - +m : +m - +n;
        }).forEach(function(key) {
            register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
        });
        register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
        update();
    }
    function destroy(completely) {
        if (completely) binder.destroy();
    }
    function register(options2, query) {
        var queryList = matchMedia(query);
        binder.bind(queryList, "change", update);
        queries.push([
            options2,
            queryList
        ]);
    }
    function update() {
        var destroyed = state.is(DESTROYED);
        var direction = options.direction;
        var merged = queries.reduce(function(merged2, entry) {
            return merge(merged2, entry[1].matches ? entry[0] : {});
        }, {});
        omit(options);
        set(merged);
        if (options.destroy) Splide2.destroy(options.destroy === "completely");
        else if (destroyed) {
            destroy(true);
            Splide2.mount();
        } else direction !== options.direction && Splide2.refresh();
    }
    function reduce(enable) {
        if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
    function set(opts, base, notify) {
        merge(options, opts);
        base && merge(Object.getPrototypeOf(options), opts);
        if (notify || !state.is(CREATED)) Splide2.emit(EVENT_UPDATED, options);
    }
    return {
        setup: setup,
        destroy: destroy,
        reduce: reduce,
        set: set
    };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
    width: [
        "height"
    ],
    left: [
        "top",
        "right"
    ],
    right: [
        "bottom",
        "left"
    ],
    x: [
        "y"
    ],
    X: [
        "Y"
    ],
    Y: [
        "X"
    ],
    ArrowLeft: [
        ARROW_UP,
        ARROW_RIGHT
    ],
    ArrowRight: [
        ARROW_DOWN,
        ARROW_LEFT
    ]
};
function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
        direction = direction || options.direction;
        var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
        return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
            var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
            return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
        });
    }
    function orient(value) {
        return value * (options.direction === RTL ? 1 : -1);
    }
    return {
        resolve: resolve,
        orient: orient
    };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [
    ROLE,
    TAB_INDEX,
    DISABLED,
    ARIA_CONTROLS,
    ARIA_CURRENT,
    ARIA_LABEL,
    ARIA_LABELLEDBY,
    ARIA_HIDDEN,
    ARIA_ORIENTATION,
    ARIA_ROLEDESCRIPTION
];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [
    CLASS_ACTIVE,
    CLASS_VISIBLE,
    CLASS_PREV,
    CLASS_NEXT,
    CLASS_LOADING,
    CLASS_FOCUS_IN,
    CLASS_OVERFLOW
];
var CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
};
function closest(from, selector) {
    if (isFunction(from.closest)) return from.closest(selector);
    var elm = from;
    while(elm && elm.nodeType === 1){
        if (matches(elm, selector)) break;
        elm = elm.parentElement;
    }
    return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
    var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
        collect();
        init();
        update();
    }
    function mount() {
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, setup);
        on(EVENT_UPDATED, update);
        bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
            isUsingKey = e.type === "keydown";
        }, {
            capture: true
        });
        bind(root, "focusin", function() {
            toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
        });
    }
    function destroy(completely) {
        var attrs = ALL_ATTRIBUTES.concat("style");
        empty(slides);
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        removeAttribute([
            track,
            list
        ], attrs);
        removeAttribute(root, completely ? attrs : [
            "style",
            ARIA_ROLEDESCRIPTION
        ]);
    }
    function update() {
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        rootClasses = getClasses(CLASS_ROOT);
        trackClasses = getClasses(CLASS_TRACK);
        addClass(root, rootClasses);
        addClass(track, trackClasses);
        setAttribute(root, ARIA_LABEL, options.label);
        setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
        track = find("." + CLASS_TRACK);
        list = child(track, "." + CLASS_LIST);
        assert(track && list, "A track/list element is missing.");
        push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
        forOwn({
            arrows: CLASS_ARROWS,
            pagination: CLASS_PAGINATION,
            prev: CLASS_ARROW_PREV,
            next: CLASS_ARROW_NEXT,
            bar: CLASS_PROGRESS_BAR,
            toggle: CLASS_TOGGLE
        }, function(className, key) {
            elements[key] = find("." + className);
        });
        assign(elements, {
            root: root,
            track: track,
            list: list,
            slides: slides
        });
    }
    function init() {
        var id = root.id || uniqueId(PROJECT_CODE);
        var role = options.role;
        root.id = id;
        track.id = track.id || id + "-track";
        list.id = list.id || id + "-list";
        if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) setAttribute(root, ROLE, role);
        setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
        setAttribute(list, ROLE, "presentation");
    }
    function find(selector) {
        var elm = query(root, selector);
        return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
        return [
            base + "--" + options.type,
            base + "--" + options.direction,
            options.drag && base + "--draggable",
            options.isNavigation && base + "--nav",
            base === CLASS_ROOT && CLASS_ACTIVE
        ];
    }
    return assign(elements, {
        setup: setup,
        mount: mount,
        destroy: destroy
    });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = getAttribute(slide, "style");
    var label = getAttribute(slide, ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = child(slide, "." + CLASS_CONTAINER);
    var destroyed;
    function mount() {
        if (!isClone) {
            slide.id = root.id + "-slide" + pad(index + 1);
            setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
            setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
            setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [
                index + 1,
                Splide2.length
            ]));
        }
        listen();
    }
    function listen() {
        bind(slide, "click", apply(emit, EVENT_CLICK, self));
        bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
        on([
            EVENT_MOVED,
            EVENT_SHIFTED,
            EVENT_SCROLLED
        ], update);
        on(EVENT_NAVIGATION_MOUNTED, initNavigation);
        if (updateOnMove) on(EVENT_MOVE, onMove);
    }
    function destroy() {
        destroyed = true;
        event.destroy();
        removeClass(slide, STATUS_CLASSES);
        removeAttribute(slide, ALL_ATTRIBUTES);
        setAttribute(slide, "style", styles);
        setAttribute(slide, ARIA_LABEL, label || "");
    }
    function initNavigation() {
        var controls = Splide2.splides.map(function(target) {
            var Slide2 = target.splide.Components.Slides.getAt(index);
            return Slide2 ? Slide2.slide.id : "";
        }).join(" ");
        setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
        setAttribute(slide, ARIA_CONTROLS, controls);
        setAttribute(slide, ROLE, slideFocus ? "button" : "");
        slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
        if (!destroyed) update();
    }
    function update() {
        if (!destroyed) {
            var curr = Splide2.index;
            updateActivity();
            updateVisibility();
            toggleClass(slide, CLASS_PREV, index === curr - 1);
            toggleClass(slide, CLASS_NEXT, index === curr + 1);
        }
    }
    function updateActivity() {
        var active = isActive();
        if (active !== hasClass(slide, CLASS_ACTIVE)) {
            toggleClass(slide, CLASS_ACTIVE, active);
            setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
            emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
        }
    }
    function updateVisibility() {
        var visible = isVisible();
        var hidden = !visible && (!isActive() || isClone);
        if (!Splide2.state.is([
            MOVING,
            SCROLLING
        ])) setAttribute(slide, ARIA_HIDDEN, hidden || "");
        setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
        if (slideFocus) setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
        if (visible !== hasClass(slide, CLASS_VISIBLE)) {
            toggleClass(slide, CLASS_VISIBLE, visible);
            emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
        }
        if (!visible && document.activeElement === slide) {
            var Slide2 = Components.Slides.getAt(Splide2.index);
            Slide2 && focus(Slide2.slide);
        }
    }
    function style$1(prop, value, useContainer) {
        style(useContainer && container || slide, prop, value);
    }
    function isActive() {
        var curr = Splide2.index;
        return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
        if (Splide2.is(FADE)) return isActive();
        var trackRect = rect(Components.Elements.track);
        var slideRect = rect(slide);
        var left = resolve("left", true);
        var right = resolve("right", true);
        return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
        var diff = abs(from - index);
        if (!isClone && (options.rewind || Splide2.is(LOOP))) diff = min(diff, Splide2.length - diff);
        return diff <= distance;
    }
    var self = {
        index: index,
        slideIndex: slideIndex,
        slide: slide,
        container: container,
        isClone: isClone,
        mount: mount,
        destroy: destroy,
        update: update,
        style: style$1,
        isWithin: isWithin
    };
    return self;
}
function Slides(Splide2, Components2, options) {
    var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
        init();
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, init);
    }
    function init() {
        slides.forEach(function(slide, index) {
            register(slide, index, -1);
        });
    }
    function destroy() {
        forEach$1(function(Slide2) {
            Slide2.destroy();
        });
        empty(Slides2);
    }
    function update() {
        forEach$1(function(Slide2) {
            Slide2.update();
        });
    }
    function register(slide, index, slideIndex) {
        var object = Slide$1(Splide2, index, slideIndex, slide);
        object.mount();
        Slides2.push(object);
        Slides2.sort(function(Slide1, Slide2) {
            return Slide1.index - Slide2.index;
        });
    }
    function get(excludeClones) {
        return excludeClones ? filter(function(Slide2) {
            return !Slide2.isClone;
        }) : Slides2;
    }
    function getIn(page) {
        var Controller = Components2.Controller;
        var index = Controller.toIndex(page);
        var max = Controller.hasFocus() ? 1 : options.perPage;
        return filter(function(Slide2) {
            return between(Slide2.index, index, index + max - 1);
        });
    }
    function getAt(index) {
        return filter(index)[0];
    }
    function add(items, index) {
        forEach(items, function(slide) {
            if (isString(slide)) slide = parseHtml(slide);
            if (isHTMLElement(slide)) {
                var ref = slides[index];
                ref ? before(slide, ref) : append(list, slide);
                addClass(slide, options.classes.slide);
                observeImages(slide, apply(emit, EVENT_RESIZE));
            }
        });
        emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
        remove(filter(matcher).map(function(Slide2) {
            return Slide2.slide;
        }));
        emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
        get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
        return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
            return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
        });
    }
    function style(prop, value, useContainer) {
        forEach$1(function(Slide2) {
            Slide2.style(prop, value, useContainer);
        });
    }
    function observeImages(elm, callback) {
        var images = queryAll(elm, "img");
        var length = images.length;
        if (length) images.forEach(function(img) {
            bind(img, "load error", function() {
                if (!--length) callback();
            });
        });
        else callback();
    }
    function getLength(excludeClones) {
        return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
        return Slides2.length > options.perPage;
    }
    return {
        mount: mount,
        destroy: destroy,
        update: update,
        register: register,
        get: get,
        getIn: getIn,
        getAt: getAt,
        add: add,
        remove: remove$1,
        forEach: forEach$1,
        filter: filter,
        style: style,
        getLength: getLength,
        isEnough: isEnough
    };
}
function Layout(Splide2, Components2, options) {
    var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides.getAt, styleSlides = Slides.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
        init();
        bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init);
        on(EVENT_RESIZE, resize);
    }
    function init() {
        vertical = options.direction === TTB;
        style(root, "maxWidth", unit(options.width));
        style(track, resolve("paddingLeft"), cssPadding(false));
        style(track, resolve("paddingRight"), cssPadding(true));
        resize(true);
    }
    function resize(force) {
        var newRect = rect(root);
        if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
            style(track, "height", cssTrackHeight());
            styleSlides(resolve("marginRight"), unit(options.gap));
            styleSlides("width", cssSlideWidth());
            styleSlides("height", cssSlideHeight(), true);
            rootRect = newRect;
            emit(EVENT_RESIZED);
            if (overflow !== (overflow = isOverflow())) {
                toggleClass(root, CLASS_OVERFLOW, overflow);
                emit(EVENT_OVERFLOW, overflow);
            }
        }
    }
    function cssPadding(right) {
        var padding = options.padding;
        var prop = resolve(right ? "right" : "left");
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
        var height = "";
        if (vertical) {
            height = cssHeight();
            assert(height, "height or heightRatio is missing.");
            height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
        }
        return height;
    }
    function cssHeight() {
        return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
        return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
        return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
        return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
        var Slide = getAt(index || 0);
        return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
        var Slide = getAt(index);
        if (Slide) {
            var right = rect(Slide.slide)[resolve("right")];
            var left = rect(list)[resolve("left")];
            return abs(right - left) + (withoutGap ? 0 : getGap());
        }
        return 0;
    }
    function sliderSize(withoutGap) {
        return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
        var Slide = getAt(0);
        return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
        return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
        return Splide2.is(FADE) || sliderSize(true) > listSize();
    }
    return {
        mount: mount,
        resize: resize,
        listSize: listSize,
        slideSize: slideSize,
        sliderSize: sliderSize,
        totalSize: totalSize,
        getPadding: getPadding,
        isOverflow: isOverflow
    };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on;
    var Elements = Components2.Elements, Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
        on(EVENT_REFRESH, remount);
        on([
            EVENT_UPDATED,
            EVENT_RESIZE
        ], observe);
        if (cloneCount = computeCloneCount()) {
            generate(cloneCount);
            Components2.Layout.resize(true);
        }
    }
    function remount() {
        destroy();
        mount();
    }
    function destroy() {
        remove(clones);
        empty(clones);
        event.destroy();
    }
    function observe() {
        var count = computeCloneCount();
        if (cloneCount !== count) {
            if (cloneCount < count || !count) event.emit(EVENT_REFRESH);
        }
    }
    function generate(count) {
        var slides = Slides.get().slice();
        var length = slides.length;
        if (length) {
            while(slides.length < count)push(slides, slides);
            push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide, index) {
                var isHead = index < count;
                var clone = cloneDeep(Slide.slide, index);
                isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
                push(clones, clone);
                Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
            });
        }
    }
    function cloneDeep(elm, index) {
        var clone = elm.cloneNode(true);
        addClass(clone, options.classes.clone);
        clone.id = Splide2.root.id + "-clone" + pad(index + 1);
        return clone;
    }
    function computeCloneCount() {
        var clones2 = options.clones;
        if (!Splide2.is(LOOP)) clones2 = 0;
        else if (isUndefined(clones2)) {
            var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
            var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
            clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
        }
        return clones2;
    }
    return {
        mount: mount,
        destroy: destroy
    };
}
function Move(Splide2, Components2, options) {
    var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
        Transition = Components2.Transition;
        on([
            EVENT_MOUNTED,
            EVENT_RESIZED,
            EVENT_UPDATED,
            EVENT_REFRESH
        ], reposition);
    }
    function reposition() {
        if (!Components2.Controller.isBusy()) {
            Components2.Scroll.cancel();
            jump(Splide2.index);
            Components2.Slides.update();
        }
    }
    function move(dest, index, prev, callback) {
        if (dest !== index && canShift(dest > prev)) {
            cancel();
            translate(shift(getPosition(), dest > prev), true);
        }
        set(MOVING);
        emit(EVENT_MOVE, index, prev, dest);
        Transition.start(index, function() {
            set(IDLE);
            emit(EVENT_MOVED, index, prev, dest);
            callback && callback();
        });
    }
    function jump(index) {
        translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
        if (!Splide2.is(FADE)) {
            var destination = preventLoop ? position : loop(position);
            style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
            position !== destination && emit(EVENT_SHIFTED);
        }
    }
    function loop(position) {
        if (Splide2.is(LOOP)) {
            var index = toIndex(position);
            var exceededMax = index > Components2.Controller.getEnd();
            var exceededMin = index < 0;
            if (exceededMin || exceededMax) position = shift(position, exceededMax);
        }
        return position;
    }
    function shift(position, backwards) {
        var excess = position - getLimit(backwards);
        var size = sliderSize();
        position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
        return position;
    }
    function cancel() {
        translate(getPosition(), true);
        Transition.cancel();
    }
    function toIndex(position) {
        var Slides = Components2.Slides.get();
        var index = 0;
        var minDistance = Infinity;
        for(var i = 0; i < Slides.length; i++){
            var slideIndex = Slides[i].index;
            var distance = abs(toPosition(slideIndex, true) - position);
            if (distance <= minDistance) {
                minDistance = distance;
                index = slideIndex;
            } else break;
        }
        return index;
    }
    function toPosition(index, trimming) {
        var position = orient(totalSize(index - 1) - offset(index));
        return trimming ? trim(position) : position;
    }
    function getPosition() {
        var left = resolve("left");
        return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
        if (options.trimSpace && Splide2.is(SLIDE)) position = clamp(position, 0, orient(sliderSize(true) - listSize()));
        return position;
    }
    function offset(index) {
        var focus = options.focus;
        return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
    }
    function getLimit(max) {
        return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
        var shifted = orient(shift(getPosition(), backwards));
        return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
    }
    function exceededLimit(max, position) {
        position = isUndefined(position) ? getPosition() : position;
        var exceededMin = max !== true && orient(position) < orient(getLimit(false));
        var exceededMax = max !== false && orient(position) > orient(getLimit(true));
        return exceededMin || exceededMax;
    }
    return {
        mount: mount,
        move: move,
        jump: jump,
        translate: translate,
        shift: shift,
        cancel: cancel,
        toIndex: toIndex,
        toPosition: toPosition,
        getPosition: getPosition,
        getLimit: getLimit,
        exceededLimit: exceededLimit,
        reposition: reposition
    };
}
function Controller(Splide2, Components2, options) {
    var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, toPosition = Move.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is(LOOP);
    var isSlide = Splide2.is(SLIDE);
    var getNext = apply(getAdjacent, false);
    var getPrev = apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
        init();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], init);
        on(EVENT_RESIZED, onResized);
    }
    function init() {
        slideCount = getLength(true);
        perMove = options.perMove;
        perPage = options.perPage;
        endIndex = getEnd();
        var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
        if (index !== currIndex) {
            currIndex = index;
            Move.reposition();
        }
    }
    function onResized() {
        if (endIndex !== getEnd()) emit(EVENT_END_INDEX_CHANGED);
    }
    function go(control, allowSameIndex, callback) {
        if (!isBusy()) {
            var dest = parse(control);
            var index = loop(dest);
            if (index > -1 && (allowSameIndex || index !== currIndex)) {
                setIndex(index);
                Move.move(dest, index, prevIndex, callback);
            }
        }
    }
    function scroll(destination, duration, snap, callback) {
        Components2.Scroll.scroll(destination, duration, snap, function() {
            var index = loop(Move.toIndex(getPosition()));
            setIndex(omitEnd ? min(index, endIndex) : index);
            callback && callback();
        });
    }
    function parse(control) {
        var index = currIndex;
        if (isString(control)) {
            var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
            if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
            else if (indicator === ">") index = number ? toIndex(+number) : getNext(true);
            else if (indicator === "<") index = getPrev(true);
        } else index = isLoop ? control : clamp(control, 0, endIndex);
        return index;
    }
    function getAdjacent(prev, destination) {
        var number = perMove || (hasFocus() ? 1 : perPage);
        var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
        if (dest === -1 && isSlide) {
            if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : endIndex;
        }
        return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
        if (isEnough() || hasFocus()) {
            var index = computeMovableDestIndex(dest);
            if (index !== dest) {
                from = dest;
                dest = index;
                snapPage = false;
            }
            if (dest < 0 || dest > endIndex) {
                if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) dest = toIndex(toPage(dest));
                else {
                    if (isLoop) dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
                    else if (options.rewind) dest = dest < 0 ? endIndex : 0;
                    else dest = -1;
                }
            } else if (snapPage && dest !== from) dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        } else dest = -1;
        return dest;
    }
    function computeMovableDestIndex(dest) {
        if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
            var position = getPosition();
            while(position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind))dest < currIndex ? --dest : ++dest;
        }
        return dest;
    }
    function loop(index) {
        return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
        var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
        while(omitEnd && end-- > 0)if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
            end++;
            break;
        }
        return clamp(end, 0, slideCount - 1);
    }
    function toIndex(page) {
        return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
        return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
        var closest = Move.toIndex(destination);
        return isSlide ? clamp(closest, 0, endIndex) : closest;
    }
    function setIndex(index) {
        if (index !== currIndex) {
            prevIndex = currIndex;
            currIndex = index;
        }
    }
    function getIndex(prev) {
        return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
        return !isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
        return Splide2.state.is([
            MOVING,
            SCROLLING
        ]) && !!options.waitForTransition;
    }
    return {
        mount: mount,
        go: go,
        scroll: scroll,
        getNext: getNext,
        getPrev: getPrev,
        getAdjacent: getAdjacent,
        getEnd: getEnd,
        setIndex: setIndex,
        getIndex: getIndex,
        toIndex: toIndex,
        toPage: toPage,
        toDest: toDest,
        hasFocus: hasFocus,
        isBusy: isBusy
    };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements = Components2.Elements, Controller = Components2.Controller;
    var placeholder = Elements.arrows, track = Elements.track;
    var wrapper = placeholder;
    var prev = Elements.prev;
    var next = Elements.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
        init();
        on(EVENT_UPDATED, remount);
    }
    function remount() {
        destroy();
        mount();
    }
    function init() {
        var enabled = options.arrows;
        if (enabled && !(prev && next)) createArrows();
        if (prev && next) {
            assign(arrows, {
                prev: prev,
                next: next
            });
            display(wrapper, enabled ? "" : "none");
            addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
            if (enabled) {
                listen();
                update();
                setAttribute([
                    prev,
                    next
                ], ARIA_CONTROLS, track.id);
                emit(EVENT_ARROWS_MOUNTED, prev, next);
            }
        }
    }
    function destroy() {
        event.destroy();
        removeClass(wrapper, wrapperClasses);
        if (created) {
            remove(placeholder ? [
                prev,
                next
            ] : wrapper);
            prev = next = null;
        } else removeAttribute([
            prev,
            next
        ], ALL_ATTRIBUTES);
    }
    function listen() {
        on([
            EVENT_MOUNTED,
            EVENT_MOVED,
            EVENT_REFRESH,
            EVENT_SCROLLED,
            EVENT_END_INDEX_CHANGED
        ], update);
        bind(next, "click", apply(go, ">"));
        bind(prev, "click", apply(go, "<"));
    }
    function go(control) {
        Controller.go(control, true);
    }
    function createArrows() {
        wrapper = placeholder || create("div", classes.arrows);
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        append(wrapper, [
            prev,
            next
        ]);
        !placeholder && before(wrapper, track);
    }
    function createArrow(prev2) {
        var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
        return parseHtml(arrow);
    }
    function update() {
        if (prev && next) {
            var index = Splide2.index;
            var prevIndex = Controller.getPrev();
            var nextIndex = Controller.getNext();
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            prev.disabled = prevIndex < 0;
            next.disabled = nextIndex < 0;
            setAttribute(prev, ARIA_LABEL, prevLabel);
            setAttribute(next, ARIA_LABEL, nextLabel);
            emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
        }
    }
    return {
        arrows: arrows,
        mount: mount,
        destroy: destroy,
        update: update
    };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
        if (autoplay) {
            listen();
            toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
            stopped || play();
            update();
        }
    }
    function listen() {
        if (options.pauseOnHover) bind(root, "mouseenter mouseleave", function(e) {
            hovered = e.type === "mouseenter";
            autoToggle();
        });
        if (options.pauseOnFocus) bind(root, "focusin focusout", function(e) {
            focused = e.type === "focusin";
            autoToggle();
        });
        if (toggle) bind(toggle, "click", function() {
            stopped ? play() : pause(true);
        });
        on([
            EVENT_MOVE,
            EVENT_SCROLL,
            EVENT_REFRESH
        ], interval.rewind);
        on(EVENT_MOVE, onMove);
    }
    function play() {
        if (isPaused() && Components2.Slides.isEnough()) {
            interval.start(!options.resetProgress);
            focused = hovered = stopped = false;
            update();
            emit(EVENT_AUTOPLAY_PLAY);
        }
    }
    function pause(stop) {
        if (stop === void 0) stop = true;
        stopped = !!stop;
        update();
        if (!isPaused()) {
            interval.pause();
            emit(EVENT_AUTOPLAY_PAUSE);
        }
    }
    function autoToggle() {
        if (!stopped) hovered || focused ? pause(false) : play();
    }
    function update() {
        if (toggle) {
            toggleClass(toggle, CLASS_ACTIVE, !stopped);
            setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
        }
    }
    function onAnimationFrame(rate) {
        var bar = Elements.bar;
        bar && style(bar, "width", rate * 100 + "%");
        emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
        var Slide = Components2.Slides.getAt(index);
        interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
        mount: mount,
        destroy: interval.cancel,
        play: play,
        pause: pause,
        isPaused: isPaused
    };
}
function Cover(Splide2, Components2, options) {
    var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
        if (options.cover) {
            on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
            on([
                EVENT_MOUNTED,
                EVENT_UPDATED,
                EVENT_REFRESH
            ], apply(cover, true));
        }
    }
    function cover(cover2) {
        Components2.Slides.forEach(function(Slide) {
            var img = child(Slide.container || Slide.slide, "img");
            if (img && img.src) toggle(cover2, img, Slide);
        });
    }
    function toggle(cover2, img, Slide) {
        Slide.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
        display(img, cover2 ? "none" : "");
    }
    return {
        mount: mount,
        destroy: apply(cover, false)
    };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
    var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set = Splide2.state.set;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, exceededLimit = Move.exceededLimit, translate = Move.translate;
    var isSlide = Splide2.is(SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
        on(EVENT_MOVE, clear);
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], cancel);
    }
    function scroll(destination, duration, snap, onScrolled, noConstrain) {
        var from = getPosition();
        clear();
        if (snap && (!isSlide || !exceededLimit())) {
            var size = Components2.Layout.sliderSize();
            var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
            destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
        }
        var noDistance = approximatelyEqual(from, destination, 1);
        friction = 1;
        duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
        callback = onScrolled;
        interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
        set(SCROLLING);
        emit(EVENT_SCROLL);
        interval.start();
    }
    function onEnd() {
        set(IDLE);
        callback && callback();
        emit(EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
        var position = getPosition();
        var target = from + (to - from) * easing(rate);
        var diff = (target - position) * friction;
        translate(position + diff);
        if (isSlide && !noConstrain && exceededLimit()) {
            friction *= FRICTION_FACTOR;
            if (abs(diff) < BOUNCE_DIFF_THRESHOLD) scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
        }
    }
    function clear() {
        if (interval) interval.cancel();
    }
    function cancel() {
        if (interval && !interval.isPaused()) {
            clear();
            onEnd();
        }
    }
    function easing(t) {
        var easingFunc = options.easingFunc;
        return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
        mount: mount,
        destroy: clear,
        scroll: scroll,
        cancel: cancel
    };
}
var SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
};
function Drag(Splide2, Components2, options) {
    var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move = Components2.Move, Scroll = Components2.Scroll, Controller = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition = Move.getPosition, exceededLimit = Move.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
        bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
        bind(track, "click", onClick, {
            capture: true
        });
        bind(track, "dragstart", prevent);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], init);
    }
    function init() {
        var drag = options.drag;
        disable(!drag);
        isFree = drag === "free";
    }
    function onPointerDown(e) {
        clickPrevented = false;
        if (!disabled) {
            var isTouch = isTouchEvent(e);
            if (isDraggable(e.target) && (isTouch || !e.button)) {
                if (!Controller.isBusy()) {
                    target = isTouch ? track : window;
                    dragging = state.is([
                        MOVING,
                        SCROLLING
                    ]);
                    prevBaseEvent = null;
                    bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
                    bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
                    Move.cancel();
                    Scroll.cancel();
                    save(e);
                } else prevent(e, true);
            }
        }
    }
    function onPointerMove(e) {
        if (!state.is(DRAGGING)) {
            state.set(DRAGGING);
            emit(EVENT_DRAG);
        }
        if (e.cancelable) {
            if (dragging) {
                Move.translate(basePosition + constrain(diffCoord(e)));
                var expired = diffTime(e) > LOG_INTERVAL;
                var hasExceeded = exceeded !== (exceeded = exceededLimit());
                if (expired || hasExceeded) save(e);
                clickPrevented = true;
                emit(EVENT_DRAGGING);
                prevent(e);
            } else if (isSliderDirection(e)) {
                dragging = shouldStart(e);
                prevent(e);
            }
        }
    }
    function onPointerUp(e) {
        if (state.is(DRAGGING)) {
            state.set(IDLE);
            emit(EVENT_DRAGGED);
        }
        if (dragging) {
            move(e);
            prevent(e);
        }
        unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
        unbind(target, POINTER_UP_EVENTS, onPointerUp);
        dragging = false;
    }
    function onClick(e) {
        if (!disabled && clickPrevented) prevent(e, true);
    }
    function save(e) {
        prevBaseEvent = baseEvent;
        baseEvent = e;
        basePosition = getPosition();
    }
    function move(e) {
        var velocity = computeVelocity(e);
        var destination = computeDestination(velocity);
        var rewind = options.rewind && options.rewindByDrag;
        reduce(false);
        if (isFree) Controller.scroll(destination, 0, options.snap);
        else if (Splide2.is(FADE)) Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
        else if (Splide2.is(SLIDE) && exceeded && rewind) Controller.go(exceededLimit(true) ? ">" : "<");
        else Controller.go(Controller.toDest(destination), true);
        reduce(true);
    }
    function shouldStart(e) {
        var thresholds = options.dragMinThreshold;
        var isObj = isObject(thresholds);
        var mouse = isObj && thresholds.mouse || 0;
        var touch = (isObj ? thresholds.touch : +thresholds) || 10;
        return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
    }
    function isSliderDirection(e) {
        return abs(diffCoord(e)) > abs(diffCoord(e, true));
    }
    function computeVelocity(e) {
        if (Splide2.is(LOOP) || !exceeded) {
            var time = diffTime(e);
            if (time && time < LOG_INTERVAL) return diffCoord(e) / time;
        }
        return 0;
    }
    function computeDestination(velocity) {
        return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e, orthogonal) {
        return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
    }
    function diffTime(e) {
        return timeOf(e) - timeOf(getBaseEvent(e));
    }
    function getBaseEvent(e) {
        return baseEvent === e && prevBaseEvent || baseEvent;
    }
    function coordOf(e, orthogonal) {
        return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
        return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isDraggable(target2) {
        var noDrag = options.noDrag;
        return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
    }
    function isTouchEvent(e) {
        return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
        return dragging;
    }
    function disable(value) {
        disabled = value;
    }
    return {
        mount: mount,
        disable: disable,
        isDragging: isDragging
    };
}
var NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: ARROW_RIGHT,
    Left: ARROW_LEFT,
    Up: ARROW_UP,
    Down: ARROW_DOWN
};
function normalizeKey(key) {
    key = isString(key) ? key : key.key;
    return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
        init();
        on(EVENT_UPDATED, destroy);
        on(EVENT_UPDATED, init);
        on(EVENT_MOVE, onMove);
    }
    function init() {
        var keyboard = options.keyboard;
        if (keyboard) {
            target = keyboard === "global" ? window : root;
            bind(target, KEYBOARD_EVENT, onKeydown);
        }
    }
    function destroy() {
        unbind(target, KEYBOARD_EVENT);
    }
    function disable(value) {
        disabled = value;
    }
    function onMove() {
        var _disabled = disabled;
        disabled = true;
        nextTick(function() {
            disabled = _disabled;
        });
    }
    function onKeydown(e) {
        if (!disabled) {
            var key = normalizeKey(e);
            if (key === resolve(ARROW_LEFT)) Splide2.go("<");
            else if (key === resolve(ARROW_RIGHT)) Splide2.go(">");
        }
    }
    return {
        mount: mount,
        destroy: destroy,
        disable: disable
    };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [
        EVENT_MOVED,
        EVENT_SCROLLED
    ];
    var entries = [];
    function mount() {
        if (options.lazyLoad) {
            init();
            on(EVENT_REFRESH, init);
        }
    }
    function init() {
        empty(entries);
        register();
        if (isSequential) loadNext();
        else {
            off(events);
            on(events, check);
            check();
        }
    }
    function register() {
        Components2.Slides.forEach(function(Slide) {
            queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function(img) {
                var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
                var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
                if (src !== img.src || srcset !== img.srcset) {
                    var className = options.classes.spinner;
                    var parent = img.parentElement;
                    var spinner = child(parent, "." + className) || create("span", className, parent);
                    entries.push([
                        img,
                        Slide,
                        spinner
                    ]);
                    img.src || display(img, "none");
                }
            });
        });
    }
    function check() {
        entries = entries.filter(function(data) {
            var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
            return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
        });
        entries.length || off(events);
    }
    function load(data) {
        var img = data[0];
        addClass(data[1].slide, CLASS_LOADING);
        bind(img, "load error", apply(onLoad, data));
        setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
        setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
        removeAttribute(img, SRC_DATA_ATTRIBUTE);
        removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e) {
        var img = data[0], Slide = data[1];
        removeClass(Slide.slide, CLASS_LOADING);
        if (e.type !== "error") {
            remove(data[2]);
            display(img, "");
            emit(EVENT_LAZYLOAD_LOADED, img, Slide);
            emit(EVENT_RESIZE);
        }
        isSequential && loadNext();
    }
    function loadNext() {
        entries.length && load(entries.shift());
    }
    return {
        mount: mount,
        destroy: apply(empty, entries),
        check: check
    };
}
function Pagination(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides = Components2.Slides, Elements = Components2.Elements, Controller = Components2.Controller;
    var hasFocus = Controller.hasFocus, getIndex = Controller.getIndex, go = Controller.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
        destroy();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], mount);
        var enabled = options.pagination;
        placeholder && display(placeholder, enabled ? "" : "none");
        if (enabled) {
            on([
                EVENT_MOVE,
                EVENT_SCROLL,
                EVENT_SCROLLED
            ], update);
            createPagination();
            update();
            emit(EVENT_PAGINATION_MOUNTED, {
                list: list,
                items: items
            }, getAt(Splide2.index));
        }
    }
    function destroy() {
        if (list) {
            remove(placeholder ? slice(list.children) : list);
            removeClass(list, paginationClasses);
            empty(items);
            list = null;
        }
        event.destroy();
    }
    function createPagination() {
        var length = Splide2.length;
        var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
        var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
        list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
        addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
        setAttribute(list, ROLE, "tablist");
        setAttribute(list, ARIA_LABEL, i18n.select);
        setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
        for(var i = 0; i < max; i++){
            var li = create("li", null, list);
            var button = create("button", {
                class: classes.page,
                type: "button"
            }, li);
            var controls = Slides.getIn(i).map(function(Slide) {
                return Slide.slide.id;
            });
            var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
            bind(button, "click", apply(onClick, i));
            if (options.paginationKeyboard) bind(button, "keydown", apply(onKeydown, i));
            setAttribute(li, ROLE, "presentation");
            setAttribute(button, ROLE, "tab");
            setAttribute(button, ARIA_CONTROLS, controls.join(" "));
            setAttribute(button, ARIA_LABEL, format(text, i + 1));
            setAttribute(button, TAB_INDEX, -1);
            items.push({
                li: li,
                button: button,
                page: i
            });
        }
    }
    function onClick(page) {
        go(">" + page, true);
    }
    function onKeydown(page, e) {
        var length = items.length;
        var key = normalizeKey(e);
        var dir = getDirection();
        var nextPage = -1;
        if (key === resolve(ARROW_RIGHT, false, dir)) nextPage = ++page % length;
        else if (key === resolve(ARROW_LEFT, false, dir)) nextPage = (--page + length) % length;
        else if (key === "Home") nextPage = 0;
        else if (key === "End") nextPage = length - 1;
        var item = items[nextPage];
        if (item) {
            focus(item.button);
            go(">" + nextPage);
            prevent(e, true);
        }
    }
    function getDirection() {
        return options.paginationDirection || options.direction;
    }
    function getAt(index) {
        return items[Controller.toPage(index)];
    }
    function update() {
        var prev = getAt(getIndex(true));
        var curr = getAt(getIndex());
        if (prev) {
            var button = prev.button;
            removeClass(button, CLASS_ACTIVE);
            removeAttribute(button, ARIA_SELECTED);
            setAttribute(button, TAB_INDEX, -1);
        }
        if (curr) {
            var _button = curr.button;
            addClass(_button, CLASS_ACTIVE);
            setAttribute(_button, ARIA_SELECTED, true);
            setAttribute(_button, TAB_INDEX, "");
        }
        emit(EVENT_PAGINATION_UPDATED, {
            list: list,
            items: items
        }, prev, curr);
    }
    return {
        items: items,
        mount: mount,
        destroy: destroy,
        getAt: getAt,
        update: update
    };
}
var TRIGGER_KEYS = [
    " ",
    "Enter"
];
function Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
        Splide2.splides.forEach(function(target) {
            if (!target.isParent) {
                sync(Splide2, target.splide);
                sync(target.splide, Splide2);
            }
        });
        if (isNavigation) navigate();
    }
    function destroy() {
        events.forEach(function(event) {
            event.destroy();
        });
        empty(events);
    }
    function remount() {
        destroy();
        mount();
    }
    function sync(splide, target) {
        var event = EventInterface(splide);
        event.on(EVENT_MOVE, function(index, prev, dest) {
            target.go(target.is(LOOP) ? dest : index);
        });
        events.push(event);
    }
    function navigate() {
        var event = EventInterface(Splide2);
        var on = event.on;
        on(EVENT_CLICK, onClick);
        on(EVENT_SLIDE_KEYDOWN, onKeydown);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], update);
        events.push(event);
        event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
        setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
    }
    function onClick(Slide) {
        Splide2.go(Slide.index);
    }
    function onKeydown(Slide, e) {
        if (includes(TRIGGER_KEYS, normalizeKey(e))) {
            onClick(Slide);
            prevent(e);
        }
    }
    return {
        setup: apply(Components2.Media.set, {
            slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
        }, true),
        mount: mount,
        destroy: destroy,
        remount: remount
    };
}
function Wheel(Splide2, Components2, options) {
    var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
        if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
    function onWheel(e) {
        if (e.cancelable) {
            var deltaY = e.deltaY;
            var backwards = deltaY < 0;
            var timeStamp = timeOf(e);
            var _min = options.wheelMinThreshold || 0;
            var sleep = options.wheelSleep || 0;
            if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                Splide2.go(backwards ? "<" : ">");
                lastTime = timeStamp;
            }
            shouldPrevent(backwards) && prevent(e);
        }
    }
    function shouldPrevent(backwards) {
        return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
        mount: mount
    };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
    var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = create("span", CLASS_SR);
    var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
    function mount() {
        if (enabled) {
            disable(!Components2.Autoplay.isPaused());
            setAttribute(track, ARIA_ATOMIC, true);
            sr.textContent = "…";
            on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
            on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
            on([
                EVENT_MOVED,
                EVENT_SCROLLED
            ], apply(toggle, true));
        }
    }
    function toggle(active) {
        setAttribute(track, ARIA_BUSY, active);
        if (active) {
            append(track, sr);
            interval.start();
        } else {
            remove(sr);
            interval.cancel();
        }
    }
    function destroy() {
        removeAttribute(track, [
            ARIA_LIVE,
            ARIA_ATOMIC,
            ARIA_BUSY
        ]);
        remove(sr);
    }
    function disable(disabled) {
        if (enabled) setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
    return {
        mount: mount,
        disable: disable,
        destroy: destroy
    };
}
var ComponentConstructors = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Media: Media,
    Direction: Direction,
    Elements: Elements,
    Slides: Slides,
    Layout: Layout,
    Clones: Clones,
    Move: Move,
    Controller: Controller,
    Arrows: Arrows,
    Autoplay: Autoplay,
    Cover: Cover,
    Scroll: Scroll,
    Drag: Drag,
    Keyboard: Keyboard,
    LazyLoad: LazyLoad,
    Pagination: Pagination,
    Sync: Sync,
    Wheel: Wheel,
    Live: Live
});
var I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
};
var DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: CLASSES,
    i18n: I18N,
    reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause"
    }
};
function Fade(Splide2, Components2, options) {
    var Slides = Components2.Slides;
    function mount() {
        EventInterface(Splide2).on([
            EVENT_MOUNTED,
            EVENT_REFRESH
        ], init);
    }
    function init() {
        Slides.forEach(function(Slide) {
            Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
        });
    }
    function start(index, done) {
        Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
        nextTick(done);
    }
    return {
        mount: mount,
        start: start,
        cancel: noop
    };
}
function Slide(Splide2, Components2, options) {
    var Move = Components2.Move, Controller = Components2.Controller, Scroll = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = apply(style, list, "transition");
    var endCallback;
    function mount() {
        EventInterface(Splide2).bind(list, "transitionend", function(e) {
            if (e.target === list && endCallback) {
                cancel();
                endCallback();
            }
        });
    }
    function start(index, done) {
        var destination = Move.toPosition(index, true);
        var position = Move.getPosition();
        var speed = getSpeed(index);
        if (abs(destination - position) >= 1 && speed >= 1) {
            if (options.useScroll) Scroll.scroll(destination, speed, false, done);
            else {
                transition("transform " + speed + "ms " + options.easing);
                Move.translate(destination, true);
                endCallback = done;
            }
        } else {
            Move.jump(index);
            done();
        }
    }
    function cancel() {
        transition("");
        Scroll.cancel();
    }
    function getSpeed(index) {
        var rewindSpeed = options.rewindSpeed;
        if (Splide2.is(SLIDE) && rewindSpeed) {
            var prev = Controller.getIndex(true);
            var end = Controller.getEnd();
            if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
        }
        return options.speed;
    }
    return {
        mount: mount,
        start: start,
        cancel: cancel
    };
}
var _Splide = /*#__PURE__*/ function() {
    function _Splide(target, options) {
        this.event = EventInterface();
        this.Components = {};
        this.state = State(CREATED);
        this.splides = [];
        this._o = {};
        this._E = {};
        var root = isString(target) ? query(document, target) : target;
        assert(root, root + " is invalid.");
        this.root = root;
        options = merge({
            label: getAttribute(root, ARIA_LABEL) || "",
            labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
        }, DEFAULTS, _Splide.defaults, options || {});
        try {
            merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
        } catch (e) {
            assert(false, "Invalid JSON");
        }
        this._o = Object.create(merge({}, options));
    }
    var _proto = _Splide.prototype;
    _proto.mount = function mount(Extensions, Transition) {
        var _this = this;
        var state = this.state, Components2 = this.Components;
        assert(state.is([
            CREATED,
            DESTROYED
        ]), "Already mounted!");
        state.set(CREATED);
        this._C = Components2;
        this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
        this._E = Extensions || this._E;
        var Constructors = assign({}, ComponentConstructors, this._E, {
            Transition: this._T
        });
        forOwn(Constructors, function(Component, key) {
            var component = Component(_this, Components2, _this._o);
            Components2[key] = component;
            component.setup && component.setup();
        });
        forOwn(Components2, function(component) {
            component.mount && component.mount();
        });
        this.emit(EVENT_MOUNTED);
        addClass(this.root, CLASS_INITIALIZED);
        state.set(IDLE);
        this.emit(EVENT_READY);
        return this;
    };
    _proto.sync = function sync(splide) {
        this.splides.push({
            splide: splide
        });
        splide.splides.push({
            splide: this,
            isParent: true
        });
        if (this.state.is(IDLE)) {
            this._C.Sync.remount();
            splide.Components.Sync.remount();
        }
        return this;
    };
    _proto.go = function go(control) {
        this._C.Controller.go(control);
        return this;
    };
    _proto.on = function on(events, callback) {
        this.event.on(events, callback);
        return this;
    };
    _proto.off = function off(events) {
        this.event.off(events);
        return this;
    };
    _proto.emit = function emit(event) {
        var _this$event;
        (_this$event = this.event).emit.apply(_this$event, [
            event
        ].concat(slice(arguments, 1)));
        return this;
    };
    _proto.add = function add(slides, index) {
        this._C.Slides.add(slides, index);
        return this;
    };
    _proto.remove = function remove(matcher) {
        this._C.Slides.remove(matcher);
        return this;
    };
    _proto.is = function is(type) {
        return this._o.type === type;
    };
    _proto.refresh = function refresh() {
        this.emit(EVENT_REFRESH);
        return this;
    };
    _proto.destroy = function destroy(completely) {
        if (completely === void 0) completely = true;
        var event = this.event, state = this.state;
        if (state.is(CREATED)) EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
        else {
            forOwn(this._C, function(component) {
                component.destroy && component.destroy(completely);
            }, true);
            event.emit(EVENT_DESTROY);
            event.destroy();
            completely && empty(this.splides);
            state.set(DESTROYED);
        }
        return this;
    };
    _createClass(_Splide, [
        {
            key: "options",
            get: function get() {
                return this._o;
            },
            set: function set(options) {
                this._C.Media.set(options, true, true);
            }
        },
        {
            key: "length",
            get: function get() {
                return this._C.Slides.getLength(true);
            }
        },
        {
            key: "index",
            get: function get() {
                return this._C.Controller.getIndex();
            }
        }
    ]);
    return _Splide;
}();
var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
    listTag: "ul",
    slideTag: "li"
};
var Style = /*#__PURE__*/ function() {
    function Style(id, options) {
        this.styles = {};
        this.id = id;
        this.options = options;
    }
    var _proto2 = Style.prototype;
    _proto2.rule = function rule(selector, prop, value, breakpoint) {
        breakpoint = breakpoint || "default";
        var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
        var styles = selectors[selector] = selectors[selector] || {};
        styles[prop] = value;
    };
    _proto2.build = function build() {
        var _this2 = this;
        var css = "";
        if (this.styles.default) css += this.buildSelectors(this.styles.default);
        Object.keys(this.styles).sort(function(n, m) {
            return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
        }).forEach(function(breakpoint) {
            if (breakpoint !== "default") {
                css += "@media screen and (max-width: " + breakpoint + "px) {";
                css += _this2.buildSelectors(_this2.styles[breakpoint]);
                css += "}";
            }
        });
        return css;
    };
    _proto2.buildSelectors = function buildSelectors(selectors) {
        var _this3 = this;
        var css = "";
        forOwn(selectors, function(styles, selector) {
            selector = ("#" + _this3.id + " " + selector).trim();
            css += selector + " {";
            forOwn(styles, function(value, prop) {
                if (value || value === 0) css += prop + ": " + value + ";";
            });
            css += "}";
        });
        return css;
    };
    return Style;
}();
var SplideRenderer = /*#__PURE__*/ function() {
    function SplideRenderer(contents, options, config, defaults) {
        this.slides = [];
        this.options = {};
        this.breakpoints = [];
        merge(DEFAULTS, defaults || {});
        merge(merge(this.options, DEFAULTS), options || {});
        this.contents = contents;
        this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
        this.id = this.config.id || uniqueId("splide");
        this.Style = new Style(this.id, this.options);
        this.Direction = Direction(null, null, this.options);
        assert(this.contents.length, "Provide at least 1 content.");
        this.init();
    }
    SplideRenderer.clean = function clean(splide) {
        var _EventInterface14 = EventInterface(splide), on = _EventInterface14.on;
        var root = splide.root;
        var clones = queryAll(root, "." + CLASS_CLONE);
        on(EVENT_MOUNTED, function() {
            remove(child(root, "style"));
        });
        remove(clones);
    };
    var _proto3 = SplideRenderer.prototype;
    _proto3.init = function init() {
        this.parseBreakpoints();
        this.initSlides();
        this.registerRootStyles();
        this.registerTrackStyles();
        this.registerSlideStyles();
        this.registerListStyles();
    };
    _proto3.initSlides = function initSlides() {
        var _this4 = this;
        push(this.slides, this.contents.map(function(content, index) {
            content = isString(content) ? {
                html: content
            } : content;
            content.styles = content.styles || {};
            content.attrs = content.attrs || {};
            _this4.cover(content);
            var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
            assign(content.attrs, {
                class: (classes + " " + (content.attrs.class || "")).trim(),
                style: _this4.buildStyles(content.styles)
            });
            return content;
        }));
        if (this.isLoop()) this.generateClones(this.slides);
    };
    _proto3.registerRootStyles = function registerRootStyles() {
        var _this5 = this;
        this.breakpoints.forEach(function(_ref2) {
            var width = _ref2[0], options = _ref2[1];
            _this5.Style.rule(" ", "max-width", unit(options.width), width);
        });
    };
    _proto3.registerTrackStyles = function registerTrackStyles() {
        var _this6 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_TRACK;
        this.breakpoints.forEach(function(_ref3) {
            var width = _ref3[0], options = _ref3[1];
            Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
            Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
            Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
        });
    };
    _proto3.registerListStyles = function registerListStyles() {
        var _this7 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_LIST;
        this.breakpoints.forEach(function(_ref4) {
            var width = _ref4[0], options = _ref4[1];
            Style2.rule(selector, "transform", _this7.buildTranslate(options), width);
            if (!_this7.cssSlideHeight(options)) Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
        });
    };
    _proto3.registerSlideStyles = function registerSlideStyles() {
        var _this8 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_SLIDE;
        this.breakpoints.forEach(function(_ref5) {
            var width = _ref5[0], options = _ref5[1];
            Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
            Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
            Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
            Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
        });
    };
    _proto3.buildTranslate = function buildTranslate(options) {
        var _this$Direction = this.Direction, resolve = _this$Direction.resolve, orient = _this$Direction.orient;
        var values = [];
        values.push(this.cssOffsetClones(options));
        values.push(this.cssOffsetGaps(options));
        if (this.isCenter(options)) {
            values.push(this.buildCssValue(orient(-50), "%"));
            values.push.apply(values, this.cssOffsetCenter(options));
        }
        return values.filter(Boolean).map(function(value) {
            return "translate" + resolve("X") + "(" + value + ")";
        }).join(" ");
    };
    _proto3.cssOffsetClones = function cssOffsetClones(options) {
        var _this$Direction2 = this.Direction, resolve = _this$Direction2.resolve, orient = _this$Direction2.orient;
        var cloneCount = this.getCloneCount();
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue.value, unit2 = _this$parseCssValue.unit;
            return this.buildCssValue(orient(value) * cloneCount, unit2);
        }
        var percent = 100 * cloneCount / options.perPage;
        return orient(percent) + "%";
    };
    _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
        var _this$Direction3 = this.Direction, resolve = _this$Direction3.resolve, orient = _this$Direction3.orient;
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue2.value, unit2 = _this$parseCssValue2.unit;
            return [
                this.buildCssValue(orient(value / 2), unit2)
            ];
        }
        var values = [];
        var perPage = options.perPage, gap = options.gap;
        values.push(orient(50 / perPage) + "%");
        if (gap) {
            var _this$parseCssValue3 = this.parseCssValue(gap), _value = _this$parseCssValue3.value, _unit = _this$parseCssValue3.unit;
            var gapOffset = (_value / perPage - _value) / 2;
            values.push(this.buildCssValue(orient(gapOffset), _unit));
        }
        return values;
    };
    _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
        var cloneCount = this.getCloneCount();
        if (cloneCount && options.gap) {
            var orient = this.Direction.orient;
            var _this$parseCssValue4 = this.parseCssValue(options.gap), value = _this$parseCssValue4.value, unit2 = _this$parseCssValue4.unit;
            if (this.isFixedWidth(options)) return this.buildCssValue(orient(value * cloneCount), unit2);
            var perPage = options.perPage;
            var gaps = cloneCount / perPage;
            return this.buildCssValue(orient(gaps * value), unit2);
        }
        return "";
    };
    _proto3.resolve = function resolve(prop) {
        return camelToKebab(this.Direction.resolve(prop));
    };
    _proto3.cssPadding = function cssPadding(options, right) {
        var padding = options.padding;
        var prop = this.Direction.resolve(right ? "right" : "left", true);
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    };
    _proto3.cssTrackHeight = function cssTrackHeight(options) {
        var height = "";
        if (this.isVertical()) {
            height = this.cssHeight(options);
            assert(height, '"height" is missing.');
            height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
        }
        return height;
    };
    _proto3.cssHeight = function cssHeight(options) {
        return unit(options.height);
    };
    _proto3.cssSlideWidth = function cssSlideWidth(options) {
        return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
    };
    _proto3.cssSlideHeight = function cssSlideHeight(options) {
        return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
    };
    _proto3.cssSlideSize = function cssSlideSize(options) {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    };
    _proto3.cssAspectRatio = function cssAspectRatio(options) {
        var heightRatio = options.heightRatio;
        return heightRatio ? "" + 1 / heightRatio : "";
    };
    _proto3.buildCssValue = function buildCssValue(value, unit2) {
        return "" + value + unit2;
    };
    _proto3.parseCssValue = function parseCssValue(value) {
        if (isString(value)) {
            var number = parseFloat(value) || 0;
            var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
            return {
                value: number,
                unit: unit2
            };
        }
        return {
            value: value,
            unit: "px"
        };
    };
    _proto3.parseBreakpoints = function parseBreakpoints() {
        var _this9 = this;
        var breakpoints = this.options.breakpoints;
        this.breakpoints.push([
            "default",
            this.options
        ]);
        if (breakpoints) forOwn(breakpoints, function(options, width) {
            _this9.breakpoints.push([
                width,
                merge(merge({}, _this9.options), options)
            ]);
        });
    };
    _proto3.isFixedWidth = function isFixedWidth(options) {
        return !!options[this.Direction.resolve("fixedWidth")];
    };
    _proto3.isLoop = function isLoop() {
        return this.options.type === LOOP;
    };
    _proto3.isCenter = function isCenter(options) {
        if (options.focus === "center") {
            if (this.isLoop()) return true;
            if (this.options.type === SLIDE) return !this.options.trimSpace;
        }
        return false;
    };
    _proto3.isVertical = function isVertical() {
        return this.options.direction === TTB;
    };
    _proto3.buildClasses = function buildClasses() {
        var options = this.options;
        return [
            CLASS_ROOT,
            CLASS_ROOT + "--" + options.type,
            CLASS_ROOT + "--" + options.direction,
            options.drag && CLASS_ROOT + "--draggable",
            options.isNavigation && CLASS_ROOT + "--nav",
            CLASS_ACTIVE,
            !this.config.hidden && CLASS_RENDERED
        ].filter(Boolean).join(" ");
    };
    _proto3.buildAttrs = function buildAttrs(attrs) {
        var attr = "";
        forOwn(attrs, function(value, key) {
            attr += value ? " " + camelToKebab(key) + '="' + value + '"' : "";
        });
        return attr.trim();
    };
    _proto3.buildStyles = function buildStyles(styles) {
        var style = "";
        forOwn(styles, function(value, key) {
            style += " " + camelToKebab(key) + ":" + value + ";";
        });
        return style.trim();
    };
    _proto3.renderSlides = function renderSlides() {
        var _this10 = this;
        var tag = this.config.slideTag;
        return this.slides.map(function(content) {
            return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
        }).join("");
    };
    _proto3.cover = function cover(content) {
        var styles = content.styles, _content$html = content.html, html = _content$html === void 0 ? "" : _content$html;
        if (this.options.cover && !this.options.lazyLoad) {
            var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
            if (src && src[2]) styles.background = "center/cover no-repeat url('" + src[2] + "')";
        }
    };
    _proto3.generateClones = function generateClones(contents) {
        var classes = this.options.classes;
        var count = this.getCloneCount();
        var slides = contents.slice();
        while(slides.length < count)push(slides, slides);
        push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function(content, index) {
            var attrs = assign({}, content.attrs, {
                class: content.attrs.class + " " + classes.clone
            });
            var clone = assign({}, content, {
                attrs: attrs
            });
            index < count ? contents.unshift(clone) : contents.push(clone);
        });
    };
    _proto3.getCloneCount = function getCloneCount() {
        if (this.isLoop()) {
            var options = this.options;
            if (options.clones) return options.clones;
            var perPage = max.apply(void 0, this.breakpoints.map(function(_ref6) {
                var options2 = _ref6[1];
                return options2.perPage;
            }));
            return perPage * ((options.flickMaxPages || 1) + 1);
        }
        return 0;
    };
    _proto3.renderArrows = function renderArrows() {
        var html = "";
        html += '<div class="' + this.options.classes.arrows + '">';
        html += this.renderArrow(true);
        html += this.renderArrow(false);
        html += "</div>";
        return html;
    };
    _proto3.renderArrow = function renderArrow(prev) {
        var _this$options = this.options, classes = _this$options.classes, i18n = _this$options.i18n;
        var attrs = {
            class: classes.arrow + " " + (prev ? classes.prev : classes.next),
            type: "button",
            ariaLabel: prev ? i18n.prev : i18n.next
        };
        return "<button " + this.buildAttrs(attrs) + '><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '"><path d="' + (this.options.arrowPath || PATH) + '" /></svg></button>';
    };
    _proto3.html = function html() {
        var _this$config = this.config, rootClass = _this$config.rootClass, listTag = _this$config.listTag, arrows = _this$config.arrows, beforeTrack = _this$config.beforeTrack, afterTrack = _this$config.afterTrack, slider = _this$config.slider, beforeSlider = _this$config.beforeSlider, afterSlider = _this$config.afterSlider;
        var html = "";
        html += '<div id="' + this.id + '" class="' + this.buildClasses() + " " + (rootClass || "") + '">';
        html += "<style>" + this.Style.build() + "</style>";
        if (slider) {
            html += beforeSlider || "";
            html += '<div class="splide__slider">';
        }
        html += beforeTrack || "";
        if (arrows) html += this.renderArrows();
        html += '<div class="splide__track">';
        html += "<" + listTag + ' class="splide__list">';
        html += this.renderSlides();
        html += "</" + listTag + ">";
        html += "</div>";
        html += afterTrack || "";
        if (slider) {
            html += "</div>";
            html += afterSlider || "";
        }
        html += "</div>";
        return html;
    };
    return SplideRenderer;
}();

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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"e4I1P":[function(require,module,exports) {
/*!
 * Splide.js
 * Version  : 0.8.0
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Video", ()=>Video);
var global = arguments[3];
function empty(array) {
    array.length = 0;
}
function slice$1(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function apply$1(func) {
    return func.bind.apply(func, [
        null
    ].concat(slice$1(arguments, 1)));
}
function typeOf$1(type, subject) {
    return typeof subject === type;
}
var isArray$1 = Array.isArray;
apply$1(typeOf$1, "function");
apply$1(typeOf$1, "string");
apply$1(typeOf$1, "undefined");
function toArray$1(value) {
    return isArray$1(value) ? value : [
        value
    ];
}
function forEach$1(values, iteratee) {
    toArray$1(values).forEach(iteratee);
}
function includes(array, value) {
    return array.indexOf(value) > -1;
}
var ownKeys$1 = Object.keys;
function forOwn$1(object, iteratee, right) {
    if (object) {
        var keys = ownKeys$1(object);
        keys = right ? keys.reverse() : keys;
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "__proto__") {
                if (iteratee(object[key], key) === false) break;
            }
        }
    }
    return object;
}
function assign$1(object) {
    slice$1(arguments, 1).forEach(function(source) {
        forOwn$1(source, function(value, key) {
            object[key] = source[key];
        });
    });
    return object;
}
var PROJECT_CODE$1 = "splide";
function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, function(target, event, namespace) {
            var isEventTarget = "addEventListener" in target;
            var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
            isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
            listeners.push([
                target,
                event,
                namespace,
                callback,
                remover
            ]);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, function(target, event, namespace) {
            listeners = listeners.filter(function(listener) {
                if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                    listener[4]();
                    return false;
                }
                return true;
            });
        });
    }
    function dispatch(target, type, detail) {
        var e;
        var bubbles = true;
        if (typeof CustomEvent === "function") e = new CustomEvent(type, {
            bubbles: bubbles,
            detail: detail
        });
        else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, bubbles, false, detail);
        }
        target.dispatchEvent(e);
        return e;
    }
    function forEachEvent(targets, events, iteratee) {
        forEach$1(targets, function(target) {
            target && forEach$1(events, function(events2) {
                events2.split(" ").forEach(function(eventNS) {
                    var fragment = eventNS.split(".");
                    iteratee(target, fragment[0], fragment[1]);
                });
            });
        });
    }
    function destroy() {
        listeners.forEach(function(data) {
            data[4]();
        });
        empty(listeners);
    }
    return {
        bind: bind,
        unbind: unbind,
        dispatch: dispatch,
        destroy: destroy
    };
}
var EVENT_MOUNTED = "mounted";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_DESTROY = "destroy";
function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
        binder.bind(bus, toArray$1(events).join(" "), function(e) {
            callback.apply(callback, isArray$1(e.detail) ? e.detail : []);
        });
    }
    function emit(event) {
        binder.dispatch(bus, event, slice$1(arguments, 1));
    }
    if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
    return assign$1(binder, {
        bus: bus,
        on: on,
        off: apply$1(binder.unbind, bus),
        emit: emit
    });
}
function State(initialState) {
    var state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return includes(toArray$1(states), state);
    }
    return {
        set: set,
        is: is
    };
}
var CLASS_SLIDE = PROJECT_CODE$1 + "__slide";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function find(arrayLike, predicate) {
    return slice(arrayLike).filter(predicate)[0];
}
function apply(func) {
    return func.bind(null, ...slice(arguments, 1));
}
function typeOf(type, subject) {
    return typeof subject === type;
}
function isObject(subject) {
    return !isNull(subject) && typeOf("object", subject);
}
const isArray = Array.isArray;
const isFunction = apply(typeOf, "function");
const isString = apply(typeOf, "string");
const isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
    return subject === null;
}
function isHTMLElement(subject) {
    return subject instanceof HTMLElement;
}
function toArray(value) {
    return isArray(value) ? value : [
        value
    ];
}
function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
}
function toggleClass(elm, classes, add) {
    if (elm) forEach(classes, (name)=>{
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children) {
    forEach(children, parent.appendChild.bind(parent));
}
function matches(elm, selector) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
    const children2 = parent ? slice(parent.children) : [];
    return selector ? children2.filter((child)=>matches(child, selector)) : children2;
}
function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
const ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
    if (object) {
        let keys = ownKeys(object);
        keys = right ? keys.reverse() : keys;
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            if (key !== "__proto__") {
                if (iteratee(object[key], key) === false) break;
            }
        }
    }
    return object;
}
function assign(object) {
    slice(arguments, 1).forEach((source)=>{
        forOwn(source, (value, key)=>{
            object[key] = source[key];
        });
    });
    return object;
}
function merge(object) {
    slice(arguments, 1).forEach((source)=>{
        forOwn(source, (value, key)=>{
            if (isArray(value)) object[key] = value.slice();
            else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
            else object[key] = value;
        });
    });
    return object;
}
function removeAttribute(elms, attrs) {
    forEach(elms, (elm)=>{
        forEach(attrs, (attr)=>{
            elm && elm.removeAttribute(attr);
        });
    });
}
function setAttribute(elms, attrs, value) {
    if (isObject(attrs)) forOwn(attrs, (value2, name)=>{
        setAttribute(elms, name, value2);
    });
    else forEach(elms, (elm)=>{
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
}
function create(tag, attrs, parent) {
    const elm = document.createElement(tag);
    if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    parent && append(parent, elm);
    return elm;
}
function style(elm, prop, value) {
    if (isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!isNull(value)) elm.style[prop] = `${value}`;
}
function display(elm, display2) {
    style(elm, "display", display2);
}
function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function remove(nodes) {
    forEach(nodes, (node)=>{
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function queryAll(parent, selector) {
    return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
}
const PROJECT_CODE = "splide";
function error(message) {
    console.error(`[${PROJECT_CODE}] ${message}`);
}
const { min , max , floor , ceil , abs  } = Math;
function clamp(number, x, y) {
    const minimum = min(x, y);
    const maximum = max(x, y);
    return min(max(minimum, number), maximum);
}
const CLASS_VIDEO = "splide__video";
const CLASS_VIDEO_WRAPPER = `${CLASS_VIDEO}__wrapper`;
const CLASS_VIDEO_PLAY_BUTTON = `${CLASS_VIDEO}__play`;
const CLASS_PLAYING = "is-playing";
const CLASS_ERROR = "is-error";
const CLASS_VIDEO_DISABLED = "is-video-disabled";
const MODIFIER_HAS_VIDEO = "--has-video";
const YOUTUBE_DATA_ATTRIBUTE = "data-splide-youtube";
const VIMEO_DATA_ATTRIBUTE = "data-splide-vimeo";
const HTML_VIDEO__DATA_ATTRIBUTE = "data-splide-html-video";
const DEFAULTS = {
    hideControls: false,
    loop: false,
    mute: false,
    volume: 0.2
};
const EVENT_VIDEO_PLAY = "video:play";
const EVENT_VIDEO_PAUSE = "video:pause";
const EVENT_VIDEO_ENDED = "video:ended";
const EVENT_VIDEO_ERROR = "video:error";
const EVENT_VIDEO_CLICK = "video:click";
const NOT_INITIALIZED = 1;
const INITIALIZING = 2;
const INITIALIZED = 3;
const PENDING_PLAY = 4;
const IDLE = 5;
const LOADING = 6;
const PLAY_REQUEST_ABORTED = 7;
const PLAYING = 8;
const ERROR = 9;
class AbstractVideoPlayer {
    constructor(target, videoId, options){
        this.state = State(NOT_INITIALIZED);
        this.event = EventInterface();
        this.target = target;
        this.videoId = videoId;
        this.options = options || {};
        this.onPlay = this.onPlay.bind(this);
        this.onPause = this.onPause.bind(this);
        this.onEnded = this.onEnded.bind(this);
        this.onPlayerReady = this.onPlayerReady.bind(this);
        this.onError = this.onError.bind(this);
    }
    on(events, callback) {
        this.event.on(events, callback);
    }
    play() {
        const { state  } = this;
        if (state.is(ERROR)) {
            error("Can not play this video.");
            return;
        }
        this.event.emit("play");
        if (state.is(INITIALIZING)) return state.set(PENDING_PLAY);
        if (state.is(INITIALIZED)) {
            this.player = this.createPlayer(this.videoId);
            return state.set(PENDING_PLAY);
        }
        if (state.is([
            PENDING_PLAY,
            PLAYING
        ])) return;
        if (state.is(IDLE)) {
            state.set(LOADING);
            this.playVideo();
        }
    }
    pause() {
        const { state  } = this;
        if (state.is(ERROR)) return;
        this.event.emit("pause");
        if (state.is(PENDING_PLAY)) return state.set(INITIALIZING);
        if (state.is(LOADING)) return state.set(PLAY_REQUEST_ABORTED);
        if (state.is(PLAYING)) {
            this.pauseVideo();
            this.state.set(IDLE);
        }
    }
    isPaused() {
        return !this.state.is(PLAYING);
    }
    destroy() {
        this.event.destroy();
    }
    onPlayerReady() {
        const { state  } = this;
        const isPending = state.is(PENDING_PLAY);
        state.set(IDLE);
        if (isPending) this.play();
    }
    onPlay() {
        const { state  } = this;
        const aborted = state.is(PLAY_REQUEST_ABORTED);
        state.set(PLAYING);
        if (aborted) this.pause();
        else this.event.emit("played");
    }
    onPause() {
        this.state.set(IDLE);
        this.event.emit("paused");
    }
    onEnded() {
        this.state.set(IDLE);
        this.event.emit("ended");
    }
    onError() {
        this.state.set(ERROR);
        this.event.emit("error");
    }
}
class HTMLVideoPlayer extends AbstractVideoPlayer {
    constructor(target, videoId, options = {}){
        super(target, videoId, options);
        this.state.set(INITIALIZED);
    }
    createPlayer(videoId) {
        const { options , options: { playerOptions ={}  }  } = this;
        const player = create("video", {
            src: videoId
        }, this.target);
        const on = player.addEventListener.bind(player);
        assign(player, {
            controls: !options.hideControls,
            loop: options.loop,
            volume: clamp(options.volume, 0, 1),
            muted: options.mute
        }, playerOptions.htmlVideo || {});
        on("play", this.onPlay);
        on("pause", this.onPause);
        on("ended", this.onEnded);
        on("loadeddata", this.onPlayerReady);
        on("error", this.onError);
        return player;
    }
    playVideo() {
        const promise = this.player.play();
        promise && promise.catch(this.onError.bind(this));
    }
    pauseVideo() {
        this.player.pause();
    }
    onError() {
        if (this.state.is(PLAY_REQUEST_ABORTED)) this.state.set(IDLE);
        else super.onError();
    }
    destroy() {
        super.destroy();
        const { player  } = this;
        const off = player.addEventListener.bind(player);
        off("play", this.onPlay);
        off("pause", this.onPause);
        off("ended", this.onEnded);
        off("loadeddata", this.onPlayerReady);
    }
}
/*! @vimeo/player v2.17.1 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/**
 * @module lib/functions
 */ /**
 * Check to see this is a node environment.
 * @type {Boolean}
 */ /* global global */ var isNode = typeof global !== "undefined" && ({}).toString.call(global) === "[object global]";
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */ function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) return prop;
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */ function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */ function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoUrl(url) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return expr.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */ function getVimeoUrl() {
    var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = oEmbedParameters.id;
    var url = oEmbedParameters.url;
    var idOrUrl = id || url;
    if (!idOrUrl) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (isInteger(idOrUrl)) return "https://vimeo.com/".concat(idOrUrl);
    if (isVimeoUrl(idOrUrl)) return idOrUrl.replace("http:", "https:");
    if (id) throw new TypeError("“".concat(id, "” is not a valid video id."));
    throw new TypeError("“".concat(idOrUrl, "” is not a vimeo.com url."));
}
var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function(self1) {
    if (self1.WeakMap) return;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
        try {
            // Avoid IE8's broken Object.defineProperty
            return Object.defineProperty({}, "x", {
                value: 1
            }).x === 1;
        } catch (e) {}
    }();
    var defineProperty = function(object, name, value) {
        if (hasDefine) Object.defineProperty(object, name, {
            configurable: true,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    self1.WeakMap = function() {
        // ECMA-262 23.3 WeakMap Objects
        function WeakMap1() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            defineProperty(this, "_id", genId("_WeakMap")); // ECMA-262 23.3.1.1 WeakMap([iterable])
            if (arguments.length > 0) // Currently, WeakMap `iterable` argument is not supported
            throw new TypeError("WeakMap iterable is not supported");
        } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
        defineProperty(WeakMap1.prototype, "delete", function(key) {
            checkInstance(this, "delete");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                delete key[this._id];
                return true;
            }
            return false;
        }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
        defineProperty(WeakMap1.prototype, "get", function(key) {
            checkInstance(this, "get");
            if (!isObject(key)) return void 0;
            var entry = key[this._id];
            if (entry && entry[0] === key) return entry[1];
            return void 0;
        }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
        defineProperty(WeakMap1.prototype, "has", function(key) {
            checkInstance(this, "has");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) return true;
            return false;
        }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
        defineProperty(WeakMap1.prototype, "set", function(key, value) {
            checkInstance(this, "set");
            if (!isObject(key)) throw new TypeError("Invalid value used as weak map key");
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                entry[1] = value;
                return this;
            }
            defineProperty(key, this._id, [
                key,
                value
            ]);
            return this;
        });
        function checkInstance(x, methodName) {
            if (!isObject(x) || !hasOwnProperty.call(x, "_id")) throw new TypeError(methodName + " method called on incompatible receiver " + typeof x);
        }
        function genId(prefix) {
            return prefix + "_" + rand() + "." + rand();
        }
        function rand() {
            return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap1, "_polyfill", true);
        return WeakMap1;
    }();
    function isObject(x) {
        return Object(x) === x;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
var npo_src = createCommonjsModule(function(module) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function UMD(name, context, definition) {
        // special form of UMD for polyfilling across evironments
        context[name] = context[name] || definition();
        if (module.exports) module.exports = context[name];
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
        var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
            return setImmediate(fn);
        } : setTimeout; // dammit, IE8.
        try {
            Object.defineProperty({}, "x", {});
            builtInProp = function builtInProp(obj, name, val, config) {
                return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                });
            };
        } catch (err) {
            builtInProp = function builtInProp(obj, name, val) {
                obj[name] = val;
                return obj;
            };
        } // Note: using a queue instead of array for efficiency
        scheduling_queue = function Queue() {
            var first, last, item;
            function Item(fn, self1) {
                this.fn = fn;
                this.self = self1;
                this.next = void 0;
            }
            return {
                add: function add(fn, self1) {
                    item = new Item(fn, self1);
                    if (last) last.next = item;
                    else first = item;
                    last = item;
                    item = void 0;
                },
                drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;
                    while(f){
                        f.fn.call(f.self);
                        f = f.next;
                    }
                }
            };
        }();
        function schedule(fn, self1) {
            scheduling_queue.add(fn, self1);
            if (!cycle) cycle = timer(scheduling_queue.drain);
        } // promise duck typing
        function isThenable(o) {
            var _then, o_type = typeof o;
            if (o != null && (o_type == "object" || o_type == "function")) _then = o.then;
            return typeof _then == "function" ? _then : false;
        }
        function notify() {
            for(var i = 0; i < this.chain.length; i++)notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
            this.chain.length = 0;
        } // NOTE: This is a separate function to isolate
        // the `try..catch` so that other code can be
        // optimized better
        function notifyIsolated(self1, cb, chain) {
            var ret, _then;
            try {
                if (cb === false) chain.reject(self1.msg);
                else {
                    if (cb === true) ret = self1.msg;
                    else ret = cb.call(void 0, self1.msg);
                    if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
                    else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
                    else chain.resolve(ret);
                }
            } catch (err) {
                chain.reject(err);
            }
        }
        function resolve(msg) {
            var _then, self1 = this; // already triggered?
            if (self1.triggered) return;
            self1.triggered = true; // unwrap
            if (self1.def) self1 = self1.def;
            try {
                if (_then = isThenable(msg)) schedule(function() {
                    var def_wrapper = new MakeDefWrapper(self1);
                    try {
                        _then.call(msg, function $resolve$() {
                            resolve.apply(def_wrapper, arguments);
                        }, function $reject$() {
                            reject.apply(def_wrapper, arguments);
                        });
                    } catch (err) {
                        reject.call(def_wrapper, err);
                    }
                });
                else {
                    self1.msg = msg;
                    self1.state = 1;
                    if (self1.chain.length > 0) schedule(notify, self1);
                }
            } catch (err) {
                reject.call(new MakeDefWrapper(self1), err);
            }
        }
        function reject(msg) {
            var self1 = this; // already triggered?
            if (self1.triggered) return;
            self1.triggered = true; // unwrap
            if (self1.def) self1 = self1.def;
            self1.msg = msg;
            self1.state = 2;
            if (self1.chain.length > 0) schedule(notify, self1);
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
            for(var idx = 0; idx < arr.length; idx++)(function IIFE(idx) {
                Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                    resolver(idx, msg);
                }, rejecter);
            })(idx);
        }
        function MakeDefWrapper(self1) {
            this.def = self1;
            this.triggered = false;
        }
        function MakeDef(self1) {
            this.promise = self1;
            this.state = 0;
            this.triggered = false;
            this.chain = [];
            this.msg = void 0;
        }
        function Promise1(executor) {
            if (typeof executor != "function") throw TypeError("Not a function");
            if (this.__NPO__ !== 0) throw TypeError("Not a promise");
             // instance shadowing the inherited "brand"
            // to signal an already "initialized" promise
            this.__NPO__ = 1;
            var def = new MakeDef(this);
            this["then"] = function then(success, failure) {
                var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                }; // Note: `then(..)` itself can be borrowed to be used against
                // a different promise constructor for making the chained promise,
                // by substituting a different `this` binding.
                o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    o.resolve = resolve;
                    o.reject = reject;
                });
                def.chain.push(o);
                if (def.state !== 0) schedule(notify, def);
                return o.promise;
            };
            this["catch"] = function $catch$(failure) {
                return this.then(void 0, failure);
            };
            try {
                executor.call(void 0, function publicResolve(msg) {
                    resolve.call(def, msg);
                }, function publicReject(msg) {
                    reject.call(def, msg);
                });
            } catch (err) {
                reject.call(def, err);
            }
        }
        var PromisePrototype = builtInProp({}, "constructor", Promise1, /*configurable=*/ false); // Note: Android 4 cannot use `Object.defineProperty(..)` here
        Promise1.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise
        builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
        builtInProp(Promise1, "resolve", function Promise$resolve(msg) {
            var Constructor = this; // spec mandated checks
            // note: best "isPromise" check that's practical for now
            if (msg && typeof msg == "object" && msg.__NPO__ === 1) return msg;
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                resolve(msg);
            });
        });
        builtInProp(Promise1, "reject", function Promise$reject(msg) {
            return new this(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                reject(msg);
            });
        });
        builtInProp(Promise1, "all", function Promise$all(arr) {
            var Constructor = this; // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            if (arr.length === 0) return Constructor.resolve([]);
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                var len = arr.length, msgs = Array(len), count = 0;
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;
                    if (++count === len) resolve(msgs);
                }, reject);
            });
        });
        builtInProp(Promise1, "race", function Promise$race(arr) {
            var Constructor = this; // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                }, reject);
            });
        });
        return Promise1;
    });
});
/**
 * @module lib/callbacks
 */ var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */ function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) playerCallbacks[name] = [];
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */ function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */ function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) return true;
     // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);
        return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) playerCallbacks[name].splice(index, 1);
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */ function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) return false;
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */ function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */ /**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */ function parseMessageData(data) {
    if (typeof data === "string") try {
        data = JSON.parse(data);
    } catch (error) {
        // If the message cannot be parsed, throw the error as a warning
        console.warn(error);
        return {};
    }
    return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */ function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) return;
    var message = {
        method: method
    };
    if (params !== undefined) message.value = params;
     // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    if (ieVersion >= 8 && ieVersion < 10) message = JSON.stringify(message);
    player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */ function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
        if (data.event === "error") {
            var promises = getCallbacks(player, data.data.method);
            promises.forEach(function(promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;
                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }
        callbacks = getCallbacks(player, "event:".concat(data.event));
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);
        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }
    callbacks.forEach(function(callback) {
        try {
            if (typeof callback === "function") {
                callback.call(player, param);
                return;
            }
            callback.resolve(param);
        } catch (e) {}
    });
}
/**
 * @module lib/embed
 */ var oEmbedParameters = [
    "autopause",
    "autoplay",
    "background",
    "byline",
    "color",
    "controls",
    "dnt",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "playsinline",
    "portrait",
    "responsive",
    "speed",
    "texttrack",
    "title",
    "transparent",
    "url",
    "width"
];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */ function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
        var value = element.getAttribute("data-vimeo-".concat(param));
        if (value || value === "") params[param] = value === "" ? 1 : value;
        return params;
    }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */ function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) throw new TypeError("An element must be provided");
    if (element.getAttribute("data-vimeo-initialized") !== null) return element.querySelector("iframe");
    var div = document.createElement("div");
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */ function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function(resolve, reject) {
        if (!isVimeoUrl(videoUrl)) throw new TypeError("“".concat(videoUrl, "” is not a vimeo.com url."));
        var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
        for(var param in params)if (params.hasOwnProperty(param)) url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            if (xhr.status === 404) {
                reject(new Error("“".concat(videoUrl, "” was not found.")));
                return;
            }
            if (xhr.status === 403) {
                reject(new Error("“".concat(videoUrl, "” is not embeddable.")));
                return;
            }
            try {
                var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed
                if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(new Error("“".concat(videoUrl, "” is not embeddable.")));
                    return;
                }
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        xhr.onerror = function() {
            var status = xhr.status ? " (".concat(xhr.status, ")") : "";
            reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
        };
        xhr.send();
    });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error creating an embed: ".concat(error));
    };
    elements.forEach(function(element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute("data-vimeo-defer") !== null) return;
            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);
            getOEmbedData(url, params, element).then(function(data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    // Prevent execution if users include the player.js script multiple times.
    if (window.VimeoPlayerResizeEmbeds_) return;
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
         // 'spacechange' is fired only on embeds with cards
        if (!event.data || event.data.event !== "spacechange") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            if (iframes[i].contentWindow !== event.source) continue;
             // Change padding-bottom of the enclosing div to accommodate
            // card carousel without distorting aspect ratio
            var space = iframes[i].parentElement;
            space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
            break;
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoSeoMetadataAppended) return;
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
                var player = new Player$1(iframe);
                player.callMethod("appendVideoMetadata", window.location.href);
            }
        }
    };
    window.addEventListener("message", onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */ function initializeScreenfull() {
    var fn = function() {
        var val;
        var fnMap = [
            [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror"
            ],
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError"
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };
    var screenfull = {
        request: function request(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered = function onFullScreenEntered() {
                    screenfull.off("fullscreenchange", onFullScreenEntered);
                    resolve();
                };
                screenfull.on("fullscreenchange", onFullScreenEntered);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered).catch(reject);
            });
        },
        exit: function exit() {
            return new Promise(function(resolve, reject) {
                if (!screenfull.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit = function onFullScreenExit() {
                    screenfull.off("fullscreenchange", onFullScreenExit);
                    resolve();
                };
                screenfull.on("fullscreenchange", onFullScreenExit);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit).catch(reject);
            });
        },
        on: function on(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.addEventListener(eventName, callback);
        },
        off: function off(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.removeEventListener(eventName, callback);
        }
    };
    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    return screenfull;
}
var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};
var Player$1 = /*#__PURE__*/ function() {
    /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */ function Player(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, Player);
        /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) console.warn("A jQuery object with multiple elements was passed, using the first element.");
            element = element[0];
        } // Find an element by ID
        if (typeof document !== "undefined" && typeof element === "string") element = document.getElementById(element);
         // Not an element!
        if (!isDomElement(element)) throw new TypeError("You must pass either a valid element or a valid id.");
         // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== "IFRAME") {
            var iframe = element.querySelector("iframe");
            if (iframe) element = iframe;
        } // iframe url is not a Vimeo url
        if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
         // If there is already a player object in the map, return that
        if (playerMap.has(element)) return playerMap.get(element);
        this._window = element.ownerDocument.defaultView;
        this.element = element;
        this.origin = "*";
        var readyPromise = new npo_src(function(resolve, reject) {
            _this._onMessage = function(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) return;
                if (_this.origin === "*") _this.origin = event.origin;
                var data = parseMessageData(event.data);
                var isError = data && data.event === "error";
                var isReadyError = isError && data.data && data.data.method === "ready";
                if (isReadyError) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    reject(error);
                    return;
                }
                var isReadyEvent = data && data.event === "ready";
                var isPingResponse = data && data.method === "ping";
                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute("data-ready", "true");
                    resolve();
                    return;
                }
                processData(_this, data);
            };
            _this._window.addEventListener("message", _this._onMessage);
            if (_this.element.nodeName !== "IFRAME") {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
                    // but store reference to the original element
                    _this.element = iframe;
                    _this._originalElement = element;
                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);
                    return data;
                }).catch(reject);
            }
        }); // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === "IFRAME") postMessage(this, "ping");
        if (screenfull.isEnabled) {
            var exitFullscreen = function exitFullscreen() {
                return screenfull.exit();
            };
            this.fullscreenchangeHandler = function() {
                if (screenfull.isFullscreen) storeCallback(_this, "event:exitFullscreen", exitFullscreen);
                else removeCallback(_this, "event:exitFullscreen", exitFullscreen);
                 // eslint-disable-next-line
                _this.ready().then(function() {
                    postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
                });
            };
            screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
    }
    /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */ _createClass(Player, [
        {
            key: "callMethod",
            value: function callMethod(name) {
                var _this2 = this;
                var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return new npo_src(function(resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this2.ready().then(function() {
                        storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this2, name, args);
                    }).catch(reject);
                });
            }
        },
        {
            key: "get",
            value: function get(name) {
                var _this3 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "get"); // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this3.ready().then(function() {
                        storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this3, name);
                    }).catch(reject);
                });
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                var _this4 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "set");
                    if (value === undefined || value === null) throw new TypeError("There must be a value to set.");
                     // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this4.ready().then(function() {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this4, name, value);
                    }).catch(reject);
                });
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (!callback) throw new TypeError("You must pass a callback function.");
                if (typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var callbacks = getCallbacks(this, "event:".concat(eventName));
                if (callbacks.length === 0) this.callMethod("addEventListener", eventName).catch(function() {
                // will trigger the error callback if they are listening.
                });
                storeCallback(this, "event:".concat(eventName), callback);
            }
        },
        {
            key: "off",
            value: function off(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (callback && typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener
                if (lastCallback) this.callMethod("removeEventListener", eventName).catch(function(e) {
                // will trigger the error callback if they are listening.
                });
            }
        },
        {
            key: "loadVideo",
            value: function loadVideo(options) {
                return this.callMethod("loadVideo", options);
            }
        },
        {
            key: "ready",
            value: function ready() {
                var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                    reject(new Error("Unknown player. Probably unloaded."));
                });
                return npo_src.resolve(readyPromise);
            }
        },
        {
            key: "addCuePoint",
            value: function addCuePoint(time) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: time,
                    data: data
                });
            }
        },
        {
            key: "removeCuePoint",
            value: function removeCuePoint(id) {
                return this.callMethod("removeCuePoint", id);
            }
        },
        {
            key: "enableTextTrack",
            value: function enableTextTrack(language, kind) {
                if (!language) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: language,
                    kind: kind
                });
            }
        },
        {
            key: "disableTextTrack",
            value: function disableTextTrack() {
                return this.callMethod("disableTextTrack");
            }
        },
        {
            key: "pause",
            value: function pause() {
                return this.callMethod("pause");
            }
        },
        {
            key: "play",
            value: function play() {
                return this.callMethod("play");
            }
        },
        {
            key: "requestFullscreen",
            value: function requestFullscreen() {
                if (screenfull.isEnabled) return screenfull.request(this.element);
                return this.callMethod("requestFullscreen");
            }
        },
        {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                if (screenfull.isEnabled) return screenfull.exit();
                return this.callMethod("exitFullscreen");
            }
        },
        {
            key: "getFullscreen",
            value: function getFullscreen() {
                if (screenfull.isEnabled) return npo_src.resolve(screenfull.isFullscreen);
                return this.get("fullscreen");
            }
        },
        {
            key: "requestPictureInPicture",
            value: function requestPictureInPicture() {
                return this.callMethod("requestPictureInPicture");
            }
        },
        {
            key: "exitPictureInPicture",
            value: function exitPictureInPicture() {
                return this.callMethod("exitPictureInPicture");
            }
        },
        {
            key: "getPictureInPicture",
            value: function getPictureInPicture() {
                return this.get("pictureInPicture");
            }
        },
        {
            key: "unload",
            value: function unload() {
                return this.callMethod("unload");
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this5 = this;
                return new npo_src(function(resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);
                    if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute("data-vimeo-initialized");
                    }
                    if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                        else _this5.element.parentNode.removeChild(_this5.element);
                    } // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.
                    if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
                        _this5.element.removeAttribute("data-vimeo-initialized");
                        var iframe = _this5.element.querySelector("iframe");
                        if (iframe && iframe.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                            else iframe.parentNode.removeChild(iframe);
                        }
                    }
                    _this5._window.removeEventListener("message", _this5._onMessage);
                    if (screenfull.isEnabled) screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
                    resolve();
                });
            }
        },
        {
            key: "getAutopause",
            value: function getAutopause() {
                return this.get("autopause");
            }
        },
        {
            key: "setAutopause",
            value: function setAutopause(autopause) {
                return this.set("autopause", autopause);
            }
        },
        {
            key: "getBuffered",
            value: function getBuffered() {
                return this.get("buffered");
            }
        },
        {
            key: "getCameraProps",
            value: function getCameraProps() {
                return this.get("cameraProps");
            }
        },
        {
            key: "setCameraProps",
            value: function setCameraProps(camera) {
                return this.set("cameraProps", camera);
            }
        },
        {
            key: "getChapters",
            value: function getChapters() {
                return this.get("chapters");
            }
        },
        {
            key: "getCurrentChapter",
            value: function getCurrentChapter() {
                return this.get("currentChapter");
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.get("color");
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                return this.set("color", color);
            }
        },
        {
            key: "getCuePoints",
            value: function getCuePoints() {
                return this.get("cuePoints");
            }
        },
        {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return this.get("currentTime");
            }
        },
        {
            key: "setCurrentTime",
            value: function setCurrentTime(currentTime) {
                return this.set("currentTime", currentTime);
            }
        },
        {
            key: "getDuration",
            value: function getDuration() {
                return this.get("duration");
            }
        },
        {
            key: "getEnded",
            value: function getEnded() {
                return this.get("ended");
            }
        },
        {
            key: "getLoop",
            value: function getLoop() {
                return this.get("loop");
            }
        },
        {
            key: "setLoop",
            value: function setLoop(loop) {
                return this.set("loop", loop);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(muted) {
                return this.set("muted", muted);
            }
        },
        {
            key: "getMuted",
            value: function getMuted() {
                return this.get("muted");
            }
        },
        {
            key: "getPaused",
            value: function getPaused() {
                return this.get("paused");
            }
        },
        {
            key: "getPlaybackRate",
            value: function getPlaybackRate() {
                return this.get("playbackRate");
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                return this.set("playbackRate", playbackRate);
            }
        },
        {
            key: "getPlayed",
            value: function getPlayed() {
                return this.get("played");
            }
        },
        {
            key: "getQualities",
            value: function getQualities() {
                return this.get("qualities");
            }
        },
        {
            key: "getQuality",
            value: function getQuality() {
                return this.get("quality");
            }
        },
        {
            key: "setQuality",
            value: function setQuality(quality) {
                return this.set("quality", quality);
            }
        },
        {
            key: "getSeekable",
            value: function getSeekable() {
                return this.get("seekable");
            }
        },
        {
            key: "getSeeking",
            value: function getSeeking() {
                return this.get("seeking");
            }
        },
        {
            key: "getTextTracks",
            value: function getTextTracks() {
                return this.get("textTracks");
            }
        },
        {
            key: "getVideoEmbedCode",
            value: function getVideoEmbedCode() {
                return this.get("videoEmbedCode");
            }
        },
        {
            key: "getVideoId",
            value: function getVideoId() {
                return this.get("videoId");
            }
        },
        {
            key: "getVideoTitle",
            value: function getVideoTitle() {
                return this.get("videoTitle");
            }
        },
        {
            key: "getVideoWidth",
            value: function getVideoWidth() {
                return this.get("videoWidth");
            }
        },
        {
            key: "getVideoHeight",
            value: function getVideoHeight() {
                return this.get("videoHeight");
            }
        },
        {
            key: "getVideoUrl",
            value: function getVideoUrl() {
                return this.get("videoUrl");
            }
        },
        {
            key: "getVolume",
            value: function getVolume() {
                return this.get("volume");
            }
        },
        {
            key: "setVolume",
            value: function setVolume(volume) {
                return this.set("volume", volume);
            }
        }
    ]);
    return Player;
}(); // Setup embed only if this is not a node environment
if (!isNode) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
}
class VimeoPlayer extends AbstractVideoPlayer {
    constructor(target, videoId, options = {}){
        super(target, videoId, options);
        this.state.set(INITIALIZED);
    }
    createPlayer(videoId) {
        const { options , options: { playerOptions ={}  }  } = this;
        const vimeoOptions = videoId.indexOf("http") === 0 ? {
            url: videoId
        } : {
            id: +videoId
        };
        const player = new Player$1(this.target, assign(vimeoOptions, {
            controls: !options.hideControls,
            loop: options.loop,
            muted: options.mute
        }, playerOptions.vimeo || {}));
        player.on("play", this.onPlay);
        player.on("pause", this.onPause);
        player.on("ended", this.onEnded);
        player.ready().then(this.onPlayerReady, this.onError);
        if (!player.getMuted()) player.setVolume(clamp(options.volume, 0, 1));
        return player;
    }
    playVideo() {
        this.player.play().catch(()=>{
            if (this.state.is(PLAY_REQUEST_ABORTED)) this.state.set(IDLE);
        });
    }
    pauseVideo() {
        this.player.pause();
    }
}
const YOUTUBE_API_SRC = "//www.youtube.com/player_api";
class YouTubeIframeAPILoader {
    load(callback) {
        if (window.YT && isFunction(window.YT.Player)) return callback();
        this.attachCallback(callback);
        if (this.shouldLoad()) create("script", {
            src: `${location.protocol}${YOUTUBE_API_SRC}`
        }, document.head);
    }
    shouldLoad() {
        return !queryAll(document, "script").some((script)=>script.src.replace(/^https?:/, "") === YOUTUBE_API_SRC);
    }
    attachCallback(callback) {
        let oldCallback;
        if (!isUndefined(window.onYouTubeIframeAPIReady)) oldCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = ()=>{
            oldCallback && oldCallback();
            callback();
        };
    }
}
class YouTubePlayer extends AbstractVideoPlayer {
    constructor(target, videoId, options = {}){
        super(target, videoId, options);
        this.videoId = this.parseVideoId(videoId);
        if (this.videoId) {
            this.state.set(INITIALIZING);
            new YouTubeIframeAPILoader().load(this.onAPIReady.bind(this));
        }
    }
    onAPIReady() {
        const { state  } = this;
        const isPending = state.is(PENDING_PLAY);
        state.set(INITIALIZED);
        if (isPending) this.play();
    }
    createPlayer(videoId) {
        const { options , options: { playerOptions ={}  }  } = this;
        return new YT.Player(this.target, {
            videoId,
            host: options.host,
            playerVars: assign({
                controls: options.hideControls ? 0 : 1,
                iv_load_policy: 3,
                loop: options.loop ? 1 : 0,
                playlist: options.loop ? videoId : void 0,
                rel: 0,
                autoplay: 0,
                mute: options.mute ? 1 : 0
            }, playerOptions.youtube || {}),
            events: {
                onReady: this.onPlayerReady.bind(this),
                onStateChange: this.onPlayerStateChange.bind(this),
                onError: this.onError.bind(this)
            }
        });
    }
    onPlayerReady() {
        super.onPlayerReady();
        this.player.setVolume(clamp(this.options.volume, 0, 1) * 100);
    }
    onPlayerStateChange(e) {
        const { PLAYING , PAUSED , ENDED  } = YT.PlayerState;
        switch(true){
            case e.data === PLAYING:
                this.onPlay();
                break;
            case e.data === PAUSED:
                this.onPause();
                break;
            case e.data === ENDED:
                this.onEnded();
                break;
        }
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    parseVideoId(id) {
        return id.indexOf("http") === 0 ? this.parseUrl(id) : id;
    }
    parseUrl(url) {
        const [, search] = url.split(/[#?]/);
        const query = find(search.split("&"), (query2)=>query2.indexOf("v=") === 0);
        return query && query.replace("v=", "");
    }
}
const I18N = {
    playVideo: "Play Video"
};
class PlayerUI {
    constructor(Splide2, slide){
        this.event = EventInterface();
        this.Splide = Splide2;
        this.slide = slide;
        this.container = child(this.slide, `.${CLASS_CONTAINER}`);
        this.parent = this.container || this.slide;
        this.init();
        this.create();
        this.show();
        this.listen();
    }
    init() {
        addClass(this.slide, `${CLASS_SLIDE}${MODIFIER_HAS_VIDEO}`);
        addClass(this.container, `${CLASS_CONTAINER}${MODIFIER_HAS_VIDEO}`);
    }
    create() {
        this.video = create("div", CLASS_VIDEO, this.parent);
        this.playButton = create("button", {
            class: CLASS_VIDEO_PLAY_BUTTON,
            type: "button",
            "aria-label": this.Splide.options.i18n.playVideo || I18N.playVideo
        }, this.video);
        this.wrapper = create("div", CLASS_VIDEO_WRAPPER, this.video);
        this.placeholder = create("div", null, this.wrapper);
    }
    listen() {
        this.parent.addEventListener("click", ()=>{
            this.event.emit("click");
        });
    }
    toggleButton(show) {
        display(this.playButton, show ? "" : "none");
    }
    toggleWrapper(show) {
        display(this.wrapper, show ? "" : "none");
    }
    getPlaceholder() {
        return this.placeholder;
    }
    hide() {
        this.toggleButton(false);
        this.toggleWrapper(true);
    }
    show() {
        if (!this.disabled) this.toggleButton(true);
        this.toggleWrapper(false);
    }
    disable(disabled) {
        this.disabled = disabled;
        if (disabled) this.toggleButton(false);
    }
    on(events, callback) {
        this.event.on(events, callback);
    }
    destroy() {
        removeClass(this.slide, `${CLASS_SLIDE}${MODIFIER_HAS_VIDEO}`);
        removeClass(this.container, `${CLASS_CONTAINER}${MODIFIER_HAS_VIDEO}`);
        remove(this.video);
        this.event.destroy();
    }
}
const VIDEO_PLAYER_MAP = [
    [
        YOUTUBE_DATA_ATTRIBUTE,
        YouTubePlayer
    ],
    [
        VIMEO_DATA_ATTRIBUTE,
        VimeoPlayer
    ],
    [
        HTML_VIDEO__DATA_ATTRIBUTE,
        HTMLVideoPlayer
    ]
];
class Player {
    constructor(Splide2, slide){
        this.Splide = Splide2;
        this.slide = slide;
        this.event = EventInterface(Splide2);
        this.options = merge(merge({}, DEFAULTS), this.Splide.options.video);
        this.createPlayer(slide);
        if (this.player) this.listen();
    }
    createPlayer(slide) {
        VIDEO_PLAYER_MAP.forEach(([attr, Constructor])=>{
            const id = getAttribute(slide, attr);
            if (id) {
                this.ui = new PlayerUI(this.Splide, slide);
                this.player = new Constructor(this.ui.getPlaceholder(), id, this.options);
                this.ui.disable(this.options.disableOverlayUI);
            }
        });
    }
    listen() {
        const { player , event  } = this;
        this.ui.on("click", this.onClick.bind(this));
        player.on("play", this.onPlay.bind(this));
        player.on("played", this.onPlayed.bind(this));
        player.on("pause", this.onPause.bind(this));
        player.on("paused", this.onPaused.bind(this));
        player.on("ended", this.onEnded.bind(this));
        player.on("error", this.onError.bind(this));
        event.on([
            EVENT_MOVE,
            EVENT_SCROLL
        ], this.pause.bind(this));
        event.on(EVENT_VIDEO_CLICK, this.onVideoClick.bind(this));
        event.on(EVENT_DRAG, ()=>{
            event.off(EVENT_DRAGGING);
            event.on(EVENT_DRAGGING, ()=>{
                this.pause();
                event.off(EVENT_DRAGGING);
            });
        });
        if (this.options.autoplay) event.on([
            EVENT_MOUNTED,
            EVENT_MOVED,
            EVENT_SCROLLED
        ], this.onAutoplayRequested.bind(this));
    }
    onClick() {
        this.isPaused() ? this.play() : this.pause();
        this.event.emit(EVENT_VIDEO_CLICK, this);
    }
    onVideoClick(player) {
        if (this !== player) this.pause();
    }
    onPlay() {
        this.ui.hide();
    }
    onPlayed() {
        this.ui.hide();
        this.togglePlaying(true);
        this.event.emit(EVENT_VIDEO_PLAY, this);
    }
    onPause() {
        this.ui.show();
    }
    onPaused() {
        this.togglePlaying(false);
        this.event.emit(EVENT_VIDEO_PAUSE, this);
    }
    onEnded() {
        this.togglePlaying(false);
        this.event.emit(EVENT_VIDEO_ENDED, this);
    }
    onError() {
        addClass(this.slide, CLASS_ERROR);
        this.ui.show();
        this.event.emit(EVENT_VIDEO_ERROR, this);
    }
    onAutoplayRequested() {
        const activeSlide = this.Splide.Components.Slides.getAt(this.Splide.index);
        if (activeSlide.slide === this.slide) this.play();
    }
    togglePlaying(add) {
        toggleClass(this.Splide.root, CLASS_PLAYING, add);
    }
    play() {
        if (this.player && !this.disabled) this.player.play();
    }
    pause() {
        if (this.player && !this.disabled) this.player.pause();
    }
    destroy() {
        if (this.player) {
            this.ui.destroy();
            this.player.destroy();
        }
        this.disable(false);
    }
    disable(disabled) {
        this.disabled = disabled;
        toggleClass(this.Splide.root, CLASS_VIDEO_DISABLED, disabled);
    }
    isPaused() {
        return this.player.isPaused();
    }
}
function Video(Splide2, Components2) {
    const { on  } = EventInterface(Splide2);
    const { Slides  } = Components2;
    const players = {};
    function mount() {
        create();
        on("refresh", create);
    }
    function create() {
        Slides.forEach((Slide)=>{
            const { slide  } = Slide;
            if (!hasClass(slide, `${CLASS_SLIDE}${MODIFIER_HAS_VIDEO}`)) players[Slide.index] = new Player(Splide2, slide);
        });
        Slides.update();
    }
    function destroy() {
        forOwn(players, (player)=>{
            player.destroy();
        });
    }
    function play(index = Splide2.index) {
        const player = players[index];
        if (player) player.play();
    }
    function pause() {
        forOwn(players, (player)=>{
            player.pause();
        });
    }
    function disable(disabled) {
        forOwn(players, (player)=>{
            player.disable(disabled);
        });
    }
    return {
        mount,
        destroy,
        play,
        pause,
        disable
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0nYl":[function() {},{}],"1SEZe":[function() {},{}],"8t3va":[function() {},{}],"5pclG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataClips", ()=>dataClips);
const dataClips = {
    clips: [
        [
            "https://www.youtube.com/watch?v=mhlj0ZNLjcI",
            "vignette-video.jpg"
        ],
        [
            "https://www.youtube.com/watch?v=4WBdjE6tAAA",
            "making-of-echo-phoenix.webp"
        ]
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequireaf7b")

//# sourceMappingURL=index.739bf03c.js.map
