/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 873:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class RouterConfig {
    config() {
        return [
            {
                url: "/",
                name: "IndexPage"
            },
            {
                url: "/example",
                name: "ExamplePage"
            },
            {
                url: "/index.html",
                name: "IndexPage"
            }
        ];
    }
    notFound() {
        // 404 page
        return "NotFoundPage";
    }
}
exports["default"] = RouterConfig;


/***/ }),

/***/ 375:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VnNativeOsindex {
    isOs() {
        let data;
        let platforms;
        platforms = window;
        data = platforms.device && platforms.device.platform ? platforms.device.platform : "browser";
        if (platforms.vnnativeos) {
            if (platforms.vnnativeos.getOsName()) {
                data = platforms.vnnativeos.getOsName();
            }
        }
        return data;
    }
}
exports["default"] = VnNativeOsindex;


/***/ }),

/***/ 914:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VnNative3ConsoleCore = /** @class */ (function () {
    function VnNative3ConsoleCore() {
    }
    VnNative3ConsoleCore.prototype.info = function (message) {
        return console.info("%c ".concat(message, " "), 'background: green; color: #bada55');
    };
    VnNative3ConsoleCore.prototype.log = function (message) {
        return console.log("%c ".concat(message, " "), 'background: #222; color: #bada55');
    };
    VnNative3ConsoleCore.prototype.debug = function (message) {
        return console.debug("%c ".concat(message, " "), 'background: yellow; color: #bada55');
    };
    VnNative3ConsoleCore.prototype.error = function (message) {
        return console.error("%c ".concat(message, " "), 'background: red; color: #bada55');
    };
    return VnNative3ConsoleCore;
}());
exports["default"] = VnNative3ConsoleCore;


/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Vnnative3Query_1 = __webpack_require__(876);
const Vnnative3Redirect_1 = __webpack_require__(192);
class Vnnative3LocationBase {
    constructor() {
        this.query = new Vnnative3Query_1.default;
        this.redirect = new Vnnative3Redirect_1.default;
    }
}
exports["default"] = Vnnative3LocationBase;


/***/ }),

/***/ 985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Vnnative3Location_1 = __webpack_require__(555);
class Vnnative3Location extends Vnnative3Location_1.default {
}
exports["default"] = Vnnative3Location;


/***/ }),

/***/ 876:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Vnnative3Query {
    get(key) {
        let currentUrl = window.location.href;
        let queryString = currentUrl.split('?');
        if (queryString.length <= 1) {
            return "";
        }
        let queryStringArray = queryString[1].split('&');
        for (let i = 0; i < queryStringArray.length; i++) {
            let query = queryStringArray[i].split('=');
            if (query[0] === key) {
                return query.length <= 1 ? "" : String(query[1]);
            }
        }
        return "";
    }
}
exports["default"] = Vnnative3Query;


/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(375);
class Vnnative3Redirect {
    go(url, query) {
        const pathName = window.location.pathname;
        let os;
        os = (new index_1.default).isOs();
        let platform = window;
        if (platform.vnnativeos) {
            if (platform.vnnativeos.getOsName()) {
                os = platform.vnnativeos.getOsName();
            }
        }
        if (query.length < 1) {
            if (os === "Android") {
                history.pushState({}, '', './index.html?vn3page=' + url);
            }
            else if (os === "iOS" || os === "software") {
                history.pushState({}, '', './index.html?vn3page=' + url);
            }
            else {
                history.pushState({}, '', url);
            }
            return;
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if (os === "Android") {
                    history.pushState({}, '', './index.html' + queryString + '&vn3page=' + url);
                }
                else if (os === "iOS" || os === "software") {
                    history.pushState({}, '', './index.html' + queryString + '&vn3page=' + url);
                }
                else {
                    history.pushState({}, '', url + queryString);
                }
                return;
            }
        }
    }
    goUrl(url, query) {
        let link = "";
        const pathName = window.location.pathname;
        let os;
        os = (new index_1.default).isOs();
        let platform = window;
        if (platform.vnnativeos) {
            if (platform.vnnativeos.getOsName()) {
                os = platform.vnnativeos.getOsName();
            }
        }
        if (query.length < 1) {
            if (os === "Android") {
                link = './index.html?vn3page=' + url;
            }
            else if (os === "iOS" || os === "software") {
                link = './index.html?vn3page=' + url;
            }
            else {
                link = url;
            }
            return link;
        }
        let queryString = "?";
        for (let i = 0; i < query.length; i++) {
            queryString += `${query[i]['key']}=${query[i]['value']}`;
            if ((i + 1) == query.length) {
                if (os === "Android") {
                    link = './index.html' + queryString + '&vn3page=' + url;
                }
                else if (os === "iOS" || os === "software") {
                    link = './index.html' + queryString + '&vn3page=' + url;
                }
                else {
                    link = url + queryString;
                }
                return link;
            }
        }
    }
    back() {
        window.history.back();
    }
}
exports["default"] = Vnnative3Redirect;


