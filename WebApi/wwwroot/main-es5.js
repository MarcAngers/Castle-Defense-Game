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


    __webpack_exports__["default"] = "<div id=\"view-container\">\r\n    <router-outlet></router-outlet>\r\n</div>";
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


    __webpack_exports__["default"] = "<div *ngIf=\"side<3; else spectate\">\r\n    <div id=\"income\">\r\n        Increase Income:<br/>\r\n        ${{ incomePrice }}\r\n    </div>\r\n    <div id=\"character-bar\" style=\"display: inline-block;\">\r\n        <!-- Dynamic Character icons go here -->\r\n        <div class=\"character first\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 316px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 426px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 536px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 646px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 756px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 866px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 976px;\"></div>\r\n        <div class=\"character\"></div>\r\n        <div class=\"cooldown\" style=\"top: 10px; left: 1086px;\"></div>\r\n    </div>\r\n    <div id=\"health\">\r\n        Increase Castle Health:<br/>\r\n        ${{ healthPrice }}\r\n    </div>\r\n</div>\r\n<ng-template #spectate>\r\n    <div id=\"spectate\">\r\n        Spectating Game\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/character-info/character-info.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/character-info/character-info.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCharacterInfoCharacterInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main-view\">\r\n    <div>\r\n        <h1>{{ character.name }}</h1>\r\n    </div>\r\n    <div class=\"info-container\">\r\n        <div class=\"image\" style=\"float: left; margin: 0px; width: 200px;\">\r\n            <img *ngIf=\"name != corn; else showIcon\" src=\"../../assets/img/units/{{name}}1.png\">\r\n            <ng-template #showIcon>\r\n                <img src=\"../../assets/img/units/{{name}} icon.png\">\r\n            </ng-template>\r\n        </div>\r\n        <div class=\"info\">\r\n            <div id=\"info-headers\">\r\n                Name:<br/>\r\n                Team:<br/>\r\n                Damage:<br/>\r\n                Damage Type:<br/>\r\n                Health:<br/>\r\n                Speed:<br/>\r\n                Description:<br/>\r\n            </div>\r\n            <div id=\"info-values\">\r\n                {{character.name}}<br/>\r\n                {{character.team}}<br/>\r\n                {{character.damage}}<br/>\r\n                {{character.type}} <div id=\"damage-type\"></div><br/>\r\n                {{character.health}}<br/>\r\n                {{character.speed}}<br/>\r\n                {{character.description}}<br/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"footer\">\r\n    <div id=\"footer-content\">\r\n        <a class=\"image-link\" [routerLink]=\"['/characterinfo/', team, prev]\">\r\n            <img id=\"prev-info\" src=\"../../assets/img/icons/{{prev}} icon.png\">\r\n        </a>\r\n        <button id=\"back\" [routerLink]=\"['/teaminfo']\">Back to Team View</button>\r\n        <a class=\"image-link\" [routerLink]=\"['/characterinfo/', team, next]\">\r\n            <img id=\"next-info\" src=\"../../assets/img/icons/{{next}} icon.png\">\r\n        </a>\r\n    </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<script src=\"~/lib/signalr/signalr.js\"></script>\n\n<canvas id=\"game-canvas\" width=\"1500\" height=\"500\"></canvas>\n\n<app-character-bar [side]=\"side\" [team]=\"team\" [id]=\"id\" id=\"footer\"></app-character-bar>\n\n<!-- Endgame Modal -->\n<div id=\"endgame-modal\" class=\"modal\">\n    <div class=\"modal-content\" id=\"endgame-modal-content\">\n        <div id=\"endgame-header\">\n            <h1>{{ gameResult }}</h1>\n        </div>\n        <div id=\"endgame-stats\">\n            <div id=\"player1-stats\">\n                <h2>Player 1:</h2>\n                <table>\n                    <tr>\n                        <td>Total Income:</td>\n                        <td>{{ player1Stats.TotalIncome.Item2 }}</td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Units Bought:</td>\n                        <td>{{ player1Stats.UnitsBought.Item2 }}</td>\n                        <td></td>\n                    </tr>\n                    <tr class=\"contains-icon\">\n                        <td>Favorite Unit:</td>\n                        <td>{{ player1Stats.FavoriteUnit.Item2 }}</td>\n                        <td>\n                            <img src=\"{{player1FavoriteUnitIcon}}\"/>\n                        </td>\n                    </tr>\n                    <tr class=\"contains-icon\">\n                        <td>Most Damage:</td>\n                        <td>{{ player1Stats.MostDamage.Item2 }}</td>\n                        <td>\n                            <img src=\"{{player1MostDamageIcon}}\"/>\n                        </td>\n                    </tr>\n                    <tr class=\"contains-icon\">\n                        <td>Most Castle Damage:</td>\n                        <td>{{ player1Stats.MostCastleDamage.Item2 }}</td>\n                        <td>\n                            <img src=\"{{player1MostCastleDamageIcon}}\"/>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div id=\"player2-stats\">\n                <h2>Player 2:</h2>\n                <table>\n                    <tr>\n                        <td>Total Income:</td>\n                        <td>{{ player2Stats.TotalIncome.Item2 }}</td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Units Bought:</td>\n                        <td>{{ player2Stats.UnitsBought.Item2 }}</td>\n                        <td></td>\n                    </tr>\n                    <tr class=\"contains-icon\">\n                        <td>Favorite Unit:</td>\n                        <td>{{ player2Stats.FavoriteUnit.Item2 }}</td>\n                        <td>\n                            <img src=\"{{player2FavoriteUnitIcon}}\"/>\n                        </td>\n                    </tr>\n                    <tr class=\"contains-icon\">\n                        <td>Most Damage:</td>\n                        <td>{{ player2Stats.MostDamage.Item2 }}</td>\n                        <td>\n                            <img src=\"{{player2MostDamageIcon}}\"/>\n                        </td>\n                    </tr>\n                    <tr class=\"contains-icon\">\n                        <td>Most Castle Damage:</td>\n                        <td>{{ player2Stats.MostCastleDamage.Item2 }}</td>\n                        <td>\n                            <img src=\"{{player2MostCastleDamageIcon}}\"/>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n        <div id=\"endgame-button\">\n            <button [routerLink]=\"['/']\" id=\"main-menu\">Main Menu</button>\n        </div>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<canvas id=\"background-canvas\" width=\"1500\" height=\"500\"></canvas>\n<div id=\"main-view\">\n    <h2>Choose your level!</h2>\n    <div id=\"level-select\">\n        <div class=\"level selected\">1</div>\n        <div class=\"level\">2</div>\n        <div class=\"level\">3</div>\n        <div class=\"level\">4</div>\n        <div class=\"level\">5</div>\n        <div class=\"level\">6</div>\n        <div class=\"level\">7</div>\n        <div class=\"level\">8</div>\n    </div>\n\n    <app-team-select></app-team-select>\n\n    <button (click)=\"checkGame()\" id=\"start\">Start Game!</button>\n</div>\n<div id=\"footer\">\n    <div id=\"footer-button-container\">\n        <button id=\"back\" [routerLink]=\"['']\">Back to Main Menu</button>\n        <button id=\"instructions\">Instructions</button>\n    </div>\n</div>\n\n<!-- Instructions Modal -->\n<div id=\"instruction-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\">&times;</span>\n        <h1 class=\"modal-header\">Instructions:</h1>\n        <p>This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!</p>\n        <br/>\n        <h1 class=\"modal-header\">Singleplayer:</h1>\n        <p>Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!</p>\n        <p>Be careful though! The levels get difficult very quickly!</p>\n        <br/>\n        <h1 class=\"modal-header\">Multiplayer:</h1>\n        <p>Pit your best strategies against your friends in a 2-player battle!</p>\n        <p>Create a new game and you will be assigned a random Game ID!</p>\n        <p>Once you have your ID, your friend will be able to join your game and the battle begins!</p>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<canvas id=\"background-canvas\" width=\"1500\" height=\"500\"></canvas>\n<div id=\"main-view\">\n    <h1>Multiplayer!</h1>\n    <app-team-select></app-team-select>\n\n    <button (click)=\"newGame()\" id=\"ng\">New Game!</button>\n\n    <button (click)=\"joinGame()\" class=\"unverified\" id=\"jg\">Join Game!</button>\n    <label for=\"game-id\" id=\"game-id-label\"><b>Game ID:</b></label>\n    <input type=\"number\" min=\"1000\" max=\"9999\" id=\"game-id\" placeholder=\"----\" name=\"game-id\">\n    <button id=\"game-browser\">Game Browser</button>\n</div>\n<div id=\"footer\">\n    <div id=\"footer-button-container\">\n        <button id=\"back\" [routerLink]=\"['']\">Back to Main Menu</button>\n        <button id=\"instructions\">Instructions</button>\n    </div>\n</div>\n\n<!-- Instructions Modal -->\n<div id=\"instruction-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\">&times;</span>\n        <h1 class=\"modal-header\">Instructions:</h1>\n        <p>This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!</p>\n        <br/>\n        <h1 class=\"modal-header\">Singleplayer:</h1>\n        <p>Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!</p>\n        <p>Be careful though! The levels get difficult very quickly!</p>\n        <br/>\n        <h1 class=\"modal-header\">Multiplayer:</h1>\n        <p>Pit your best strategies against your friends in a 2-player battle!</p>\n        <p>Create a new game and you will be assigned a random Game ID!</p>\n        <p>Once you have your ID, your friend will be able to join your game and the battle begins!</p>\n    </div>\n</div>\n\n<!-- Browser Modal -->\n<div id=\"game-browser-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\">&times;</span>\n        <h1 class=\"modal-header\">Game Browser</h1>\n        <div *ngIf=\"gameIDs.length == 0; else showGameList\">\n            <p>No games are currently in session :/</p>\n        </div>\n        <ng-template #showGameList>\n            <div *ngFor=\"let id of gameIDs\" (click)=\"setId(id)\" class=\"game-browser-item\">\n                <span class=\"game-id\">Game: {{id}}</span>\n                <span *ngIf=\"allIDsandStates[id] == 1\" class=\"game-state\">Open</span>\n                <span *ngIf=\"allIDsandStates[id] == 2\" class=\"game-state\">Full</span>\n            </div>\n        </ng-template>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/team-info/team-info.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team-info/team-info.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeamInfoTeamInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"team-info-view\">\n    <h2>Choose a Character to see details on them!</h2>\n    <div id=\"character-select-bar\">\n        <div *ngFor=\"let unit of currentUnits\" style=\"display: inline-block; margin: 10px;\">\n            <a [routerLink]=\"['../characterinfo', currentTeam, unit]\">\n                <img src=\"../../assets/img/icons/{{unit}} icon.png\">\n            </a>\n        </div>\n    </div>\n    <app-team-select></app-team-select>\n</div>\n<div id=\"footer\">\n    <div id=\"footer-button-container\">\n        <button id=\"back\" [routerLink]=\"['']\">Back to Main Menu</button>\n    </div>\n</div>";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/typeinfo/typeinfo.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typeinfo/typeinfo.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTypeinfoTypeinfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"type-info-view\">\r\n\r\n</div>\r\n<div id=\"footer\">\r\n    <div id=\"footer-button-container\">\r\n        <button id=\"back\" [routerLink]=\"['']\">Back to Main Menu</button>\r\n    </div>\r\n</div>\r\n\r\n<!-- Instructions Modal -->\r\n<div id=\"instruction-modal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span class=\"close\">&times;</span>\r\n        <h1 class=\"modal-header\">Type Effects:</h1>\r\n        <p>In the game each unit is a member of a colored team, but will attack with a specific type of attack.</p>\r\n        <p>A unit does not necessarily attack with the same type of damage as its team!</p>\r\n        <p>Different teams are strong or weak against attacks of different types, so knowing these effects can be a great asset in battle!</p>\r\n        <p>Some Attack types do bonus damage to towers as well, while other teams will gain a bonus to the HP of their castle at the beginning of the game!</p>\r\n        <p>This page lists all the type effects in the game.</p>\r\n        <h1 class=\"modal-header\">Legend:</h1>\r\n        <p>Colors on the left side of an arrow are attacking colors</p>\r\n        <p>Colors on the right side of an arrow are defending colors</p>\r\n        <p>A normal arrow denotes a type ADVANTAGE (enhanced damage)</p>\r\n        <p>An X'd arrow denotes a type DISADVANTAGE (mitigated damage)</p>\r\n    </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<canvas id=\"background-canvas\" width=\"1500\" height=\"500\"></canvas>\r\n<div id=\"main-view\">\r\n    <h1>The Great Castle Defense Game!</h1>\r\n    <h2>Choose Your Game Mode:</h2>\r\n    <div id=\"main-button-container\">\r\n        <button routerLink='levelselect' id=\"sp\">Singleplayer</button>\r\n        <button routerLink='multiplayer' id=\"mp\">Multiplayer</button>\r\n    </div>\r\n</div>\r\n<div id=\"footer\">\r\n    <div id=\"footer-button-container\">\r\n        <button id=\"instructions\">Instructions</button>\r\n        <button routerLink='teaminfo' id=\"character-stats\">Character Stats</button>\r\n        <button routerLink='typeinfo' id=\"type-effects\">Damage Type Info</button>\r\n    </div>\r\n</div>\r\n\r\n<!-- Instructions Modal -->\r\n<div id=\"instruction-modal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span class=\"close\">&times;</span>\r\n        <h1 class=\"modal-header\">Instructions:</h1>\r\n        <p>This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!</p>\r\n        <br/>\r\n        <p>Different units attack with different types of damage. Damage may be increased or decreased based on the team of the recipient of the damage!</p>\r\n        <br/>\r\n        <h1 class=\"modal-header\">Singleplayer:</h1>\r\n        <p>Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!</p>\r\n        <p>Be careful though! The levels get difficult very quickly!</p>\r\n        <br/>\r\n        <h1 class=\"modal-header\">Multiplayer:</h1>\r\n        <p>Pit your best strategies against your friends in a 2-player battle!</p>\r\n        <p>Create a new game and you will be assigned a random Game ID!</p>\r\n        <p>Once you have your ID, your friend will be able to join your game by typing in the ID, or selecting it from the game browser!</p>\r\n        <p>When the game is filled the battle begins!</p>\r\n    </div>\r\n</div>\r\n<!--\r\n<div id=\"login\">\r\n    <h2>Login: </h2>\r\n    <div class=\"container\" id=\"test\">\r\n        <label for=\"uname\"><b>Username</b></label>\r\n        <input type=\"text\" id=\"username\" placeholder=\"Enter Username\" name=\"uname\" required>\r\n\r\n        <label for=\"psw\"><b>Password</b></label>\r\n        <input type=\"password\" id=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n        <button type=\"submit\" id=\"login-button\">Login</button>\r\n    </div>\r\n</div>\r\n<div id=\"user-info\">\r\n    \r\n</div>\r\n-->";
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
    /* harmony import */


    var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./team-info/team-info.component */
    "./src/app/team-info/team-info.component.ts");
    /* harmony import */


    var _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./typeinfo/typeinfo.component */
    "./src/app/typeinfo/typeinfo.component.ts");
    /* harmony import */


    var _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./character-info/character-info.component */
    "./src/app/character-info/character-info.component.ts");

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
      path: "teaminfo",
      component: _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_7__["TeamInfoComponent"]
    }, {
      path: "typeinfo",
      component: _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_8__["TypeinfoComponent"]
    }, {
      path: "characterinfo/:team/:name",
      component: _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_9__["CharacterInfoComponent"]
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
    var routingComponents = [_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_5__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_6__["MultiplayerComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_7__["TeamInfoComponent"], _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_8__["TypeinfoComponent"], _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_9__["CharacterInfoComponent"]];
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


    __webpack_exports__["default"] = "#view-container {\r\n    width: 1500px;\r\n    height: 620px;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlldy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNjIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxufSJdfQ== */";
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/character.service */
    "./src/services/character.service.ts");

    var AppComponent_1; //import { User } from './user';
    //import { UserService } from '../services/user.service';

    var AppComponent = AppComponent_1 =
    /*#__PURE__*/
    function () {
      function AppComponent(http, characterServices
      /*, private userServices: UserService*/
      ) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.http = http;
        this.characterServices = characterServices;

        this.setupTeamMap = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = AppComponent_1.teamMap;
                    _context.next = 3;
                    return this.characterServices.getTeam("white");

                  case 3:
                    _context.t1 = _context.sent;

                    _context.t0.set.call(_context.t0, "white", _context.t1);

                    _context.t2 = AppComponent_1.teamMap;
                    _context.next = 8;
                    return this.characterServices.getTeam("green");

                  case 8:
                    _context.t3 = _context.sent;

                    _context.t2.set.call(_context.t2, "green", _context.t3);

                    _context.t4 = AppComponent_1.teamMap;
                    _context.next = 13;
                    return this.characterServices.getTeam("blue");

                  case 13:
                    _context.t5 = _context.sent;

                    _context.t4.set.call(_context.t4, "blue", _context.t5);

                    _context.t6 = AppComponent_1.teamMap;
                    _context.next = 18;
                    return this.characterServices.getTeam("purple");

                  case 18:
                    _context.t7 = _context.sent;

                    _context.t6.set.call(_context.t6, "purple", _context.t7);

                    _context.t8 = AppComponent_1.teamMap;
                    _context.next = 23;
                    return this.characterServices.getTeam("yellow");

                  case 23:
                    _context.t9 = _context.sent;

                    _context.t8.set.call(_context.t8, "yellow", _context.t9);

                    _context.t10 = AppComponent_1.teamMap;
                    _context.next = 28;
                    return this.characterServices.getTeam("orange");

                  case 28:
                    _context.t11 = _context.sent;

                    _context.t10.set.call(_context.t10, "orange", _context.t11);

                    _context.t12 = AppComponent_1.teamMap;
                    _context.next = 33;
                    return this.characterServices.getTeam("red");

                  case 33:
                    _context.t13 = _context.sent;

                    _context.t12.set.call(_context.t12, "red", _context.t13);

                    _context.t14 = AppComponent_1.teamMap;
                    _context.next = 38;
                    return this.characterServices.getTeam("black");

                  case 38:
                    _context.t15 = _context.sent;

                    _context.t14.set.call(_context.t14, "black", _context.t15);

                  case 40:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }; //AppComponent.user = new User(this.userServices);

      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          AppComponent_1.teamMap = new Map();
          this.setupTeamMap();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]
        /*, private userServices: UserService*/

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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
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
    /* harmony import */


    var _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./character-info/character-info.component */
    "./src/app/character-info/character-info.component.ts");
    /* harmony import */


    var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./team-info/team-info.component */
    "./src/app/team-info/team-info.component.ts");
    /* harmony import */


    var _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./typeinfo/typeinfo.component */
    "./src/app/typeinfo/typeinfo.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"], _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_6__["CharacterBarComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_8__["TeamSelectComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_9__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_10__["MultiplayerComponent"], _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_11__["CharacterInfoComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_12__["TeamInfoComponent"], _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_13__["TypeinfoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      providers: [HTMLCanvasElement, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
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


    __webpack_exports__["default"] = "#character-bar {\r\n    width: 870px;\r\n    height: 100px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n}\r\n#spectate {\r\n    width: 1498px;\r\n    height: 118px;\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n    font-family: arial;\r\n    font-size: 60px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n}\r\n#income { \r\n    float: left;\r\n    width: 304px;\r\n    height: 88px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: 1px solid black;\r\n}\r\n#income:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n#health {\r\n    float: right;\r\n    width: 304px;\r\n    height: 88px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: 1px solid black;\r\n}\r\n#health:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n.white {\r\n    background-color: #DDDDDD;\r\n}\r\n.black {\r\n    background-color: black;\r\n}\r\n.green {\r\n    background-color: green;\r\n}\r\n.blue {\r\n    background-color: blue;\r\n}\r\n.purple {\r\n    background-color: purple;\r\n}\r\n.yellow {\r\n    background-color: yellow;\r\n}\r\n.orange {\r\n    background-color: orangered;\r\n}\r\n.red {\r\n    background-color: red;\r\n}\r\n.character {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.character:hover {\r\n    cursor: pointer;\r\n}\r\n.cooldown {\r\n    display: none;\r\n    position: absolute;\r\n    height: 100px;\r\n    width: 100px;\r\n    background-color: black;\r\n    opacity: 0.5;\r\n}\r\n.first {\r\n    margin-left: 0px;\r\n}\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n.price {\r\n    z-index: 3;\r\n    margin: 2px;\r\n    position: absolute;\r\n}\r\n.black-unit {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWJhci9jaGFyYWN0ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci1iYXIvY2hhcmFjdGVyLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJhY3Rlci1iYXIge1xyXG4gICAgd2lkdGg6IDg3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI3NwZWN0YXRlIHtcclxuICAgIHdpZHRoOiAxNDk4cHg7XHJcbiAgICBoZWlnaHQ6IDExOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYjE0YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaW5jb21lIHsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMDRweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiMTRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4jaW5jb21lOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGQzNmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2hlYWx0aCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzA0cHg7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYjE0YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuI2hlYWx0aDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkMzZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcclxufVxyXG4uYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnB1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuLnllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNoYXJhY3Rlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvb2xkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYmxhY2stdW5pdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
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


    var _services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/character.service */
    "./src/services/character.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_shopService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/shopService */
    "./src/services/shopService.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CharacterBarComponent_1;

    var CharacterBarComponent = CharacterBarComponent_1 =
    /*#__PURE__*/
    function () {
      function CharacterBarComponent(characterServices, http) {
        var _this2 = this;

        _classCallCheck(this, CharacterBarComponent);

        this.characterServices = characterServices;
        this.http = http;
        this.incomePrice = -1;
        this.healthPrice = -1;

        this.addCooldown = function (name) {
          document.getElementById(name + "cooldown").style.display = "inline-block";
        };

        this.removeCooldown = function (name) {
          document.getElementById(name + "cooldown").style.display = "none";
        };

        this.getIncomePriceAsync = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return CharacterBarComponent_1.shopServices.getNewIncomePrice(this.id, this.side);

                  case 2:
                    this.incomePrice = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        this.getHealthPriceAsync = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return CharacterBarComponent_1.shopServices.getNewHealthPrice(this.id, this.side);

                  case 2:
                    this.healthPrice = _context3.sent;

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };
      }

      _createClass(CharacterBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          if (this.side >= 3) return;
          document.getElementById("character-bar").classList.add(this.team);
          CharacterBarComponent_1.shopServices = new _services_shopService__WEBPACK_IMPORTED_MODULE_4__["ShopService"](this.http);
          this.initBar();

          document.getElementById("income").onmouseup = function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return CharacterBarComponent_1.shopServices.buy(this.id, this.side, "income");

                    case 2:
                      _context4.next = 4;
                      return CharacterBarComponent_1.shopServices.getNewIncomePrice(this.id, this.side);

                    case 4:
                      this.incomePrice = _context4.sent;

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          };

          document.getElementById("health").onmouseup = function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return CharacterBarComponent_1.shopServices.buy(this.id, this.side, "health");

                    case 2:
                      _context5.next = 4;
                      return CharacterBarComponent_1.shopServices.getNewHealthPrice(this.id, this.side);

                    case 4:
                      this.healthPrice = _context5.sent;

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          };
        }
      }, {
        key: "initBar",
        value: function initBar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var fullTeam, _loop, i;

            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    fullTeam = _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].teamMap.get(this.team);
                    _loop =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop() {
                      var currentchar, charprice, charhtml;
                      return regeneratorRuntime.wrap(function _loop$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              currentchar = fullTeam[i];
                              _context6.next = 3;
                              return _this4.characterServices.getPrice(_this4.team, currentchar);

                            case 3:
                              charprice = _context6.sent;
                              charhtml = "<label class='price";
                              if (_this4.team == "black") charhtml += " black-unit";
                              charhtml += "'>$" + charprice + "</label><img src='../../assets/img/icons/" + currentchar + " icon.png'>";
                              document.getElementsByClassName("character")[i].innerHTML += charhtml;
                              document.getElementsByClassName("cooldown")[i].id = currentchar + "cooldown";
                              document.getElementsByClassName("character")[i].addEventListener("mouseup", function (e) {
                                CharacterBarComponent_1.shopServices.buy(_this4.id, _this4.side, currentchar);
                              });

                            case 10:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _loop);
                    });
                    i = 0;

                  case 3:
                    if (!(i < 8)) {
                      _context7.next = 8;
                      break;
                    }

                    return _context7.delegateYield(_loop(), "t0", 5);

                  case 5:
                    i++;
                    _context7.next = 3;
                    break;

                  case 8:
                    this.getIncomePriceAsync();
                    this.getHealthPriceAsync();

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return CharacterBarComponent;
    }();

    CharacterBarComponent.ctorParameters = function () {
      return [{
        type: _services_character_service__WEBPACK_IMPORTED_MODULE_2__["CharacterService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('side')], CharacterBarComponent.prototype, "side", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('team')], CharacterBarComponent.prototype, "team", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('id')], CharacterBarComponent.prototype, "id", void 0);
    CharacterBarComponent = CharacterBarComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
  "./src/app/character-info/character-info.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/character-info/character-info.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCharacterInfoCharacterInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    border: 1px solid black;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    color: #888888;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n\r\nbutton {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.info-container {\r\n    width: 60%;\r\n    margin: auto;\r\n    color: #888888;\r\n}\r\n\r\n.info {\r\n    width: 700px;\r\n    float: right;\r\n}\r\n\r\n.image-link {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 10px;\r\n    float: left;\r\n}\r\n\r\n#info-headers {\r\n    float: left;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    width: 30%;\r\n}\r\n\r\n#info-values {\r\n    display: inline-block;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    width: 70%;\r\n}\r\n\r\n#damage-type {\r\n    width: 22px;\r\n    height: 22px;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n}\r\n\r\n#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n#footer-content {\r\n    width: 510px;\r\n    margin: auto;\r\n}\r\n\r\n#back {\r\n    background-color: #ff2222;\r\n    float: left;\r\n}\r\n\r\n#back:hover {\r\n    background-color: #ff6622;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWluZm8vY2hhcmFjdGVyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXItaW5mby9jaGFyYWN0ZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tdmlldyB7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG59XHJcbi5pbmZvIHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uaW1hZ2UtbGluayB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI2luZm8taGVhZGVycyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuI2luZm8tdmFsdWVzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbiNkYW1hZ2UtdHlwZSB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDE1MDJweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5MTJjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbn1cclxuI2Zvb3Rlci1jb250ZW50IHtcclxuICAgIHdpZHRoOiA1MTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4jYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI2JhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYyMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/character-info/character-info.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/character-info/character-info.component.ts ***!
    \************************************************************/

  /*! exports provided: CharacterInfoComponent */

  /***/
  function srcAppCharacterInfoCharacterInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterInfoComponent", function () {
      return CharacterInfoComponent;
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


    var _characterInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./characterInfo */
    "./src/app/character-info/characterInfo.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_character_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/character.service */
    "./src/services/character.service.ts");

    var CharacterInfoComponent =
    /*#__PURE__*/
    function () {
      function CharacterInfoComponent(route, characterServices) {
        _classCallCheck(this, CharacterInfoComponent);

        this.route = route;
        this.characterServices = characterServices;
        this.team = "white";
        this.name = "doggo";
        this.character = new _characterInfo__WEBPACK_IMPORTED_MODULE_2__["CharacterInfo"]("white", "unknown", this.characterServices);
        this.next = "doggo";
        this.prev = "doggo";
      }

      _createClass(CharacterInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.paramMap.subscribe(function (map) {
            var mapParams = map;
            _this5.team = mapParams.params.team;
            _this5.name = mapParams.params.name;
            _this5.character = new _characterInfo__WEBPACK_IMPORTED_MODULE_2__["CharacterInfo"](_this5.team, _this5.name, _this5.characterServices);
            _this5.fullTeam = _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].teamMap.get(_this5.team);

            var index = _this5.fullTeam.indexOf(_this5.name);

            _this5.next = _this5.fullTeam[(index + 1) % 8];
            if (index == 0) _this5.prev = _this5.fullTeam[7];else _this5.prev = _this5.fullTeam[index - 1];
            document.getElementById("main-view").style.backgroundColor = _this5.team;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }]);

      return CharacterInfoComponent;
    }();

    CharacterInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_character_service__WEBPACK_IMPORTED_MODULE_5__["CharacterService"]
      }];
    };

    CharacterInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-character-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/character-info/character-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-info.component.css */
      "./src/app/character-info/character-info.component.css")).default]
    })], CharacterInfoComponent);
    /***/
  },

  /***/
  "./src/app/character-info/characterInfo.ts":
  /*!*************************************************!*\
    !*** ./src/app/character-info/characterInfo.ts ***!
    \*************************************************/

  /*! exports provided: CharacterInfo */

  /***/
  function srcAppCharacterInfoCharacterInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterInfo", function () {
      return CharacterInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CharacterInfo = function CharacterInfo(team, name, characterServices) {
      var _this6 = this;

      _classCallCheck(this, CharacterInfo);

      this.characterServices = characterServices;

      this.constructAsync = function (team, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee7() {
          var data;
          return regeneratorRuntime.wrap(function _callee7$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.characterServices.getInfo(team, name);

                case 2:
                  data = _context8.sent;
                  console.log(data);
                  this.health = data.health;
                  this.damage = data.damage;
                  this.type = data.type;
                  document.getElementById("damage-type").style.backgroundColor = this.type;
                  this.speed = data.speed;
                  this.team = team;
                  this.name = name.charAt(0).toUpperCase() + name.substring(1);
                  this.description = data.description;

                case 12:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee7, this);
        }));
      };

      if (name == "unknown") {
        this.health = 0;
        this.damage = 0;
        this.type = "-";
        this.speed = 0;
        this.team = "-";
        this.name = "Loading...";
        this.description = "...";
      } else this.constructAsync(team, name);
    };
    /***/

  },

  /***/
  "./src/app/cloud.ts":
  /*!**************************!*\
    !*** ./src/app/cloud.ts ***!
    \**************************/

  /*! exports provided: Cloud */

  /***/
  function srcAppCloudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cloud", function () {
      return Cloud;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Cloud = function Cloud(x) {
      var _this7 = this;

      _classCallCheck(this, Cloud);

      this.draw = function (ctx) {
        ctx.drawImage(_this7.image, _this7.x, _this7.y);
        _this7.x -= _this7.speed;
      };

      if (x) this.x = x;else this.x = 1500;
      this.y = Math.floor(Math.random() * 150);
      this.speed = Math.floor(Math.random() * (12 - 2) + 2);
      var id = Math.floor(Math.random() * (4 - 1) + 1);
      this.image = new Image();
      this.image.src = "../../assets/img/background/clouds/cloud" + id + ".png";
    };
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
    /* harmony import */


    var _collisioneffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./collisioneffect */
    "./src/app/game/collisioneffect.ts");

    var Castle =
    /*#__PURE__*/
    function () {
      function Castle(x, y, team, side) {
        var _this8 = this;

        var health = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
        var maxHealth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 100;
        var dead = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
        var deffect = arguments.length > 7 ? arguments[7] : undefined;

        _classCallCheck(this, Castle);

        this.damage = 0;

        this.drawDead = function (context) {
          var ctx = context;
          var deadimg = new Image();
          deadimg.src = "../assets/img/castles/dead castle.png";
          var x = _this8.x;
          var y = _this8.y;
          ctx.drawImage(deadimg, x, y);
        };

        this.x = x;
        this.y = y;
        this.team = team;
        this.side = side;
        this.health = health;
        this.maxHealth = maxHealth;
        this.dead = dead;
        this.defendEffect = deffect;
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

          this.defendEffect.draw(context, this.x, this.y);
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
          return new Castle(data.side == 1 ? 50 : 1250, 250, data.team, data.side, data.health, data.maxHealth, data.dead, _collisioneffect__WEBPACK_IMPORTED_MODULE_1__["CollisionEffect"].parseCollisionEffect(data.defendEffect));
        }
      }]);

      return Castle;
    }();
    /***/

  },

  /***/
  "./src/app/game/collisioneffect.ts":
  /*!*****************************************!*\
    !*** ./src/app/game/collisioneffect.ts ***!
    \*****************************************/

  /*! exports provided: CollisionEffect */

  /***/
  function srcAppGameCollisioneffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollisionEffect", function () {
      return CollisionEffect;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CollisionEffect =
    /*#__PURE__*/
    function () {
      function CollisionEffect(stance, collisionType, color) {
        var _this9 = this;

        _classCallCheck(this, CollisionEffect);

        this.draw = function (context, x, y) {
          if (_this9.stance == "attack") {
            context.drawImage(_this9.icon, x, y);
            context.drawImage(_this9.attackEffect, x, y + 15);
          }

          if (_this9.stance == "defend") {
            context.drawImage(_this9.icon, x + 30, y);
          }
        };

        this.stance = stance;
        if (collisionType == 2) this.type = "mitigated";else this.type = "enhanced";
        this.color = color;
        this.icon = new Image();

        if (this.stance == "attack") {
          this.icon.src = "../assets/img/collisions/swords/" + this.color + " sword.png";
          this.attackEffect = new Image();
          this.attackEffect.src = "../assets/img/collisions/swords/" + this.type + ".png";
        }

        if (this.stance == "defend") {
          this.icon.src = "../assets/img/collisions/shields/" + this.color + " shield " + this.type + ".png";
        }
      }

      _createClass(CollisionEffect, null, [{
        key: "parseCollisionEffect",
        value: function parseCollisionEffect(data) {
          return new CollisionEffect(data.stance, data.collisionType, data.color);
        }
      }]);

      return CollisionEffect;
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


    __webpack_exports__["default"] = "table {\r\n    width: 100%;\r\n}\r\ntd {\r\n    font-weight: 600;\r\n}\r\nh2 {\r\n    margin: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n.contains-icon {\r\n    height: 100px;\r\n}\r\n#game-canvas {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n}\r\n#endgame-stats {\r\n    border-top: 1px solid black;\r\n}\r\n#player1-stats {\r\n    display: inline-block;\r\n    width: 50%;\r\n}\r\n#player2-stats {\r\n    display: inline-block;\r\n    width: 50%;\r\n}\r\n#main-menu {\r\n    color: white;\r\n    background-color: #00ee55;\r\n    font-size: 20px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 2s;\r\n}\r\n#main-menu:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/* Opera < 12.1 */\r\n/* Modal Styling... */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 15px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 605px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 85%;\r\n    height: 90%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLDRCQUE0QixFQUFFLG9DQUFvQyxFQUNwQyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtZQUN2QyxvQkFBb0I7QUFDaEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLHNCQUFzQjtBQU10QixpQkFBaUI7QUFNakIscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGdDQUFnQztBQUNwQztBQUVFLGtCQUFrQjtBQUNwQjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO01BQ00sZUFBZTtNQUNmLGVBQWU7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb250YWlucy1pY29uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiNnYW1lLWNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDE1MDJweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4jZW5kZ2FtZS1zdGF0cyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuI3BsYXllcjEtc3RhdHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4jcGxheWVyMi1zdGF0cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4jbWFpbi1tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGVlNTU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG59XHJcbiNtYWluLW1lbnU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZmY3NztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggPCAxNiAqL1xyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogT3BlcmEgPCAxMi4xICovXHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nLi4uICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiA1OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogNjA1cHg7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */";
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


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/game.service */
    "./src/services/game.service.ts");
    /* harmony import */


    var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @aspnet/signalr */
    "./node_modules/@aspnet/signalr/dist/esm/index.js");
    /* harmony import */


    var _cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../cloud */
    "./src/app/cloud.ts");
    /* harmony import */


    var _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../character-bar/character-bar.component */
    "./src/app/character-bar/character-bar.component.ts"); //import { AppComponent } from '../app.component';


    var GameComponent =
    /*#__PURE__*/
    function () {
      function GameComponent(route, gameServices) {
        var _this10 = this;

        _classCallCheck(this, GameComponent);

        this.route = route;
        this.gameServices = gameServices;
        this.gameResult = "";
        this.player1Stats = {
          TotalIncome: {
            Item1: "-",
            Item2: "0"
          },
          UnitsBought: {
            Item1: "-",
            Item2: "0"
          },
          FavoriteUnit: {
            Item1: "-",
            Item2: "0"
          },
          MostKills: {
            Item1: "-",
            Item2: "0"
          },
          MostDamage: {
            Item1: "-",
            Item2: "0"
          },
          MostCastleDamage: {
            Item1: "-",
            Item2: "0"
          }
        };
        this.player2Stats = {
          TotalIncome: {
            Item1: "-",
            Item2: "0"
          },
          UnitsBought: {
            Item1: "-",
            Item2: "0"
          },
          FavoriteUnit: {
            Item1: "-",
            Item2: "0"
          },
          MostKills: {
            Item1: "-",
            Item2: "0"
          },
          MostDamage: {
            Item1: "-",
            Item2: "0"
          },
          MostCastleDamage: {
            Item1: "-",
            Item2: "0"
          }
        };
        this.player1FavoriteUnitIcon = "../../assets/img/icons/question icon.png";
        this.player1MostKillsIcon = "../../assets/img/icons/question icon.png";
        this.player1MostDamageIcon = "../../assets/img/icons/question icon.png";
        this.player1MostCastleDamageIcon = "../../assets/img/icons/question icon.png";
        this.player2FavoriteUnitIcon = "../../assets/img/icons/question icon.png";
        this.player2MostKillsIcon = "../../assets/img/icons/question icon.png";
        this.player2MostDamageIcon = "../../assets/img/icons/question icon.png";
        this.player2MostCastleDamageIcon = "../../assets/img/icons/question icon.png";

        this.init = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.gameServices.init(this.team, this.id);

                  case 2:
                    if (this.id < 1000 || this.id > 10000) this.start();else this.waitForPlayer2();

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee8, this);
          }));
        };

        this.waitForPlayer2 = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.draw_background(false);
                    if (this.player2.income < 0.01) setTimeout(this.waitForPlayer2, 250);else this.start();

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee9, this);
          }));
        };

        this.start = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.gameServices.play(this.id);

                  case 2:
                    window.requestAnimationFrame(function () {
                      return _this11.draw();
                    });

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee10, this);
          }));
        };

        this.reset = function () {
          _this10.player1 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          _this10.player2 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          _this10.units = new Array();

          _this10.route.paramMap.subscribe(function (map) {
            var mapParams = map;
            _this10.id = mapParams.params.id;
            _this10.team = mapParams.params.team;
            _this10.side = mapParams.params.side;
            if (_this10.side == 1) _this10.connectedPlayer = _this10.player1;else if (_this10.side == 2) _this10.connectedPlayer = _this10.player2;else _this10.connectedPlayer = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 3, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          });

          document.getElementById("main-menu").style.display = "none";
        };

        this.background = new Image();
        this.background.src = "../../assets/img/background/background default.png";
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.player1 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          this.player2 = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          this.route.paramMap.subscribe(function (map) {
            var mapParams = map;
            _this12.id = mapParams.params.id;
            _this12.team = mapParams.params.team;
            _this12.side = mapParams.params.side;
            if (_this12.side == 1) _this12.connectedPlayer = _this12.player1;else if (_this12.side == 2) _this12.connectedPlayer = _this12.player2;else _this12.connectedPlayer = new _player__WEBPACK_IMPORTED_MODULE_4__["Player"](0, 0, 0, 0, 3, new _castle__WEBPACK_IMPORTED_MODULE_5__["Castle"](0, 0, "white", 0, 0, 0));
          });
          this.clouds = [new _cloud__WEBPACK_IMPORTED_MODULE_8__["Cloud"](100), new _cloud__WEBPACK_IMPORTED_MODULE_8__["Cloud"](600), new _cloud__WEBPACK_IMPORTED_MODULE_8__["Cloud"](900), new _cloud__WEBPACK_IMPORTED_MODULE_8__["Cloud"](1300)];
          this.nextCloud = Math.floor(Math.random() * 25);
          this.units = new Array();
          if (this.side == 1) this.init();else this.gameServices.init(this.team, this.id);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this13 = this;

          var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_7__["HubConnectionBuilder"]().withUrl("/gamehub").build();
          connection.start().then(function () {
            console.log("connected!");
            connection.invoke("connectedto", _this13.id);
          });
          connection.on("UpdateUnits", function (unitData) {
            _this13.units = _unit__WEBPACK_IMPORTED_MODULE_3__["Unit"].parseUnits(unitData);
            window.requestAnimationFrame(function () {
              return _this13.draw();
            });
          });
          connection.on("UpdatePlayers", function (playerData) {
            _this13.player1.updatePlayer(playerData, 0);

            _this13.player2.updatePlayer(playerData, 1);
          });
          connection.on("EndGame", function (side) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.gameServices.getPlayerStats(this.id, 1);

                    case 2:
                      this.player1Stats = _context12.sent;
                      _context12.next = 5;
                      return this.gameServices.getPlayerStats(this.id, 2);

                    case 5:
                      this.player2Stats = _context12.sent;
                      this.player1FavoriteUnitIcon = "../../assets/img/icons/" + this.player1Stats.FavoriteUnit.Item1 + " icon.png";
                      this.player1MostKillsIcon = "../../assets/img/icons/" + this.player1Stats.MostKills.Item1 + " icon.png";
                      this.player1MostDamageIcon = "../../assets/img/icons/" + this.player1Stats.MostDamage.Item1 + " icon.png";
                      this.player1MostCastleDamageIcon = "../../assets/img/icons/" + this.player1Stats.MostCastleDamage.Item1 + " icon.png";
                      this.player2FavoriteUnitIcon = "../../assets/img/icons/" + this.player2Stats.FavoriteUnit.Item1 + " icon.png";
                      this.player2MostKillsIcon = "../../assets/img/icons/" + this.player2Stats.MostKills.Item1 + " icon.png";
                      this.player2MostDamageIcon = "../../assets/img/icons/" + this.player2Stats.MostDamage.Item1 + " icon.png";
                      this.player2MostCastleDamageIcon = "../../assets/img/icons/" + this.player2Stats.MostCastleDamage.Item1 + " icon.png";

                      if (side == this.side) {
                        this.gameResult = "VICTORY";
                        document.getElementById("endgame-modal-content").style.backgroundColor = "#ccffcc";
                      } else if (this.side > 2) this.gameResult = "PLAYER " + side + " WINS";else {
                        this.gameResult = "DEFEAT";
                        document.getElementById("endgame-modal-content").style.backgroundColor = "#ffcccc";
                      }

                      document.getElementById("endgame-modal").style.display = "block";

                    case 16:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee11, this);
            }));
          });
          connection.onclose(function () {
            if (_this13.side >= 3) return;
            document.getElementById("endgame-modal").style.display = "none";

            _this13.gameServices.end(_this13.id);

            _this13.reset();

            delete _this13.gameServices;
          });
          this.canvas = document.getElementById("game-canvas");
          this.context = this.canvas.getContext("2d");
          var menuButton = document.getElementById("main-menu");

          menuButton.onmouseup = function () {
            connection.stop();
          };

          connection.on("AddCooldown", function (side, name) {
            if (_this13.connectedPlayer.side != side) return;

            _this13.characterbar.addCooldown(name);
          });
          connection.on("RemoveCooldown", function (side, name) {
            if (_this13.connectedPlayer.side != side) return;

            _this13.characterbar.removeCooldown(name);
          });
        }
      }, {
        key: "draw",
        value: function draw() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var ctx;
            return regeneratorRuntime.wrap(function _callee12$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    ctx = this.context;
                    this.draw_background();
                    if (typeof this.units != 'undefined') this.units.forEach(function (unit) {
                      unit.draw(ctx);
                    });

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "draw_background",
        value: function draw_background() {
          var connected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var ctx = this.context;
          ctx.drawImage(this.background, 0, 0);
          if (typeof this.clouds != 'undefined') this.clouds.forEach(function (cloud) {
            cloud.draw(ctx);
          });
          if (this.nextCloud > 0) this.nextCloud--;else {
            this.nextCloud = Math.floor(Math.random() * 50);
            this.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_8__["Cloud"]());
          }

          if (this.side < 3) {
            ctx.fillStyle = "black";
            ctx.font = "50px serif";
            ctx.fillText("Money: $" + Math.floor(this.connectedPlayer.money), 10, 45);
            ctx.font = "14px serif";
            ctx.fillText("Income: $" + Math.floor(this.connectedPlayer.income * 600) + "/min", 12, 60);

            if (this.id >= 1000) {
              ctx.font = "14px serif";
              ctx.fillText("Game ID: " + this.id, 1410, 15);
            }
          }

          if (connected) {
            this.player1.castle.draw(ctx);
            this.player2.castle.draw(ctx);
          }
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_9__["CharacterBarComponent"], {
      static: false
    })], GameComponent.prototype, "characterbar", void 0);
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
    /* harmony import */


    var _collisioneffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./collisioneffect */
    "./src/app/game/collisioneffect.ts");

    var Unit =
    /*#__PURE__*/
    function () {
      function Unit(name, side, health, maxHealth, size, x) {
        var _this14 = this;

        var y = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 400;
        var aeffect = arguments.length > 7 ? arguments[7] : undefined;
        var deffect = arguments.length > 8 ? arguments[8] : undefined;

        _classCallCheck(this, Unit);

        this.equals = function (obj) {
          if (_this14.side == obj.side && _this14.name == obj.name && _this14.maxHealth == obj.maxHealth && _this14.size == obj.size && _this14.x == obj.x && _this14.y == obj.y) return true;
          return false;
        };

        this.sprite = new Image();
        this.sprite.src = "../assets/img/units/" + name + side + ".png";
        this.name = name;
        this.side = side;
        this.health = health;
        this.maxHealth = maxHealth;
        this.size = size;
        this.x = x;
        this.y = y;
        this.attackEffect = aeffect;
        this.defendEffect = deffect;
      }

      _createClass(Unit, [{
        key: "draw",
        value: function draw(context) {
          context.drawImage(this.sprite, this.x, this.y);
          this.attackEffect.draw(context, this.x, this.y);
          this.defendEffect.draw(context, this.x, this.y);
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
            units.push(new Unit(data[i].name, data[i].side, data[i].health, data[i].maxHealth, data[i].size, data[i].x, data[i].y, _collisioneffect__WEBPACK_IMPORTED_MODULE_1__["CollisionEffect"].parseCollisionEffect(data[i].attackEffect), _collisioneffect__WEBPACK_IMPORTED_MODULE_1__["CollisionEffect"].parseCollisionEffect(data[i].defendEffect)));
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


    __webpack_exports__["default"] = "h2 {\r\n    text-align: center;\r\n    margin: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\nbutton {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n.level {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n    margin: 10px;\r\n    background-color: white;\r\n    text-align: center;\r\n    font-size: 80px;\r\n}\r\n.selected {\r\n    margin: 0px;\r\n    border: 10px solid lightgreen;\r\n}\r\n#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    z-index: 1;\r\n    position: absolute;\r\n}\r\n#background-canvas {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n#start {\r\n    background-color: #00ee55;\r\n    margin-left: 671px;\r\n    margin-right: 50px;\r\n}\r\n#start:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n#level-select {\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    margin-left: 270px;\r\n    padding: 10px;\r\n}\r\n#footer {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n}\r\n#instructions {\r\n    background-color: #d38822;\r\n}\r\n#instructions:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#back {\r\n    background-color: #ff2222;\r\n}\r\n#back:hover {\r\n    background-color: #ff6622;\r\n}\r\n#footer-button-container {\r\n    width: 475px;\r\n    margin: auto;\r\n}\r\n/* Modal Styling... */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV2ZWwtc2VsZWN0L2xldmVsLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7QUFFRSxrQkFBa0I7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGV2ZWwtc2VsZWN0L2xldmVsLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5sZXZlbCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbiNtYWluLXZpZXcge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiNiYWNrZ3JvdW5kLWNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuI3N0YXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGVlNTU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjcxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuI3N0YXJ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmZmNzc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xldmVsLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTEyYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG4jaW5zdHJ1Y3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzg4MjI7XHJcbn1cclxuI2luc3RydWN0aW9uczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhYTQ0O1xyXG59XHJcbiNiYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XHJcbn1cclxuI2JhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYyMjtcclxufVxyXG4jZm9vdGVyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQ3NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nLi4uICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiA1OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogNTcwcHg7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiAgXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */";
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
    /* harmony import */


    var src_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/game.service */
    "./src/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cloud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../cloud */
    "./src/app/cloud.ts");

    var LevelSelectComponent =
    /*#__PURE__*/
    function () {
      function LevelSelectComponent(gameServices, router) {
        var _this15 = this;

        _classCallCheck(this, LevelSelectComponent);

        this.gameServices = gameServices;
        this.router = router;
        this.team = "white";
        this.id = 1;
        this.side = 1;

        this.checkGame = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    document.getElementById("start").addEventListener("click", function () {});
                    this.updateTeam();
                    _context14.next = 4;
                    return this.gameServices.getLevelID(this.id);

                  case 4:
                    this.id = _context14.sent;
                    this.router.navigate(["../game/", this.id, this.team, this.side]);

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee13, this);
          }));
        };

        this.updateTeam = function () {
          _this15.team = document.getElementsByClassName("selected")[1].id;
        };

        this.draw_background = function () {
          if (_this15.nextCloud > 0) _this15.nextCloud--;else {
            _this15.nextCloud = Math.floor(Math.random() * 40);

            _this15.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_4__["Cloud"]());
          }

          _this15.context.drawImage(_this15.background, 0, 0);

          if (typeof _this15.clouds != 'undefined') _this15.clouds.forEach(function (cloud) {
            cloud.draw(_this15.context);
          });
          setTimeout(_this15.draw_background, 100);
        };
      }

      _createClass(LevelSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          var levels = document.getElementsByClassName("level");

          for (var i = 0; i < levels.length; i++) {
            levels[i].addEventListener("click", function (e) {
              var level = e.target;
              _this16.id = Number(level.innerText);

              for (var i = 0; i < levels.length; i++) {
                levels[i].classList.remove("selected");
              }

              level.classList.add("selected");
            });
          }

          var modal = document.getElementById("instruction-modal");
          var open = document.getElementById("instructions");
          var close = document.getElementsByClassName("close")[0];
          this.canvas = document.getElementById("background-canvas");
          this.context = this.canvas.getContext("2d");
          this.background = new Image();
          this.background.src = "../../assets/img/background/background default.png";
          this.clouds = [new _cloud__WEBPACK_IMPORTED_MODULE_4__["Cloud"](100), new _cloud__WEBPACK_IMPORTED_MODULE_4__["Cloud"](600), new _cloud__WEBPACK_IMPORTED_MODULE_4__["Cloud"](900), new _cloud__WEBPACK_IMPORTED_MODULE_4__["Cloud"](1300)];
          this.nextCloud = Math.floor(Math.random() * 25);

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

          this.draw_background();
        }
      }]);

      return LevelSelectComponent;
    }();

    LevelSelectComponent.ctorParameters = function () {
      return [{
        type: src_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

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


    __webpack_exports__["default"] = "button {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\ninput {\r\n    color: #666666;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    margin-left: 10px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\nlabel {\r\n    color: white;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n    margin-left: 30px;\r\n}\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n.game-browser-item {\r\n    border-radius: 5px;\r\n}\r\n.game-browser-item:hover {\r\n    cursor: pointer;\r\n    background-color: #dcdcdc;\r\n}\r\n.game-state {\r\n    margin-left: 25px;\r\n}\r\n#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n#background-canvas {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n#ng {\r\n    margin-left: 300px;\r\n    background-color: #0066ff;\r\n}\r\n#ng:hover {\r\n    background-color: #2288ff;\r\n}\r\n#jg.unverified {\r\n    background-color: #ff2222;\r\n}\r\n#jg.unverified:hover {\r\n    background-color: #ff6622;\r\n}\r\n#jg {\r\n    background-color: #00ee55;\r\n}\r\n#jg:hover {\r\n    background-color: #22ff77;\r\n}\r\n#game-browser {\r\n    background-color: #440088;\r\n}\r\n#game-browser:hover {\r\n    background-color: #4422aa;\r\n}\r\n#footer {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n}\r\n#instructions {\r\n    background-color: #d38822;\r\n}\r\n#instructions:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#back {\r\n    background-color: #ff2222;\r\n}\r\n#back:hover {\r\n    background-color: #ff6622;\r\n}\r\n#footer-button-container {\r\n    width: 475px;\r\n    margin: auto;\r\n}\r\n/* Modal Styling... */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7QUFFRSxrQkFBa0I7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uZ2FtZS1icm93c2VyLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5nYW1lLWJyb3dzZXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG59XHJcbi5nYW1lLXN0YXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4jbWFpbi12aWV3IHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4jYmFja2dyb3VuZC1jYW52YXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuI25nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XHJcbn1cclxuI25nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjg4ZmY7XHJcbn1cclxuI2pnLnVudmVyaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcclxufVxyXG4jamcudW52ZXJpZmllZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjIyO1xyXG59XHJcbiNqZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlZTU1O1xyXG59XHJcbiNqZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJmZjc3O1xyXG59XHJcbiNnYW1lLWJyb3dzZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MDA4ODtcclxufVxyXG4jZ2FtZS1icm93c2VyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDIyYWE7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjkxMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuI2luc3RydWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM4ODIyO1xyXG59XHJcbiNpbnN0cnVjdGlvbnM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YWE0NDtcclxufVxyXG4jYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xyXG59XHJcbiNiYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MjI7XHJcbn1cclxuI2Zvb3Rlci1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0NzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogTW9kYWwgU3R5bGluZy4uLiAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogNTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
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
    /* harmony import */


    var _cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cloud */
    "./src/app/cloud.ts");
    /* harmony import */


    var src_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/game.service */
    "./src/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MultiplayerComponent =
    /*#__PURE__*/
    function () {
      function MultiplayerComponent(router, gameServices) {
        var _this17 = this;

        _classCallCheck(this, MultiplayerComponent);

        this.router = router;
        this.gameServices = gameServices;
        this.team = "white";
        this.id = 1000;
        this.allIDsandStates = {};
        this.gameIDs = [];

        this.updateGamesAsync = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var jsonData, obj;
            return regeneratorRuntime.wrap(function _callee14$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.gameServices.getAllGameIDsAndStates();

                  case 2:
                    jsonData = _context15.sent;
                    obj = jsonData;
                    this.allIDsandStates = obj;
                    if (Object.keys(this.allIDsandStates)) this.gameIDs = Object.keys(this.allIDsandStates);else this.gameIDs = [];

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee14, this);
          }));
        };

        this.setId = function (id) {
          _this17.id = id;
          document.getElementById("game-browser-modal").style.display = "none";
          document.getElementById("game-id").value = _this17.id;
          document.getElementById("jg").classList.remove("unverified");
        };

        this.updateTeam = function () {
          _this17.team = document.getElementsByClassName("selected")[0].id;
        };

        this.getNewId = function () {
          _this17.id = Math.floor(Math.random() * 9000 + 1000);

          while (_this17.id in _this17.allIDsandStates) {
            _this17.id = Math.floor(Math.random() * 9000 + 1000);
          }
        };

        this.tryId = function () {
          _this17.id = document.getElementById("game-id").value;
          if (_this17.id < 1000 || _this17.id > 9999) return false;
          if (!(_this17.id in _this17.allIDsandStates)) return false;
          if (_this17.allIDsandStates[_this17.id] != 1) return false;
          return true;
        };

        this.newGame = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.updateGamesAsync();

                  case 2:
                    this.getNewId();
                    this.updateTeam();
                    this.router.navigate(["../game", this.id, this.team, 1]);

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee15, this);
          }));
        };

        this.joinGame = function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var side;
            return regeneratorRuntime.wrap(function _callee16$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    side = 2;
                    _context17.next = 3;
                    return this.updateGamesAsync();

                  case 3:
                    if (this.tryId()) {
                      _context17.next = 10;
                      break;
                    }

                    if (!(this.allIDsandStates[this.id] == 2)) {
                      _context17.next = 8;
                      break;
                    }

                    side = 3;
                    _context17.next = 10;
                    break;

                  case 8:
                    alert("The ID entered is invalid! Check to make sure the entered ID is correct.\n(or it's just a bug lol)");
                    return _context17.abrupt("return");

                  case 10:
                    this.updateTeam();
                    this.router.navigate(["../game", this.id, this.team, side]);

                  case 12:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee16, this);
          }));
        };

        this.draw_background = function () {
          if (_this17.nextCloud > 0) _this17.nextCloud--;else {
            _this17.nextCloud = Math.floor(Math.random() * 40);

            _this17.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"]());
          }

          _this17.context.drawImage(_this17.background, 0, 0);

          if (typeof _this17.clouds != 'undefined') _this17.clouds.forEach(function (cloud) {
            cloud.draw(_this17.context);
          });
          setTimeout(_this17.draw_background, 100);
        };
      }

      _createClass(MultiplayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.updateGamesAsync();
          var instructionModal = document.getElementById("instruction-modal");
          var browserModal = document.getElementById("game-browser-modal");
          var instructionOpen = document.getElementById("instructions");
          var browserOpen = document.getElementById("game-browser");
          var instructionClose = document.getElementsByClassName("close")[0];
          var browserClose = document.getElementsByClassName("close")[1];
          this.canvas = document.getElementById("background-canvas");
          this.context = this.canvas.getContext("2d");
          this.background = new Image();
          this.background.src = "../../assets/img/background/background default.png";
          this.clouds = [new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](100), new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](600), new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](900), new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](1300)];
          this.nextCloud = Math.floor(Math.random() * 25);

          instructionOpen.onclick = function () {
            instructionModal.style.display = "block";
          };

          browserOpen.onclick = function () {
            _this18.updateGamesAsync();

            browserModal.style.display = "block";
          };

          instructionClose.onclick = function () {
            instructionModal.style.display = "none";
          };

          browserClose.onclick = function () {
            browserModal.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == instructionModal) {
              instructionModal.style.display = "none";
            }

            if (event.target == browserModal) {
              browserModal.style.display = "none";
            }
          };

          document.getElementById("game-id").onchange = function () {
            document.getElementById("jg").classList.add("unverified");
          };

          this.draw_background();
        }
      }]);

      return MultiplayerComponent;
    }();

    MultiplayerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
      }];
    };

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
  "./src/app/team-info/team-info.component.css":
  /*!***************************************************!*\
    !*** ./src/app/team-info/team-info.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeamInfoTeamInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#team-info-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    color: #888888;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\n\r\nbutton {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#character-select-bar {\r\n    display: inline-block;\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    margin: auto;\r\n    margin-top: 0px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#footer {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n#back {\r\n    background-color: #ff2222;\r\n}\r\n\r\n#back:hover {\r\n    background-color: #ff6622;\r\n}\r\n\r\n#footer-button-container {\r\n    width: 290px;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1pbmZvL3RlYW0taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWluZm8vdGVhbS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhbS1pbmZvLXZpZXcge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jY2hhcmFjdGVyLXNlbGVjdC1iYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDk2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMnB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjkxMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI2JhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcclxufVxyXG4jYmFjazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjIyO1xyXG59XHJcbiNmb290ZXItYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/team-info/team-info.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/team-info/team-info.component.ts ***!
    \**************************************************/

  /*! exports provided: TeamInfoComponent */

  /***/
  function srcAppTeamInfoTeamInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamInfoComponent", function () {
      return TeamInfoComponent;
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


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var TeamInfoComponent =
    /*#__PURE__*/
    function () {
      function TeamInfoComponent() {
        var _this19 = this;

        _classCallCheck(this, TeamInfoComponent);

        this.currentTeam = "white";

        this.updateTeam = function () {
          _this19.currentTeam = document.getElementsByClassName("selected")[0].id;
          _this19.currentUnits = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].teamMap.get(_this19.currentTeam);
          document.getElementById("team-info-view").style.backgroundColor = "" + _this19.currentTeam;
        };
      }

      _createClass(TeamInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.updateTeam();

          document.getElementById("team-info-view").onmouseup = function () {
            _this20.updateTeam();
          };
        }
      }]);

      return TeamInfoComponent;
    }();

    TeamInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/team-info/team-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team-info.component.css */
      "./src/app/team-info/team-info.component.css")).default]
    })], TeamInfoComponent);
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
            teams[i].addEventListener("mouseup", function (e) {
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
  "./src/app/typeinfo/typeinfo.component.css":
  /*!*************************************************!*\
    !*** ./src/app/typeinfo/typeinfo.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTypeinfoTypeinfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#type-info-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    background-image: url('typeeffects with background.png');\r\n}\r\n\r\n#footer {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n#back {\r\n    background-color: #ff2222;\r\n}\r\n\r\n#back:hover {\r\n    background-color: #ff6622;\r\n}\r\n\r\n#footer-button-container {\r\n    width: 290px;\r\n    margin: auto;\r\n}\r\n\r\n/* Modal Styling... */\r\n\r\n.modal {\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZWluZm8vdHlwZWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix3REFBb0Y7QUFDeEY7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0ksZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7O0FBRUUsa0JBQWtCOztBQUNwQjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdHlwZWluZm8vdHlwZWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiN0eXBlLWluZm8tdmlldyB7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC90eXBlZWZmZWN0cyB3aXRoIGJhY2tncm91bmQucG5nXCIpO1xyXG59XHJcbiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjkxMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI2JhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcclxufVxyXG4jYmFjazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjIyO1xyXG59XHJcbiNmb290ZXItYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qIE1vZGFsIFN0eWxpbmcuLi4gKi9cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogNTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/typeinfo/typeinfo.component.ts":
  /*!************************************************!*\
    !*** ./src/app/typeinfo/typeinfo.component.ts ***!
    \************************************************/

  /*! exports provided: TypeinfoComponent */

  /***/
  function srcAppTypeinfoTypeinfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeinfoComponent", function () {
      return TypeinfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypeinfoComponent =
    /*#__PURE__*/
    function () {
      function TypeinfoComponent() {
        _classCallCheck(this, TypeinfoComponent);
      }

      _createClass(TypeinfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var modal = document.getElementById("instruction-modal");
          var open = document.getElementById("instructions");
          var close = document.getElementsByClassName("close")[0];

          close.onclick = function () {
            modal.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
        }
      }]);

      return TypeinfoComponent;
    }();

    TypeinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-typeinfo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./typeinfo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/typeinfo/typeinfo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./typeinfo.component.css */
      "./src/app/typeinfo/typeinfo.component.css")).default]
    })], TypeinfoComponent);
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


    __webpack_exports__["default"] = "#main-view {\r\n    width: 1500px;\r\n    height: 500px;\r\n    z-index: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: absolute;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 2s;\r\n}\r\n#background-canvas {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/* Opera < 12.1 */\r\nh1 {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\nh2 {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\nbutton {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n#sp {\r\n    background-color: #00ee55;\r\n}\r\n#sp:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n#mp {\r\n    background-color: #0066ff;\r\n}\r\n#mp:hover {\r\n    background-color: #2288ff;\r\n    cursor: pointer;\r\n}\r\n#main-button-container {\r\n    width: 415px;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n}\r\n#footer {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n\r\n    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 2s;\r\n}\r\n#instructions {\r\n    background-color: #d38822;\r\n}\r\n#instructions:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#character-stats {\r\n    background-color: #d38822;\r\n}\r\n#character-stats:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#type-effects {\r\n    background-color: #d38822;\r\n}\r\n#type-effects:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#footer-button-container {\r\n    width: 710px;\r\n    margin: auto;\r\n}\r\n/* Modal Styling... */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 5; /* Sit on top */\r\n    padding-top: 50px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; /* Full width */\r\n    height: 570px; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n/* Modal Content */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixvQkFBYTtJQUFiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1Qjs7SUFFdkIsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQ3BDLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsaUJBQWlCO1lBQ3ZDLG9CQUFvQjtBQUNoQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLHNCQUFzQjtBQU10QixpQkFBaUI7QUFNakI7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsb0JBQWE7SUFBYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1Qjs7SUFFdkIsNEJBQTRCLEVBQUUsb0NBQW9DLEVBQ3BDLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsaUJBQWlCO1lBQ3ZDLG9CQUFvQjtBQUNoQztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsaUJBQWlCLEVBQUUsd0JBQXdCO0lBQzNDLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYSxFQUFFLGVBQWU7SUFDOUIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsZ0NBQWdDO0FBQ3BDO0FBRUUsa0JBQWtCO0FBQ3BCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7TUFDTSxlQUFlO01BQ2YsZUFBZTtBQUNyQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tdmlldyB7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAyczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuICAgICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIE9wZXJhIDwgMTIuMSAqL1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAycztcclxufVxyXG4jYmFja2dyb3VuZC1jYW52YXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBGaXJlZm94IDwgMTYgKi9cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG5ALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIE9wZXJhIDwgMTIuMSAqL1xyXG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiNzcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlZTU1O1xyXG59XHJcbiNzcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJmZjc3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNtcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmZmO1xyXG59XHJcbiNtcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI4OGZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNtYWluLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5MTJjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbiAgICAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBGaXJlZm94IDwgMTYgKi9cclxuICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbiAgICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBPcGVyYSA8IDEyLjEgKi9cclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XHJcbn1cclxuI2luc3RydWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM4ODIyO1xyXG59XHJcbiNpbnN0cnVjdGlvbnM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YWE0NDtcclxufVxyXG4jY2hhcmFjdGVyLXN0YXRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzg4MjI7XHJcbn1cclxuI2NoYXJhY3Rlci1zdGF0czpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhYTQ0O1xyXG59XHJcbiN0eXBlLWVmZmVjdHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzODgyMjtcclxufVxyXG4jdHlwZS1lZmZlY3RzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWFhNDQ7XHJcbn1cclxuI2Zvb3Rlci1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3MTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogTW9kYWwgU3R5bGluZy4uLiAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogNTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
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
    /* harmony import */


    var _cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cloud */
    "./src/app/cloud.ts");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        var _this21 = this;

        _classCallCheck(this, WelcomeComponent);

        this.loggedIn = false;

        this.draw_background = function () {
          if (_this21.nextCloud > 0) _this21.nextCloud--;else {
            _this21.nextCloud = Math.floor(Math.random() * 40);

            _this21.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"]());
          }

          _this21.context.drawImage(_this21.background, 0, 0);

          if (typeof _this21.clouds != 'undefined') _this21.clouds.forEach(function (cloud) {
            cloud.draw(_this21.context);
          });
          setTimeout(_this21.draw_background, 100);
        };
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var modal = document.getElementById("instruction-modal");
          var open = document.getElementById("instructions");
          var close = document.getElementsByClassName("close")[0];
          this.canvas = document.getElementById("background-canvas");
          this.context = this.canvas.getContext("2d");
          this.background = new Image();
          this.background.src = "../../assets/img/background/background default.png";
          this.clouds = [new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](100), new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](600), new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](900), new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"](1300)];
          this.nextCloud = Math.floor(Math.random() * 25);

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

          this.draw_background(); // LOGIN LOGIC VVV

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
      production: false,
      apiURL: 'https://localhost:44364/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/services/character.service.ts":
  /*!*******************************************!*\
    !*** ./src/services/character.service.ts ***!
    \*******************************************/

  /*! exports provided: CharacterService */

  /***/
  function srcServicesCharacterServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var CharacterService =
    /*#__PURE__*/
    function () {
      function CharacterService(http) {
        _classCallCheck(this, CharacterService);

        this.http = http;
        this.http = http;
      }

      _createClass(CharacterService, [{
        key: "getCharacter",
        value: function getCharacter(team, name) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/characters/getcharacter/' + team + '/' + name).toPromise();
        }
      }, {
        key: "getPrice",
        value: function getPrice(team, name) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/characters/getprice/' + team + '/' + name).toPromise();
        }
      }, {
        key: "getTeam",
        value: function getTeam(team) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/characters/getteam/' + team).toPromise();
        }
      }, {
        key: "getInfo",
        value: function getInfo(team, name) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/characters/getinfo/' + team + '/' + name).toPromise();
        }
      }]);

      return CharacterService;
    }();

    CharacterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CharacterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CharacterService);
    /***/
  },

  /***/
  "./src/services/game.service.ts":
  /*!**************************************!*\
    !*** ./src/services/game.service.ts ***!
    \**************************************/

  /*! exports provided: GameService */

  /***/
  function srcServicesGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var GameService =
    /*#__PURE__*/
    function () {
      function GameService(http) {
        _classCallCheck(this, GameService);

        console.log("creating game service...");
        this.http = http;
      }

      _createClass(GameService, [{
        key: "init",
        value: function init(team, id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/init/' + team + '/' + id).toPromise();
        }
      }, {
        key: "play",
        value: function play(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/play/' + id).toPromise();
        }
      }, {
        key: "end",
        value: function end(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/end/' + id).toPromise();
        }
      }, {
        key: "getPlayerStats",
        value: function getPlayerStats(id, player) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/getPlayerStats/' + id + '/' + player).toPromise();
        }
      }, {
        key: "getAllGameIDs",
        value: function getAllGameIDs() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/getallgameids').toPromise();
        }
      }, {
        key: "getAllGameIDsAndStates",
        value: function getAllGameIDsAndStates() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/getallgameidsandstates').toPromise();
        }
      }, {
        key: "getLevelID",
        value: function getLevelID(id) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + 'api/game/getlevelid/' + id).toPromise();
        }
      }]);

      return GameService;
    }();

    GameService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GameService);
    /***/
  },

  /***/
  "./src/services/shopService.ts":
  /*!*************************************!*\
    !*** ./src/services/shopService.ts ***!
    \*************************************/

  /*! exports provided: ShopService */

  /***/
  function srcServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var ShopService =
    /*#__PURE__*/
    function () {
      function ShopService(http) {
        _classCallCheck(this, ShopService);

        this.http = http;
      }

      _createClass(ShopService, [{
        key: "buy",
        value: function buy(id, player, unit) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/buy/' + id + '/' + player + '/' + unit).toPromise();
        }
      }, {
        key: "getNewIncomePrice",
        value: function getNewIncomePrice(id, player) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/incomeprice/' + id + '/' + player).toPromise();
        }
      }, {
        key: "getNewHealthPrice",
        value: function getNewHealthPrice(id, player) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/healthprice/' + id + '/' + player).toPromise();
        }
      }]);

      return ShopService;
    }();
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
    /*! C:\repos\WebApi\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map