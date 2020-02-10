function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/character-bar/character-bar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/character-bar/character-bar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCharacterBarCharacterBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"character-bar\">\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<script src=\"~/lib/signalr/signalr.js\"></script>\n\n<button [routerLink]=\"['/']\" id=\"main-menu\">Main Menu</button>\n<canvas id=\"game-canvas\" width=\"1500\" height=\"500\" style=\"border: 1px solid black\"></canvas>\n\n<div id=\"footer\">\n    <div id=\"income\">\n        Increase Income:<br/>\n        ${{ connectedPlayer.incomePrice }}\n    </div>\n    <div style=\"display: inline-block; height: 120px; width: 890px;\">\n        <app-character-bar [side]=\"side\" [team]=\"team\" [id]=\"id\" style=\"display: inline-block;\"></app-character-bar>\n    </div>\n    <div id=\"health\">\n        Increase Castle Health:<br/>\n        ${{ connectedPlayer.healthPrice }}\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/level-select/level-select.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/level-select/level-select.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLevelSelectLevelSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main-view\">\n    <h2>Choose your level!</h2>\n    <div id=\"level-select\">\n        <div class=\"level selected\">1</div>\n        <div class=\"level\">2</div>\n        <div class=\"level\">3</div>\n        <div class=\"level\">4</div>\n        <div class=\"level\">5</div>\n        <div class=\"level\">6</div>\n        <div class=\"level\">7</div>\n        <div class=\"level\">8</div>\n    </div>\n\n    <app-team-select></app-team-select>\n\n    <button [routerLink]=\"['../game/', id, updateTeam(), side]\" id=\"start\">Start Game!</button>\n</div>\n<div id=\"footer\">\n    <button id=\"instructions\">Instructions</button>\n</div>\n\n<!-- Instructions Modal -->\n<div id=\"instruction-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\">&times;</span>\n        <h1 class=\"modal-header\">Instructions:</h1>\n        <p>This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!</p>\n        <br/>\n        <h1 class=\"modal-header\">Singleplayer:</h1>\n        <p>Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!</p>\n        <p>Be careful though! The levels get difficult very quickly!</p>\n        <br/>\n        <h1 class=\"modal-header\">Multiplayer:</h1>\n        <p>Pit your best strategies against your friends in a 2-player battle!</p>\n        <p>Create a new game and you will be assigned a random Game ID!</p>\n        <p>Once you have your ID, your friend will be able to join your game and the battle begins!</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/multiplayer/multiplayer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/multiplayer/multiplayer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMultiplayerMultiplayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main-view\">\n    <h1>Multiplayer!</h1>\n    <app-team-select></app-team-select>\n\n    <button [routerLink]=\"['../game/', newId(), updateTeam(), 1]\" id=\"ng\">New Game!</button>\n\n    <button [routerLink]=\"['../game/', id, updateTeam(), 2]\" id=\"jg\">Join Game!</button>\n    <label for=\"game-id\" id=\"game-id-label\"><b>Game ID:</b></label>\n    <input type=\"number\" min=\"1000\" max=\"9999\" id=\"game-id\" placeholder=\"X-X-X-X\" name=\"game-id\">\n</div>\n<div id=\"footer\">\n    <button id=\"instructions\">Instructions</button>\n</div>\n\n<!-- Instructions Modal -->\n<div id=\"instruction-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\">&times;</span>\n        <h1 class=\"modal-header\">Instructions:</h1>\n        <p>This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!</p>\n        <br/>\n        <h1 class=\"modal-header\">Singleplayer:</h1>\n        <p>Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!</p>\n        <p>Be careful though! The levels get difficult very quickly!</p>\n        <br/>\n        <h1 class=\"modal-header\">Multiplayer:</h1>\n        <p>Pit your best strategies against your friends in a 2-player battle!</p>\n        <p>Create a new game and you will be assigned a random Game ID!</p>\n        <p>Once you have your ID, your friend will be able to join your game and the battle begins!</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/team-select/team-select.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team-select/team-select.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeamSelectTeamSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Choose your team!</h2>\n<div id=\"team-select\">\n    <div class=\"team selected\" id=\"white\"></div>\n    <div class=\"team\" id=\"green\"></div>\n    <div class=\"team\" id=\"blue\"></div>\n    <div class=\"team\" id=\"purple\"></div>\n    <div class=\"team\" id=\"yellow\"></div>\n    <div class=\"team\" id=\"orange\"></div>\n    <div class=\"team\" id=\"red\"></div>\n    <div class=\"team\" id=\"black\"></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main-view\">\n    <div>\n        <h1>The Great Castle Defense Game!</h1>\n    </div>\n    <h2>Choose Your Game Mode:</h2>\n    <button routerLink='levelselect' id=\"sp\">Singleplayer</button>\n    <button routerLink='multiplayer' id=\"mp\">Multiplayer</button>\n</div>\n<div id=\"footer\">\n    <button id=\"instructions\">Instructions</button>\n</div>\n\n<!-- Instructions Modal -->\n<div id=\"instruction-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\">&times;</span>\n        <h1 class=\"modal-header\">Instructions:</h1>\n        <p>This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!</p>\n        <br/>\n        <h1 class=\"modal-header\">Singleplayer:</h1>\n        <p>Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!</p>\n        <p>Be careful though! The levels get difficult very quickly!</p>\n        <br/>\n        <h1 class=\"modal-header\">Multiplayer:</h1>\n        <p>Pit your best strategies against your friends in a 2-player battle!</p>\n        <p>Create a new game and you will be assigned a random Game ID!</p>\n        <p>Once you have your ID, your friend will be able to join your game and the battle begins!</p>\n    </div>\n</div>\n<!--\n<div id=\"login\">\n    <h2>Login: </h2>\n    <div class=\"container\" id=\"test\">\n        <label for=\"uname\"><b>Username</b></label>\n        <input type=\"text\" id=\"username\" placeholder=\"Enter Username\" name=\"uname\" required>\n\n        <label for=\"psw\"><b>Password</b></label>\n        <input type=\"password\" id=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n        <button type=\"submit\" id=\"login-button\">Login</button>\n    </div>\n</div>\n<div id=\"user-info\">\n    \n</div>\n-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./level-select/level-select.component */
    "./src/app/level-select/level-select.component.ts");
    /* harmony import */


    var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./multiplayer/multiplayer.component */
    "./src/app/multiplayer/multiplayer.component.ts");

    var routes = [{
      path: "game/:id/:team/:side",
      component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    }, {
      path: "levelselect",
      component: _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_5__["LevelSelectComponent"]
    }, {
      path: "multiplayer",
      component: _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_6__["MultiplayerComponent"]
    }, {
      path: "game/10000",
      component: _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_6__["MultiplayerComponent"]
    }, {
      path: "",
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }, {
      path: "**",
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_5__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_6__["MultiplayerComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user */
    "./src/app/user.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _userServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./userServices */
    "./src/app/userServices.ts");

    var AppComponent_1;

    var AppComponent = AppComponent_1 = function AppComponent(http) {
      _classCallCheck(this, AppComponent);

      AppComponent_1.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
      AppComponent_1.userServices = new _userServices__WEBPACK_IMPORTED_MODULE_4__["UserServices"](http);
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./character-bar/character-bar.component */
    "./src/app/character-bar/character-bar.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./team-select/team-select.component */
    "./src/app/team-select/team-select.component.ts");
    /* harmony import */


    var _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./level-select/level-select.component */
    "./src/app/level-select/level-select.component.ts");
    /* harmony import */


    var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./multiplayer/multiplayer.component */
    "./src/app/multiplayer/multiplayer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"], _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_6__["CharacterBarComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_8__["TeamSelectComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_9__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_10__["MultiplayerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [HTMLCanvasElement, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/character-bar/character-bar.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/character-bar/character-bar.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCharacterBarCharacterBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#character-bar {\r\n    width: 870px;\r\n    height: 100px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n}\r\n.white {\r\n    width: 868px;\r\n    height: 98px;\r\n    border: 1px solid black;\r\n    background-color: #DDDDDD;\r\n}\r\n.black {\r\n    background-color: black;\r\n}\r\n.green {\r\n    background-color: green;\r\n}\r\n.blue {\r\n    background-color: blue;\r\n}\r\n.purple {\r\n    background-color: purple;\r\n}\r\n.yellow {\r\n    background-color: yellow;\r\n}\r\n.orange {\r\n    background-color: orangered;\r\n}\r\n.red {\r\n    background-color: red;\r\n}\r\n.character {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.character:hover {\r\n    cursor: pointer;\r\n}\r\n.first {\r\n    margin-left: 0px;\r\n}\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n.price {\r\n    z-index: 3;\r\n    margin: 2px;\r\n    position: absolute;\r\n}\r\n.black-unit {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWJhci9jaGFyYWN0ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVyLWJhci9jaGFyYWN0ZXItYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcmFjdGVyLWJhciB7XHJcbiAgICB3aWR0aDogODcwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ud2hpdGUge1xyXG4gICAgd2lkdGg6IDg2OHB4O1xyXG4gICAgaGVpZ2h0OiA5OHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xyXG59XHJcbi5ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4ucHVycGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxufVxyXG4ueWVsbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4ub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG4ucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNoYXJhY3RlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uY2hhcmFjdGVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gICAgei1pbmRleDogMztcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ibGFjay11bml0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/character-bar/character-bar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/character-bar/character-bar.component.ts ***!
    \**********************************************************/

  /*! exports provided: CharacterBarComponent */

  /***/
  function srcAppCharacterBarCharacterBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterBarComponent", function () {
      return CharacterBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game/game.component */
    "./src/app/game/game.component.ts");

    var CharacterBarComponent =
    /*#__PURE__*/
    function () {
      function CharacterBarComponent() {
        _classCallCheck(this, CharacterBarComponent);
      }

      _createClass(CharacterBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          document.getElementById("character-bar").classList.add(this.team);
          this.initBar();
          document.addEventListener("click", function (e) {
            var testForCharacter = e;
            if (testForCharacter.target.parentElement) var target = testForCharacter.target.parentElement;else return;

            if (target.id != "" && target.classList.contains("character")) {
              _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"].gameServices.buy(_this.id, _this.side, target.id);

              return;
            }
          });
        }
      }, {
        key: "initBar",
        value: function initBar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var fullTeam, i, chardata, unknown;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"].characterService.getTeam(this.team);

                  case 2:
                    fullTeam = _context.sent;
                    i = 0;

                  case 4:
                    if (!(i < fullTeam.length)) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 7;
                    return _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"].characterService.getCharacter(this.team, fullTeam[i]);

                  case 7:
                    chardata = _context.sent;
                    document.getElementById("character-bar").innerHTML += chardata.html;

                  case 9:
                    i++;
                    _context.next = 4;
                    break;

                  case 12:
                    i = 0;

                  case 13:
                    if (!(i < 8 - fullTeam.length)) {
                      _context.next = 21;
                      break;
                    }

                    _context.next = 16;
                    return _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"].characterService.getCharacter("white", "unknown");

                  case 16:
                    unknown = _context.sent;
                    document.getElementById("character-bar").innerHTML += unknown.html;

                  case 18:
                    i++;
                    _context.next = 13;
                    break;

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CharacterBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('side')], CharacterBarComponent.prototype, "side", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('team')], CharacterBarComponent.prototype, "team", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('id')], CharacterBarComponent.prototype, "id", void 0);
    CharacterBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-character-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/character-bar/character-bar.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-bar.component.css */
      "./src/app/character-bar/character-bar.component.css")).default]
    })], CharacterBarComponent);
    /***/
  },

  /***/
  "./src/app/game/castle.ts":
  /*!********************************!*\
    !*** ./src/app/game/castle.ts ***!
    \********************************/

  /*! exports provided: Castle */

  /***/
  function srcAppGameCastleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Castle", function () {
      return Castle;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Castle =
    /*#__PURE__*/
    function () {
      function Castle(x, y, team, side) {
        var _this2 = this;

        var health = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
        var maxHealth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 100;
        var dead = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

        _classCallCheck(this, Castle);

        this.damage = 0;

        this.drawDead = function (context) {
          var ctx = context;
          var deadimg = new Image();
          deadimg.src = "../assets/img/castles/dead castle.png";
          var x = _this2.x;
          var y = _this2.y;
          ctx.drawImage(deadimg, x, y);
        };

        this.x = x;
        this.y = y;
        this.team = team;
        this.side = side;
        this.health = health;
        this.maxHealth = maxHealth;
        this.dead = dead;
        this.img = new Image();
        this.img.src = "../assets/img/castles/" + team + " castle.png";
      }

      _createClass(Castle, [{
        key: "draw",
        value: function draw(context) {
          if (this.health <= 0) {
            this.drawDead(context);
            return;
          }

          var ctx = context;
          var x = this.x;
          var y = this.y;
          ctx.drawImage(this.img, x, y);
          var width = 200 * (this.health / this.maxHealth);
          if (width < 0) width = 0;
          if (width > 75) context.fillStyle = "green";else if (width > 30) context.fillStyle = "yellow";else if (width > 10) context.fillStyle = "red";else context.fillStyle = "darkred";
          context.fillRect(this.x, this.y - 10, width, 5);
          var healthText = Math.round(this.health);
          var maxHealthText = Math.round(this.maxHealth);
          ctx.font = "10px serif";
          ctx.fillStyle = "black";
          ctx.fillText(healthText + "/" + maxHealthText, this.x + 85, this.y - 15);
        }
      }], [{
        key: "parseCastle",
        value: function parseCastle(data) {
          return new Castle(data.side == 1 ? 50 : 1250, 250, data.team, data.side, data.health, data.maxHealth, data.dead);
        }
      }]);

      return Castle;
    }();
    /***/

  },

  /***/
  "./src/app/game/characterService.ts":
  /*!******************************************!*\
    !*** ./src/app/game/characterService.ts ***!
    \******************************************/

  /*! exports provided: CharacterService */

  /***/
  function srcAppGameCharacterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterService", function () {
      return CharacterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CharacterService =
    /*#__PURE__*/
    function () {
      function CharacterService(http) {
        _classCallCheck(this, CharacterService);

        this.http = http;
      }

      _createClass(CharacterService, [{
        key: "getCharacter",
        value: function getCharacter(team, name) {
          return this.http.get('https://localhost:44364/api/characters/getcharacter/' + team + '/' + name).toPromise();
        }
      }, {
        key: "getPrice",
        value: function getPrice(team, name) {
          return this.http.get('https://localhost:44364/api/characters/getprice/' + team + '/' + name).toPromise();
        }
      }, {
        key: "getHTML",
        value: function getHTML(team, name) {
          return this.http.get('https://localhost:44364/api/characters/gethtml/' + team + '/' + name).toPromise();
        }
      }, {
        key: "getTeam",
        value: function getTeam(team) {
          return this.http.get('https://localhost:44364/api/characters/getteam/' + team).toPromise();
        }
      }]);

      return CharacterService;
    }();
    /***/

  },

  /***/
  "./src/app/game/game.component.css":
  /*!*****************************************!*\
    !*** ./src/app/game/game.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGameGameComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    display: inline-block;\r\n}\r\n#income { \r\n    float: left;\r\n    width: 306px;\r\n    height: 90px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 20px 0px 0px 20px;\r\n}\r\n#income:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n#health {\r\n    float: right;\r\n    width: 306px;\r\n    height: 90px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 0px 20px 20px 0px;\r\n}\r\n#health:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n#main-menu {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 5;\r\n    left: 676px;\r\n    top: 350px;\r\n\r\n    color: white;\r\n    background-color: #00ee55;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    margin-left: 600;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 2s;\r\n}\r\n#main-menu:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/* Opera < 12.1 */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVOztJQUVWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLDRCQUE0QixFQUFFLG9DQUFvQyxFQUNwQyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtZQUN2QyxvQkFBb0I7QUFDaEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLHNCQUFzQjtBQU10QixpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMnB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jaW5jb21lIHsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMDZweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiMTRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbn1cclxuI2luY29tZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkMzZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNoZWFsdGgge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDMwNnB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYmIxNGM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDBweDtcclxufVxyXG4jaGVhbHRoOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGQzNmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNtYWluLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBsZWZ0OiA2NzZweDtcclxuICAgIHRvcDogMzUwcHg7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZWU1NTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG59XHJcbiNtYWluLW1lbnU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZmY3NztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggPCAxNiAqL1xyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogT3BlcmEgPCAxMi4xICovXHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./unit */
    "./src/app/game/unit.ts");
    /* harmony import */


    var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../player */
    "./src/app/player.ts");
    /* harmony import */


    var _castle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./castle */
    "./src/app/game/castle.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _gameServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gameServices */
    "./src/app/game/gameServices.ts");
    /* harmony import */


    var _characterService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./characterService */
    "./src/app/game/characterService.ts");
    /* harmony import */


    var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @aspnet/signalr */
    "./node_modules/@aspnet/signalr/dist/esm/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var GameComponent_1;

    var GameComponent = GameComponent_1 =
    /*#__PURE__*/
    function () {
      function GameComponent(route, http) {
        var _this3 = this;

        _classCallCheck(this, GameComponent);

        this.route = route;
        this.ended = 0; // Self reference to get around weird lexical scoping in places...

        this.game = this;

        this.ngOnChanges = function () {
          /*this.id = (<any>this.route.paramMap).id;
          this.team = (<any>this.route.paramMap).team;
          this.side = (<any>this.route.paramMap).side;
          if (this.side == 1)
            this.connectedPlayer = this.player1;
          else
            this.connectedPlayer = this.player2;*/

          /*this.route.paramMap.subscribe(map => {
            var mapParams = <any> map;
            this.id = mapParams.params.id;
            this.team = mapParams.params.team;
            this.side = mapParams.params.side;
            if (this.side == 1)
              this.connectedPlayer = this.player1;
            else
              this.connectedPlayer = this.player2;
          });*/
        };

        this.init = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return GameComponent_1.gameServices.init(this.team, this.id);

                  case 2:
                    if (this.id < 1000) this.start();else this.waitForPlayer2();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        this.waitForPlayer2 = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.draw_background(false);
                    if (this.player2.income < 0.01) setTimeout(this.waitForPlayer2, 250);else this.start();

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };

        this.start = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return GameComponent_1.gameServices.play(this.id);

                  case 2:
                    window.requestAnimationFrame(function () {
                      return _this4.draw();
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        };

        this.reset = function () {
          _this3.player1 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          _this3.player2 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          _this3.units = new Array();
          _this3.ended = 0;

          _this3.route.paramMap.subscribe(function (map) {
            var mapParams = map;
            _this3.id = mapParams.params.id;
            _this3.team = mapParams.params.team;
            _this3.side = mapParams.params.side;
            if (_this3.side == 1) _this3.connectedPlayer = _this3.player1;else _this3.connectedPlayer = _this3.player2;
          });

          document.getElementById("main-menu").style.display = "none";
        };

        GameComponent_1.gameServices = new _gameServices__WEBPACK_IMPORTED_MODULE_7__["GameServices"](http);
        GameComponent_1.characterService = new _characterService__WEBPACK_IMPORTED_MODULE_8__["CharacterService"](http);
        this.background = new Image();
        this.background.src = "../../assets/img/background default.png";
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_9__["HubConnectionBuilder"]().withUrl("/gamehub").build();
          connection.start().then(function () {
            console.log("connected!");
            connection.invoke("connectedto", _this5.id);
          });
          this.player1 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          this.player2 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          connection.on("test", function () {
            alert("TEST");
          });
          connection.on("UpdateUnits", function (unitData) {
            _this5.units = _unit__WEBPACK_IMPORTED_MODULE_3__["Unit"].parseUnits(unitData);
            window.requestAnimationFrame(function () {
              return _this5.draw();
            });
          });
          connection.on("UpdatePlayers", function (playerData) {
            _this5.player1.updatePlayer(playerData, 0);

            _this5.player2.updatePlayer(playerData, 1);
          });
          connection.on("EndGame", function (side) {
            _this5.ended = side;
          });
          connection.onclose(function () {
            GameComponent_1.gameServices.end(_this5.id);

            _this5.reset();
          });
          this.canvas = document.getElementById("game-canvas");
          this.context = this.canvas.getContext("2d");
          var menuButton = document.getElementById("main-menu");

          menuButton.onclick = function () {
            GameComponent_1.gameServices.end(_this5.id);

            _this5.reset();
          };

          this.units = new Array();
          this.route.paramMap.subscribe(function (map) {
            var mapParams = map;
            console.log(mapParams);
            _this5.id = mapParams.params.id;
            _this5.team = mapParams.params.team;
            _this5.side = mapParams.params.side;
            console.log(_this5.id, _this5.team, _this5.side);
            if (_this5.side == 1) _this5.connectedPlayer = _this5.player1;else _this5.connectedPlayer = _this5.player2;
          });
          if (this.side == 1) this.init();else GameComponent_1.gameServices.init(this.team, this.id);
        }
      }, {
        key: "draw",
        value: function draw() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var ctx;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    ctx = this.context;
                    this.draw_background();
                    if (typeof this.units != 'undefined') this.units.forEach(function (unit) {
                      unit.draw(ctx);
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "draw_background",
        value: function draw_background() {
          var connected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var ctx = this.context;
          ctx.drawImage(this.background, 0, 0);
          ctx.fillStyle = "black";
          ctx.font = "50px serif";
          ctx.fillText("Money: $" + Math.floor(this.connectedPlayer.money), 10, 45);
          ctx.font = "14px serif";
          ctx.fillText("Income: $" + Math.floor(this.connectedPlayer.income * 600) + "/min", 12, 60);

          if (this.id >= 1000) {
            ctx.font = "14px serif";
            ctx.fillText("Game ID: " + this.id, 1410, 15);
          }

          if (connected) {
            this.player1.castle.draw(ctx);
            this.player2.castle.draw(ctx);
          }

          if (this.ended) document.getElementById("main-menu").style.display = "block";

          if (this.ended != 0 && this.side != this.ended) {
            ctx.fillStyle = "red";
            ctx.font = "300px servif";
            ctx.fillText("DEFEAT!", 100, 300, 1300);
          }

          if (this.ended != 0 && this.side == this.ended) {
            this.context.fillStyle = "black";
            this.context.font = "300px serif";
            this.context.fillText("VICTORY!", 100, 300, 1300);
            if (_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"].user.name != "new_user") _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"].user.win(this.id);
          }
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }];
    };

    GameComponent = GameComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game.component.css */
      "./src/app/game/game.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../character-bar/character-bar.component.css */
      "./src/app/character-bar/character-bar.component.css")).default]
    })], GameComponent);
    /***/
  },

  /***/
  "./src/app/game/gameServices.ts":
  /*!**************************************!*\
    !*** ./src/app/game/gameServices.ts ***!
    \**************************************/

  /*! exports provided: GameServices */

  /***/
  function srcAppGameGameServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameServices", function () {
      return GameServices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GameServices =
    /*#__PURE__*/
    function () {
      function GameServices(http) {
        _classCallCheck(this, GameServices);

        this.http = http;
      }

      _createClass(GameServices, [{
        key: "getUnits",
        value: function getUnits() {
          return this.http.get('https://localhost:44364/api/game/getunits').toPromise();
        }
      }, {
        key: "getPlayers",
        value: function getPlayers() {
          return this.http.get('https://localhost:44364/api/game/getplayers').toPromise();
        }
      }, {
        key: "init",
        value: function init(team, id) {
          return this.http.get('https://localhost:44364/api/game/init/' + team + '/' + id).toPromise();
        }
      }, {
        key: "play",
        value: function play(id) {
          return this.http.get('https://localhost:44364/api/game/play/' + id).toPromise();
        }
      }, {
        key: "end",
        value: function end(id) {
          return this.http.get('https://localhost:44364/api/game/end/' + id).toPromise();
        }
      }, {
        key: "buy",
        value: function buy(id, player, unit) {
          return this.http.get('https://localhost:44364/api/game/buy/' + id + '/' + player + '/' + unit).toPromise();
        }
      }]);

      return GameServices;
    }();
    /***/

  },

  /***/
  "./src/app/game/unit.ts":
  /*!******************************!*\
    !*** ./src/app/game/unit.ts ***!
    \******************************/

  /*! exports provided: Unit */

  /***/
  function srcAppGameUnitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Unit", function () {
      return Unit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Unit =
    /*#__PURE__*/
    function () {
      function Unit(name, side, health, maxHealth, size, x) {
        var y = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 400;

        _classCallCheck(this, Unit);

        this.sprite = new Image();
        this.sprite.src = "../assets/img/units/" + name + side + ".png";
        this.side = side;
        this.health = health;
        this.maxHealth = maxHealth;
        this.size = size;
        this.x = x;
        this.y = y;
      }

      _createClass(Unit, [{
        key: "draw",
        value: function draw(context) {
          context.drawImage(this.sprite, this.x, this.y);
          var currentHealth = this.health / this.maxHealth;
          var width = (this.size + 10) * currentHealth;
          if (width < 0) width = 0;
          if (currentHealth > 0.75) context.fillStyle = "green";else if (currentHealth > 0.30) context.fillStyle = "yellow";else if (currentHealth > 0.10) context.fillStyle = "red";else context.fillStyle = "darkred";
          context.fillRect(this.x - 5, this.y - 10, width, 5);
        }
      }], [{
        key: "parseUnits",
        value: function parseUnits(data) {
          var units;
          units = [];

          for (var i = 0; i < data.length; i++) {
            units.push(new Unit(data[i].name, data[i].side, data[i].health, data[i].maxHealth, data[i].size, data[i].x, data[i].y));
          }

          return units;
        }
      }]);

      return Unit;
    }();
    /***/

  },

  /***/
  "./src/app/level-select/level-select.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/level-select/level-select.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLevelSelectLevelSelectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\r\n    text-align: center;\r\n    margin: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\nbutton {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n.level {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n    margin: 10px;\r\n    background-color: white;\r\n    text-align: center;\r\n    font-size: 80px;\r\n}\r\n.selected {\r\n    margin: 0px;\r\n    border: 10px solid lightgreen;\r\n}\r\n#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    border: 1px solid black;\r\n    background-image: url('background default.png');\r\n}\r\n/* add back button? (angular being difficult :/ )\r\n#back {\r\n    text-align: left;\r\n    display: inline-block;\r\n    color: gray;\r\n    opacity: 0.5;\r\n}\r\n#back:hover {\r\n    color: lightgray;\r\n    opacity: 0.75;\r\n}\r\n*/\r\n#start {\r\n    background-color: #00ee55;\r\n    margin-left: 671px;\r\n    margin-right: 50px;\r\n}\r\n#start:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n#level-select {\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    margin-left: 270px;\r\n    padding: 10px;\r\n}\r\n#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n}\r\n#instructions {\r\n    background-color: #d38822;\r\n    margin-left: 674px;\r\n}\r\n#instructions:hover {\r\n    background-color: #f5aa44;\r\n}\r\n/* Modal Styling... */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    margin: 9px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV2ZWwtc2VsZWN0L2xldmVsLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtDQUFnRTtBQUNwRTtBQUNBOzs7Ozs7Ozs7OztDQVdDO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxXQUFXO0lBQ1gsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7QUFFRSxrQkFBa0I7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGV2ZWwtc2VsZWN0L2xldmVsLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5sZXZlbCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbiNtYWluLXZpZXcge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kIGRlZmF1bHQucG5nJyk7XHJcbn1cclxuLyogYWRkIGJhY2sgYnV0dG9uPyAoYW5ndWxhciBiZWluZyBkaWZmaWN1bHQgOi8gKVxyXG4jYmFjayB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuI2JhY2s6aG92ZXIge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbn1cclxuKi9cclxuI3N0YXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGVlNTU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjcxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuI3N0YXJ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmZmNzc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xldmVsLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxNTAycHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTEyYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiNpbnN0cnVjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzODgyMjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NzRweDtcclxufVxyXG4jaW5zdHJ1Y3Rpb25zOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWFhNDQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxpbmcuLi4gKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDU7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBtYXJnaW46IDlweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/level-select/level-select.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/level-select/level-select.component.ts ***!
    \********************************************************/

  /*! exports provided: LevelSelectComponent */

  /***/
  function srcAppLevelSelectLevelSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LevelSelectComponent", function () {
      return LevelSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LevelSelectComponent =
    /*#__PURE__*/
    function () {
      function LevelSelectComponent() {
        _classCallCheck(this, LevelSelectComponent);

        this.team = "white";
        this.id = 1;
        this.side = 1;
      }

      _createClass(LevelSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          var levels = document.getElementsByClassName("level");

          for (var i = 0; i < levels.length; i++) {
            levels[i].addEventListener("click", function (e) {
              var level = e.target;
              _this6.id = Number(level.innerText);

              for (var i = 0; i < levels.length; i++) {
                levels[i].classList.remove("selected");
              }

              level.classList.add("selected");
            });
          }

          var modal = document.getElementById("instruction-modal");
          var open = document.getElementById("instructions");
          var close = document.getElementsByClassName("close")[0];

          open.onclick = function () {
            modal.style.display = "block";
          };

          close.onclick = function () {
            modal.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
        }
      }, {
        key: "updateTeam",
        value: function updateTeam() {
          this.team = document.getElementsByClassName("selected")[1].id;
          return this.team;
        }
      }]);

      return LevelSelectComponent;
    }();

    LevelSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-level-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./level-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/level-select/level-select.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./level-select.component.css */
      "./src/app/level-select/level-select.component.css")).default]
    })], LevelSelectComponent);
    /***/
  },

  /***/
  "./src/app/multiplayer/multiplayer.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/multiplayer/multiplayer.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMultiplayerMultiplayerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\ninput {\r\n    color: #666666;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    margin-left: 10px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\nlabel {\r\n    color: white;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n    margin-left: 30px;\r\n}\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    border: 1px solid black;\r\n    background-image: url('background default.png');\r\n}\r\n#ng {\r\n    margin-left: 360px;\r\n    background-color: #0066ff;\r\n}\r\n#ng:hover {\r\n    background-color: #2288ff;\r\n}\r\n#jg {\r\n    background-color: #ff2222;\r\n}\r\n#jg:hover {\r\n    background-color: #ff6622;\r\n}\r\n#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n}\r\n#instructions {\r\n    background-color: #d38822;\r\n    margin-left: 674px;\r\n}\r\n#instructions:hover {\r\n    background-color: #f5aa44;\r\n}\r\n/* Modal Styling... */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    margin: 9px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtDQUFnRTtBQUNwRTtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYSxFQUFFLGVBQWU7SUFDOUIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsZ0NBQWdDO0FBQ3BDO0FBRUUsa0JBQWtCO0FBQ3BCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7TUFDTSxlQUFlO01BQ2YsZUFBZTtBQUNyQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL211bHRpcGxheWVyL211bHRpcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmlucHV0IHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuI21haW4tdmlldyB7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQgZGVmYXVsdC5wbmcnKTtcclxufVxyXG4jbmcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcclxufVxyXG4jbmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyODhmZjtcclxufVxyXG4jamcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcclxufVxyXG4jamc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYyMjtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxNTAycHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTEyYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiNpbnN0cnVjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzODgyMjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NzRweDtcclxufVxyXG4jaW5zdHJ1Y3Rpb25zOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWFhNDQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxpbmcuLi4gKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDU7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBtYXJnaW46IDlweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/multiplayer/multiplayer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/multiplayer/multiplayer.component.ts ***!
    \******************************************************/

  /*! exports provided: MultiplayerComponent */

  /***/
  function srcAppMultiplayerMultiplayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiplayerComponent", function () {
      return MultiplayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MultiplayerComponent =
    /*#__PURE__*/
    function () {
      function MultiplayerComponent() {
        var _this7 = this;

        _classCallCheck(this, MultiplayerComponent);

        this.team = "white";
        this.id = 1000;
        this.idIsNew = false;

        this.checkId = function () {
          var input = document.getElementById("game-id").value;

          if (input >= 1000 && input < 10000) {
            console.log(input);
            _this7.id = input;
            _this7.idIsNew = false;
          } else {
            _this7.id = 10000;
            _this7.idIsNew = false;
          }
        };
      }

      _createClass(MultiplayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          document.getElementById("game-id").onchange = function () {
            _this8.checkId();
          };

          var modal = document.getElementById("instruction-modal");
          var open = document.getElementById("instructions");
          var close = document.getElementsByClassName("close")[0];

          open.onclick = function () {
            modal.style.display = "block";
          };

          close.onclick = function () {
            modal.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
        }
      }, {
        key: "updateTeam",
        value: function updateTeam() {
          this.team = document.getElementsByClassName("selected")[0].id;
          return this.team;
        }
      }, {
        key: "newId",
        value: function newId() {
          if (this.id == 1000) this.id = Math.floor(Math.random() * 9000 + 1000);
          return this.id;
        }
      }]);

      return MultiplayerComponent;
    }();

    MultiplayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multiplayer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multiplayer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/multiplayer/multiplayer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multiplayer.component.css */
      "./src/app/multiplayer/multiplayer.component.css")).default]
    })], MultiplayerComponent);
    /***/
  },

  /***/
  "./src/app/player.ts":
  /*!***************************!*\
    !*** ./src/app/player.ts ***!
    \***************************/

  /*! exports provided: Player */

  /***/
  function srcAppPlayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _game_castle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./game/castle */
    "./src/app/game/castle.ts");

    var Player =
    /*#__PURE__*/
    function () {
      function Player(money, income, incomePrice, healthPrice, side, castle) {
        _classCallCheck(this, Player);

        this.money = money;
        this.income = income;
        this.incomePrice = incomePrice;
        this.healthPrice = healthPrice;
        this.side = side;
        this.castle = castle;
      }

      _createClass(Player, [{
        key: "updatePlayer",
        value: function updatePlayer(data, id) {
          if (typeof data[id] == 'undefined') return;
          this.money = data[id].money;
          this.income = data[id].income;
          this.incomePrice = data[id].incomePrice;
          this.healthPrice = data[id].healthPrice;
          this.side = data[id].side;
          this.castle = _game_castle__WEBPACK_IMPORTED_MODULE_1__["Castle"].parseCastle(data[id].castle);
        }
      }], [{
        key: "parsePlayer",
        value: function parsePlayer(data, id) {
          return new Player(data[id].money, data[id].income, data[id].incomePrice, data[id].healthPrice, data[id].side, _game_castle__WEBPACK_IMPORTED_MODULE_1__["Castle"].parseCastle(data[id].castle));
        }
      }]);

      return Player;
    }();
    /***/

  },

  /***/
  "./src/app/team-select/team-select.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/team-select/team-select.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeamSelectTeamSelectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\r\n    text-align: center;\r\n    margin: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\n#team-select {\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    padding: 10px;\r\n    margin-left: 270px;\r\n}\r\n.team {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n    margin: 10px;\r\n}\r\n.selected {\r\n    margin: 0px;\r\n    border: 10px solid lightgreen;\r\n}\r\n#white {\r\n    width: 96px;\r\n    height: 96px;\r\n    background-color: white;\r\n}\r\n#black {\r\n    background-color: black;\r\n}\r\n#green {\r\n    background-color: green;\r\n}\r\n#blue {\r\n    background-color: blue;\r\n}\r\n#purple {\r\n    background-color: purple;\r\n}\r\n#yellow {\r\n    background-color: yellow;\r\n}\r\n#orange {\r\n    background-color: orangered;\r\n}\r\n#red {\r\n    background-color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1zZWxlY3QvdGVhbS1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC90ZWFtLXNlbGVjdC90ZWFtLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiN0ZWFtLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNzBweDtcclxufVxyXG4udGVhbSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgbGlnaHRncmVlbjtcclxufVxyXG5cclxuI3doaXRlIHtcclxuICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuI2JsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbiNncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4jYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbiNwdXJwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG59XHJcbiN5ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbiNvcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbiNyZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/team-select/team-select.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/team-select/team-select.component.ts ***!
    \******************************************************/

  /*! exports provided: TeamSelectComponent */

  /***/
  function srcAppTeamSelectTeamSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamSelectComponent", function () {
      return TeamSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TeamSelectComponent =
    /*#__PURE__*/
    function () {
      function TeamSelectComponent() {
        _classCallCheck(this, TeamSelectComponent);

        this.team = "white";
      }

      _createClass(TeamSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var teams = document.getElementsByClassName("team");

          for (var i = 0; i < teams.length; i++) {
            teams[i].addEventListener("click", function (e) {
              var team = e.target;

              for (var i = 0; i < teams.length; i++) {
                teams[i].classList.remove("selected");
              }

              team.classList.add("selected");
            });
          }
        }
      }]);

      return TeamSelectComponent;
    }();

    TeamSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/team-select/team-select.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team-select.component.css */
      "./src/app/team-select/team-select.component.css")).default]
    })], TeamSelectComponent);
    /***/
  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var User =
    /*#__PURE__*/
    function () {
      function User(credits, name, unlocks, levelWins) {
        _classCallCheck(this, User);

        this.credits = credits || 0;
        this.name = name || "new_user";
        this.unlocks = unlocks || ["doggo", "froggo", "fishy", "blobbo", "ducko", "derpyberd"];
        this.levelWins = levelWins || [];
        if (this.levelWins.length < 1) for (var i = 0; i < 8; i++) {
          this.levelWins.push(false);
        }
      }

      _createClass(User, [{
        key: "win",
        value: function win(id) {
          _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].userServices.Win(this.name, id);
        }
      }], [{
        key: "parseUser",
        value: function parseUser(data) {
          return new User(data.credits, data.username, data.unlocks, data.levelWins);
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/userServices.ts":
  /*!*********************************!*\
    !*** ./src/app/userServices.ts ***!
    \*********************************/

  /*! exports provided: UserServices */

  /***/
  function srcAppUserServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserServices", function () {
      return UserServices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserServices =
    /*#__PURE__*/
    function () {
      function UserServices(http) {
        _classCallCheck(this, UserServices);

        this.http = http;
      }

      _createClass(UserServices, [{
        key: "Login",
        value: function Login(username, password) {
          return this.http.get('https://localhost:44364/api/user/login/' + username + '/' + password).toPromise();
        }
      }, {
        key: "Win",
        value: function Win(username, id) {
          if (id < 1000) return this.http.get('https://localhost:44364/api/user/win/' + username + '/' + id).toPromise();
          return this.http.get('https://localhost:44364/api/user/win/' + username + '/1000').toPromise();
        }
      }]);

      return UserServices;
    }();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.css":
  /*!***********************************************!*\
    !*** ./src/app/welcome/welcome.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    border: 1px solid black;\r\n    background-image: url('background default.png');\r\n\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 2s;\r\n}\r\n\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\n\r\nbutton {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#sp {\r\n    background-color: #00ee55;\r\n    margin-left: 547px;\r\n    margin-right: 50px;\r\n}\r\n\r\n#sp:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n\r\n#mp {\r\n    background-color: #0066ff;\r\n}\r\n\r\n#mp:hover {\r\n    background-color: #2288ff;\r\n    cursor: pointer;\r\n}\r\n\r\n#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 2s;\r\n}\r\n\r\n#instructions {\r\n    background-color: #d38822;\r\n    margin-left: 674px;\r\n}\r\n\r\n#instructions:hover {\r\n    background-color: #f5aa44;\r\n}\r\n\r\n/* Modal Styling... */\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    margin: 9px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwrQ0FBZ0U7O0lBRWhFLDRCQUE0QixFQUFFLG9DQUFvQyxFQUNwQyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtZQUN2QyxvQkFBb0I7QUFDaEM7O0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxpQkFBaUI7O0FBTWpCLG9DQUFvQzs7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxzQkFBc0I7O0FBTXRCLGlCQUFpQjs7QUFNakI7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxxQkFBcUI7O0lBRXJCLDRCQUE0QixFQUFFLG9DQUFvQyxFQUNwQyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtZQUN2QyxvQkFBb0I7QUFDaEM7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsaUJBQWlCLEVBQUUsd0JBQXdCO0lBQzNDLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGdDQUFnQztBQUNwQzs7QUFFRSxrQkFBa0I7O0FBQ3BCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO01BQ00sZUFBZTtNQUNmLGVBQWU7QUFDckI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLXZpZXcge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kIGRlZmF1bHQucG5nJyk7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogRmlyZWZveCA8IDE2ICovXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBPcGVyYSA8IDEyLjEgKi9cclxuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4jc3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZWU1NTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4jc3A6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZmY3NztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcclxufVxyXG4jbXA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyODhmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDE1MDJweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5MTJjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG59XHJcbiNpbnN0cnVjdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzODgyMjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NzRweDtcclxufVxyXG4jaW5zdHJ1Y3Rpb25zOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWFhNDQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxpbmcuLi4gKi9cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDU7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBtYXJnaW46IDlweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);

        this.loggedIn = false;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var modal = document.getElementById("instruction-modal");
          var open = document.getElementById("instructions");
          var close = document.getElementsByClassName("close")[0];

          open.onclick = function () {
            modal.style.display = "block";
          };

          close.onclick = function () {
            modal.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }; // LOGIN LOGIC VVV

          /*document.getElementById("login-button").addEventListener("click", async () => {
            let username = (<any>document.getElementById("username")).value;
            let password = (<any>document.getElementById("password")).value;
                  let tempData = await AppComponent.userServices.Login(username, password);
            AppComponent.user = User.parseUser(tempData);
                  if (AppComponent.user.name != "new_user") {
              this.loggedIn = true;
              document.getElementById("login").innerHTML = "";
              document.getElementById("user-info").innerHTML = "Logged in as: " + AppComponent.user.name;
            }
          });*/

        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/welcome/welcome.component.css")).default]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\WebApi\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map