/***/ }),

/***/ 570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var struct_1 = __webpack_require__(62);
var VnNative3Router = /** @class */ (function (_super) {
    __extends(VnNative3Router, _super);
    function VnNative3Router() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VnNative3Router;
}(struct_1.default));
exports["default"] = VnNative3Router;


/***/ }),

/***/ 760:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var console_1 = __webpack_require__(914);
var index_1 = __webpack_require__(985);
var index_2 = __webpack_require__(375);
var Vnnative3RouterBase = /** @class */ (function () {
    function Vnnative3RouterBase() {
        this.notFound = "";
    }
    Vnnative3RouterBase.prototype.set = function (data, notFound) {
        if (notFound === void 0) { notFound = "NotFoundPage"; }
        try {
            this.config = data;
            this.notFound = notFound;
        }
        catch (e) {
            return (new console_1.default).error(e.toString());
        }
    };
    Vnnative3RouterBase.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startLoad_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    startLoad_1 = function () {
                        var _a, _b;
                        var platform;
                        platform = window;
                        var os = (new index_2.default).isOs();
                        var root;
                        root = document.getElementById("root");
                        var urlParams = new URLSearchParams(window.location.search);
                        var vn3page = urlParams.get('vn3page') ? urlParams.get('vn3page') : "/";
                        var assets = os === "iOS" || os === "software" ? "assets" : "/assets";
                        _this.config = _this.config ? _this.config : [];
                        var stylePageHerf = "";
                        var scriptPageSrc = "";
                        for (var i = 0; i < _this.config.length; i++) {
                            if (vn3page && vn3page === _this.config[i].url && os === "Android") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                            }
                            else if (vn3page && vn3page === _this.config[i].url && os === "iOS") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                            }
                            else if (window.location.pathname === _this.config[i].url && os === "browser") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                            }
                            else if (vn3page && vn3page === _this.config[i].url && os === "software") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                            }
                            if (document.getElementById("pagestyle")) {
                                var root_1 = document.getElementById("root");
                                if (root_1) {
                                    root_1.innerHTML = "";
                                }
                                (_a = document.getElementById("pagestyle")) === null || _a === void 0 ? void 0 : _a.remove();
                            }
                            if (document.getElementById("pagescript")) {
                                (_b = document.getElementById("pagescript")) === null || _b === void 0 ? void 0 : _b.remove();
                            }
                            var stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute("id", "pagestyle");
                            var scriptPage = document.createElement("script");
                            scriptPage.setAttribute("id", "pagescript");
                            if (stylePageHerf !== "" && scriptPageSrc !== "") {
                                stylePage.setAttribute('href', stylePageHerf);
                                document.head.appendChild(stylePage);
                                scriptPage.setAttribute('src', scriptPageSrc);
                                document.body.appendChild(scriptPage);
                                (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                                (new console_1.default).log("Starting ".concat(os, " : ").concat(_this.config[i].name));
                                break;
                            }
                            if ((i + 1) === _this.config.length) {
                                stylePage.setAttribute('href', "".concat(assets, "/").concat(_this.notFound, "/").concat(_this.notFound, ".bundle.css"));
                                document.head.appendChild(stylePage);
                                scriptPage.setAttribute('src', "".concat(assets, "/").concat(_this.notFound, "/").concat(_this.notFound, ".bundle.js"));
                                document.body.appendChild(scriptPage);
                                (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                                (new console_1.default).log("Starting  ".concat(_this.notFound));
                                break;
                            }
                        }
                    };
                    document.addEventListener("deviceready", function () {
                        startLoad_1();
                        var startHref = window.location.href;
                        setInterval(function () {
                            var checkHref = window.location.href;
                            if (startHref === checkHref) {
                                return false;
                            }
                            else {
                                startHref = checkHref;
                                startLoad_1();
                            }
                        }, 1000);
                    }, false);
                }
                catch (e) {
                    return [2 /*return*/, (new console_1.default).error(e.toString())];
                }
                return [2 /*return*/];
            });
        });
    };
    Vnnative3RouterBase.prototype.supportMoveScreen = function () {
        try {
            var links = document.querySelectorAll("#root a");
            links.forEach(function (link) {
                link.addEventListener("click", function (ev) {
                    var routerLink = link.getAttribute("link");
                    var go = routerLink != null ? routerLink : "";
                    if (go !== "") {
                        (new index_1.default).redirect.go(go, []);
                    }
                });
            });
        }
        catch (e) {
            return (new console_1.default).error(e.toString());
        }
    };
    Vnnative3RouterBase.prototype.renderCurrentPage = function (name, page) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, page.beforeRender()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.render()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.afterRender()];
                    case 3:
                        _a.sent();
                        this.supportMoveScreen();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [2 /*return*/, (new console_1.default).error(e_1.toString())];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Vnnative3RouterBase;
}());
exports["default"] = Vnnative3RouterBase;


/***/ }),

/***/ 62:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vnnative3RouterBase_1 = __webpack_require__(760);
var VnNative3RouterStruct = /** @class */ (function (_super) {
    __extends(VnNative3RouterStruct, _super);
    function VnNative3RouterStruct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VnNative3RouterStruct;
}(Vnnative3RouterBase_1.default));
exports["default"] = VnNative3RouterStruct;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const index_1 = __webpack_require__(570);
const router_1 = __webpack_require__(873);
__webpack_require__(38);
const Router = new router_1.default;
const ModuleConfig = new index_1.default();
ModuleConfig.set(Router.config(), Router.notFound());
ModuleConfig.init();
class VnNativeBootstrap {
}
__webpack_unused_export__ = VnNativeBootstrap;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOYTtBQUNiLDZCQUE2QyxFQUFFLGFBQWEsQ0FBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQyxHQUE2QjtBQUNyRCxpQkFBaUIsbUJBQU8sQ0FBQyxHQUFVO0FBQ25DLG1CQUFPLENBQUMsRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92bi1uYXRpdmUtMy8uL2Fzc2V0cy9zY3NzL2dsb2JhbC5zY3NzP2FiMWIiLCJ3ZWJwYWNrOi8vdm4tbmF0aXZlLTMvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3ZuLW5hdGl2ZS0zLy4vbm9kZV9tb2R1bGVzL3ZubmF0aXZlLTMtb3MvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly92bi1uYXRpdmUtMy8uL25vZGVfbW9kdWxlcy92bm5hdGl2ZTMtY29uc29sZS9kaXN0L2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vdm4tbmF0aXZlLTMvLi9ub2RlX21vZHVsZXMvdm5uYXRpdmUzLWxvY2F0aW9uL2Rpc3QvVm5uYXRpdmUzTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vdm4tbmF0aXZlLTMvLi9ub2RlX21vZHVsZXMvdm5uYXRpdmUzLWxvY2F0aW9uL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdm4tbmF0aXZlLTMvLi9ub2RlX21vZHVsZXMvdm5uYXRpdmUzLWxvY2F0aW9uL2Rpc3QvbGlicy9Wbm5hdGl2ZTNRdWVyeS5qcyIsIndlYnBhY2s6Ly92bi1uYXRpdmUtMy8uL25vZGVfbW9kdWxlcy92bm5hdGl2ZTMtbG9jYXRpb24vZGlzdC9saWJzL1ZubmF0aXZlM1JlZGlyZWN0LmpzIiwid2VicGFjazovL3ZuLW5hdGl2ZS0zLy4vbm9kZV9tb2R1bGVzL3ZubmF0aXZlMy1yb3V0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly92bi1uYXRpdmUtMy8uL25vZGVfbW9kdWxlcy92bm5hdGl2ZTMtcm91dGVyL2Rpc3QvbGlicy9Wbm5hdGl2ZTNSb3V0ZXJCYXNlLmpzIiwid2VicGFjazovL3ZuLW5hdGl2ZS0zLy4vbm9kZV9tb2R1bGVzL3ZubmF0aXZlMy1yb3V0ZXIvZGlzdC9zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vdm4tbmF0aXZlLTMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdm4tbmF0aXZlLTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92bi1uYXRpdmUtMy8uL3NyYy9ib290c3RyYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUm91dGVyQ29uZmlnIHtcclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJJbmRleFBhZ2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2V4YW1wbGVcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRXhhbXBsZVBhZ2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2luZGV4Lmh0bWxcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5kZXhQYWdlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBub3RGb3VuZCgpIHtcclxuICAgICAgICAvLyA0MDQgcGFnZVxyXG4gICAgICAgIHJldHVybiBcIk5vdEZvdW5kUGFnZVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlckNvbmZpZztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgVm5OYXRpdmVPc2luZGV4IHtcclxuICAgIGlzT3MoKSB7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgbGV0IHBsYXRmb3JtcztcclxuICAgICAgICBwbGF0Zm9ybXMgPSB3aW5kb3c7XHJcbiAgICAgICAgZGF0YSA9IHBsYXRmb3Jtcy5kZXZpY2UgJiYgcGxhdGZvcm1zLmRldmljZS5wbGF0Zm9ybSA/IHBsYXRmb3Jtcy5kZXZpY2UucGxhdGZvcm0gOiBcImJyb3dzZXJcIjtcclxuICAgICAgICBpZiAocGxhdGZvcm1zLnZubmF0aXZlb3MpIHtcclxuICAgICAgICAgICAgaWYgKHBsYXRmb3Jtcy52bm5hdGl2ZW9zLmdldE9zTmFtZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gcGxhdGZvcm1zLnZubmF0aXZlb3MuZ2V0T3NOYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVm5OYXRpdmVPc2luZGV4O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVm5OYXRpdmUzQ29uc29sZUNvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWbk5hdGl2ZTNDb25zb2xlQ29yZSgpIHtcclxuICAgIH1cclxuICAgIFZuTmF0aXZlM0NvbnNvbGVDb3JlLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5pbmZvKFwiJWMgXCIuY29uY2F0KG1lc3NhZ2UsIFwiIFwiKSwgJ2JhY2tncm91bmQ6IGdyZWVuOyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfTtcclxuICAgIFZuTmF0aXZlM0NvbnNvbGVDb3JlLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIiVjIFwiLmNvbmNhdChtZXNzYWdlLCBcIiBcIiksICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfTtcclxuICAgIFZuTmF0aXZlM0NvbnNvbGVDb3JlLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZGVidWcoXCIlYyBcIi5jb25jYXQobWVzc2FnZSwgXCIgXCIpLCAnYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfTtcclxuICAgIFZuTmF0aXZlM0NvbnNvbGVDb3JlLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCIlYyBcIi5jb25jYXQobWVzc2FnZSwgXCIgXCIpLCAnYmFja2dyb3VuZDogcmVkOyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWbk5hdGl2ZTNDb25zb2xlQ29yZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVm5OYXRpdmUzQ29uc29sZUNvcmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFZubmF0aXZlM1F1ZXJ5XzEgPSByZXF1aXJlKFwiLi9saWJzL1ZubmF0aXZlM1F1ZXJ5XCIpO1xyXG5jb25zdCBWbm5hdGl2ZTNSZWRpcmVjdF8xID0gcmVxdWlyZShcIi4vbGlicy9Wbm5hdGl2ZTNSZWRpcmVjdFwiKTtcclxuY2xhc3MgVm5uYXRpdmUzTG9jYXRpb25CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBuZXcgVm5uYXRpdmUzUXVlcnlfMS5kZWZhdWx0O1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3QgPSBuZXcgVm5uYXRpdmUzUmVkaXJlY3RfMS5kZWZhdWx0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZubmF0aXZlM0xvY2F0aW9uQmFzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgVm5uYXRpdmUzTG9jYXRpb25fMSA9IHJlcXVpcmUoXCIuL1ZubmF0aXZlM0xvY2F0aW9uXCIpO1xyXG5jbGFzcyBWbm5hdGl2ZTNMb2NhdGlvbiBleHRlbmRzIFZubmF0aXZlM0xvY2F0aW9uXzEuZGVmYXVsdCB7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVm5uYXRpdmUzTG9jYXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFZubmF0aXZlM1F1ZXJ5IHtcclxuICAgIGdldChrZXkpIHtcclxuICAgICAgICBsZXQgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGN1cnJlbnRVcmwuc3BsaXQoJz8nKTtcclxuICAgICAgICBpZiAocXVlcnlTdHJpbmcubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZ0FycmF5ID0gcXVlcnlTdHJpbmdbMV0uc3BsaXQoJyYnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5U3RyaW5nQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmdBcnJheVtpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBpZiAocXVlcnlbMF0gPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA8PSAxID8gXCJcIiA6IFN0cmluZyhxdWVyeVsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVm5uYXRpdmUzUXVlcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwidm5uYXRpdmUtMy1vcy9kaXN0L2luZGV4XCIpO1xyXG5jbGFzcyBWbm5hdGl2ZTNSZWRpcmVjdCB7XHJcbiAgICBnbyh1cmwsIHF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc3QgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgbGV0IG9zO1xyXG4gICAgICAgIG9zID0gKG5ldyBpbmRleF8xLmRlZmF1bHQpLmlzT3MoKTtcclxuICAgICAgICBsZXQgcGxhdGZvcm0gPSB3aW5kb3c7XHJcbiAgICAgICAgaWYgKHBsYXRmb3JtLnZubmF0aXZlb3MpIHtcclxuICAgICAgICAgICAgaWYgKHBsYXRmb3JtLnZubmF0aXZlb3MuZ2V0T3NOYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIG9zID0gcGxhdGZvcm0udm5uYXRpdmVvcy5nZXRPc05hbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVlcnkubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBpZiAob3MgPT09IFwiQW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcuL2luZGV4Lmh0bWw/dm4zcGFnZT0nICsgdXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvcyA9PT0gXCJpT1NcIiB8fCBvcyA9PT0gXCJzb2Z0d2FyZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcuL2luZGV4Lmh0bWw/dm4zcGFnZT0nICsgdXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7cXVlcnlbaV1bJ2tleSddfT0ke3F1ZXJ5W2ldWyd2YWx1ZSddfWA7XHJcbiAgICAgICAgICAgIGlmICgoaSArIDEpID09IHF1ZXJ5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9zID09PSBcIkFuZHJvaWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy4vaW5kZXguaHRtbCcgKyBxdWVyeVN0cmluZyArICcmdm4zcGFnZT0nICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9zID09PSBcImlPU1wiIHx8IG9zID09PSBcInNvZnR3YXJlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcuL2luZGV4Lmh0bWwnICsgcXVlcnlTdHJpbmcgKyAnJnZuM3BhZ2U9JyArIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybCArIHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdvVXJsKHVybCwgcXVlcnkpIHtcclxuICAgICAgICBsZXQgbGluayA9IFwiXCI7XHJcbiAgICAgICAgY29uc3QgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgbGV0IG9zO1xyXG4gICAgICAgIG9zID0gKG5ldyBpbmRleF8xLmRlZmF1bHQpLmlzT3MoKTtcclxuICAgICAgICBsZXQgcGxhdGZvcm0gPSB3aW5kb3c7XHJcbiAgICAgICAgaWYgKHBsYXRmb3JtLnZubmF0aXZlb3MpIHtcclxuICAgICAgICAgICAgaWYgKHBsYXRmb3JtLnZubmF0aXZlb3MuZ2V0T3NOYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIG9zID0gcGxhdGZvcm0udm5uYXRpdmVvcy5nZXRPc05hbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVlcnkubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICBpZiAob3MgPT09IFwiQW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rID0gJy4vaW5kZXguaHRtbD92bjNwYWdlPScgKyB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3MgPT09IFwiaU9TXCIgfHwgb3MgPT09IFwic29mdHdhcmVcIikge1xyXG4gICAgICAgICAgICAgICAgbGluayA9ICcuL2luZGV4Lmh0bWw/dm4zcGFnZT0nICsgdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGluayA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbGluaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtxdWVyeVtpXVsna2V5J119PSR7cXVlcnlbaV1bJ3ZhbHVlJ119YDtcclxuICAgICAgICAgICAgaWYgKChpICsgMSkgPT0gcXVlcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3MgPT09IFwiQW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9ICcuL2luZGV4Lmh0bWwnICsgcXVlcnlTdHJpbmcgKyAnJnZuM3BhZ2U9JyArIHVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9zID09PSBcImlPU1wiIHx8IG9zID09PSBcInNvZnR3YXJlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0gJy4vaW5kZXguaHRtbCcgKyBxdWVyeVN0cmluZyArICcmdm4zcGFnZT0nICsgdXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IHVybCArIHF1ZXJ5U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBWbm5hdGl2ZTNSZWRpcmVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzdHJ1Y3RfMSA9IHJlcXVpcmUoXCIuL3N0cnVjdFwiKTtcclxudmFyIFZuTmF0aXZlM1JvdXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWbk5hdGl2ZTNSb3V0ZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWbk5hdGl2ZTNSb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFZuTmF0aXZlM1JvdXRlcjtcclxufShzdHJ1Y3RfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZuTmF0aXZlM1JvdXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb25zb2xlXzEgPSByZXF1aXJlKFwidm5uYXRpdmUzLWNvbnNvbGUvZGlzdC9jb25zb2xlXCIpO1xyXG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCJ2bm5hdGl2ZTMtbG9jYXRpb24vZGlzdC9pbmRleFwiKTtcclxudmFyIGluZGV4XzIgPSByZXF1aXJlKFwidm5uYXRpdmUtMy1vcy9kaXN0L2luZGV4XCIpO1xyXG52YXIgVm5uYXRpdmUzUm91dGVyQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZubmF0aXZlM1JvdXRlckJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub3RGb3VuZCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBWbm5hdGl2ZTNSb3V0ZXJCYXNlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZGF0YSwgbm90Rm91bmQpIHtcclxuICAgICAgICBpZiAobm90Rm91bmQgPT09IHZvaWQgMCkgeyBub3RGb3VuZCA9IFwiTm90Rm91bmRQYWdlXCI7IH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSBub3RGb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuZXcgY29uc29sZV8xLmRlZmF1bHQpLmVycm9yKGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFZubmF0aXZlM1JvdXRlckJhc2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRMb2FkXzE7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRMb2FkXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbGF0Zm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0gPSB3aW5kb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcyA9IChuZXcgaW5kZXhfMi5kZWZhdWx0KS5pc09zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb290O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZuM3BhZ2UgPSB1cmxQYXJhbXMuZ2V0KCd2bjNwYWdlJykgPyB1cmxQYXJhbXMuZ2V0KCd2bjNwYWdlJykgOiBcIi9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFzc2V0cyA9IG9zID09PSBcImlPU1wiIHx8IG9zID09PSBcInNvZnR3YXJlXCIgPyBcImFzc2V0c1wiIDogXCIvYXNzZXRzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZyA9IF90aGlzLmNvbmZpZyA/IF90aGlzLmNvbmZpZyA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVQYWdlSGVyZiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHRQYWdlU3JjID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bjNwYWdlICYmIHZuM3BhZ2UgPT09IF90aGlzLmNvbmZpZ1tpXS51cmwgJiYgb3MgPT09IFwiQW5kcm9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVQYWdlSGVyZiA9IFwiXCIuY29uY2F0KGFzc2V0cywgXCIvXCIpLmNvbmNhdChfdGhpcy5jb25maWdbaV0ubmFtZSwgXCIvXCIpLmNvbmNhdChfdGhpcy5jb25maWdbaV0ubmFtZSwgXCIuYnVuZGxlLmNzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRQYWdlU3JjID0gXCJcIi5jb25jYXQoYXNzZXRzLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi5idW5kbGUuanNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2bjNwYWdlICYmIHZuM3BhZ2UgPT09IF90aGlzLmNvbmZpZ1tpXS51cmwgJiYgb3MgPT09IFwiaU9TXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVBhZ2VIZXJmID0gXCJcIi5jb25jYXQoYXNzZXRzLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi5idW5kbGUuY3NzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdFBhZ2VTcmMgPSBcIlwiLmNvbmNhdChhc3NldHMsIFwiL1wiKS5jb25jYXQoX3RoaXMuY29uZmlnW2ldLm5hbWUsIFwiL1wiKS5jb25jYXQoX3RoaXMuY29uZmlnW2ldLm5hbWUsIFwiLmJ1bmRsZS5qc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gX3RoaXMuY29uZmlnW2ldLnVybCAmJiBvcyA9PT0gXCJicm93c2VyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVBhZ2VIZXJmID0gXCJcIi5jb25jYXQoYXNzZXRzLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi5idW5kbGUuY3NzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdFBhZ2VTcmMgPSBcIlwiLmNvbmNhdChhc3NldHMsIFwiL1wiKS5jb25jYXQoX3RoaXMuY29uZmlnW2ldLm5hbWUsIFwiL1wiKS5jb25jYXQoX3RoaXMuY29uZmlnW2ldLm5hbWUsIFwiLmJ1bmRsZS5qc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZuM3BhZ2UgJiYgdm4zcGFnZSA9PT0gX3RoaXMuY29uZmlnW2ldLnVybCAmJiBvcyA9PT0gXCJzb2Z0d2FyZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVQYWdlSGVyZiA9IFwiXCIuY29uY2F0KGFzc2V0cywgXCIvXCIpLmNvbmNhdChfdGhpcy5jb25maWdbaV0ubmFtZSwgXCIvXCIpLmNvbmNhdChfdGhpcy5jb25maWdbaV0ubmFtZSwgXCIuYnVuZGxlLmNzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRQYWdlU3JjID0gXCJcIi5jb25jYXQoYXNzZXRzLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi9cIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lLCBcIi5idW5kbGUuanNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc3R5bGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb290XzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdF8xLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXN0eWxlXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc2NyaXB0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc2NyaXB0XCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVBhZ2Uuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFnZXN0eWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0UGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhZ2VzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVQYWdlSGVyZiAhPT0gXCJcIiAmJiBzY3JpcHRQYWdlU3JjICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVQYWdlLnNldEF0dHJpYnV0ZSgnaHJlZicsIHN0eWxlUGFnZUhlcmYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRQYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgc2NyaXB0UGFnZVNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmV3IGNvbnNvbGVfMS5kZWZhdWx0KS5sb2coJ1dlbGNvbWUgdG8gVm4gTmF0aXZlIDMgRnJhbWUgV29yaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZXcgY29uc29sZV8xLmRlZmF1bHQpLmxvZyhcIlN0YXJ0aW5nIFwiLmNvbmNhdChvcywgXCIgOiBcIikuY29uY2F0KF90aGlzLmNvbmZpZ1tpXS5uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGkgKyAxKSA9PT0gX3RoaXMuY29uZmlnLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlUGFnZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiLmNvbmNhdChhc3NldHMsIFwiL1wiKS5jb25jYXQoX3RoaXMubm90Rm91bmQsIFwiL1wiKS5jb25jYXQoX3RoaXMubm90Rm91bmQsIFwiLmJ1bmRsZS5jc3NcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVQYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRQYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgXCJcIi5jb25jYXQoYXNzZXRzLCBcIi9cIikuY29uY2F0KF90aGlzLm5vdEZvdW5kLCBcIi9cIikuY29uY2F0KF90aGlzLm5vdEZvdW5kLCBcIi5idW5kbGUuanNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0UGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5ldyBjb25zb2xlXzEuZGVmYXVsdCkubG9nKCdXZWxjb21lIHRvIFZuIE5hdGl2ZSAzIEZyYW1lIFdvcmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmV3IGNvbnNvbGVfMS5kZWZhdWx0KS5sb2coXCJTdGFydGluZyAgXCIuY29uY2F0KF90aGlzLm5vdEZvdW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9hZF8xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrSHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0SHJlZiA9PT0gY2hlY2tIcmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRIcmVmID0gY2hlY2tIcmVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9hZF8xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChuZXcgY29uc29sZV8xLmRlZmF1bHQpLmVycm9yKGUudG9TdHJpbmcoKSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBWbm5hdGl2ZTNSb3V0ZXJCYXNlLnByb3RvdHlwZS5zdXBwb3J0TW92ZVNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Jvb3QgYVwiKTtcclxuICAgICAgICAgICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdXRlckxpbmsgPSBsaW5rLmdldEF0dHJpYnV0ZShcImxpbmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdvID0gcm91dGVyTGluayAhPSBudWxsID8gcm91dGVyTGluayA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdvICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZXcgaW5kZXhfMS5kZWZhdWx0KS5yZWRpcmVjdC5nbyhnbywgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChuZXcgY29uc29sZV8xLmRlZmF1bHQpLmVycm9yKGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFZubmF0aXZlM1JvdXRlckJhc2UucHJvdG90eXBlLnJlbmRlckN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKG5hbWUsIHBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlXzE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgNCwgLCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHBhZ2UuYmVmb3JlUmVuZGVyKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwYWdlLnJlbmRlcigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcGFnZS5hZnRlclJlbmRlcigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0TW92ZVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChuZXcgY29uc29sZV8xLmRlZmF1bHQpLmVycm9yKGVfMS50b1N0cmluZygpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWbm5hdGl2ZTNSb3V0ZXJCYXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWbm5hdGl2ZTNSb3V0ZXJCYXNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZubmF0aXZlM1JvdXRlckJhc2VfMSA9IHJlcXVpcmUoXCIuL2xpYnMvVm5uYXRpdmUzUm91dGVyQmFzZVwiKTtcclxudmFyIFZuTmF0aXZlM1JvdXRlclN0cnVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWbk5hdGl2ZTNSb3V0ZXJTdHJ1Y3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWbk5hdGl2ZTNSb3V0ZXJTdHJ1Y3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFZuTmF0aXZlM1JvdXRlclN0cnVjdDtcclxufShWbm5hdGl2ZTNSb3V0ZXJCYXNlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWbk5hdGl2ZTNSb3V0ZXJTdHJ1Y3Q7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbmRleF8xID0gcmVxdWlyZShcInZubmF0aXZlMy1yb3V0ZXIvZGlzdC9pbmRleFwiKTtcclxuY29uc3Qgcm91dGVyXzEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XHJcbnJlcXVpcmUoXCIuLi9hc3NldHMvc2Nzcy9nbG9iYWwuc2Nzc1wiKTtcclxuY29uc3QgUm91dGVyID0gbmV3IHJvdXRlcl8xLmRlZmF1bHQ7XHJcbmNvbnN0IE1vZHVsZUNvbmZpZyA9IG5ldyBpbmRleF8xLmRlZmF1bHQoKTtcclxuTW9kdWxlQ29uZmlnLnNldChSb3V0ZXIuY29uZmlnKCksIFJvdXRlci5ub3RGb3VuZCgpKTtcclxuTW9kdWxlQ29uZmlnLmluaXQoKTtcclxuY2xhc3MgVm5OYXRpdmVCb290c3RyYXAge1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZuTmF0aXZlQm9vdHN0cmFwO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=