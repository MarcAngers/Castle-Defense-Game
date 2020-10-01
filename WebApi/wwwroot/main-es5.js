(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\repos\Castle Defense Game\Angular\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0eXL":
    /*!********************************!*\
      !*** ./src/app/game/castle.ts ***!
      \********************************/

    /*! exports provided: Castle */

    /***/
    function eXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Castle", function () {
        return Castle;
      });
      /* harmony import */


      var _collisioneffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./collisioneffect */
      "Jcmn");

      var Castle = /*#__PURE__*/function () {
        function Castle(x, y, team, side) {
          var _this = this;

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
            var x = _this.x;
            var y = _this.y;
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
            return new Castle(data.side == 1 ? 50 : 1250, 250, data.team, data.side, data.health, data.maxHealth, data.dead, _collisioneffect__WEBPACK_IMPORTED_MODULE_0__["CollisionEffect"].parseCollisionEffect(data.defendEffect));
          }
        }]);

        return Castle;
      }();
      /***/

    },

    /***/
    "5Gha":
    /*!**********************************************************!*\
      !*** ./src/app/character-bar/character-bar.component.ts ***!
      \**********************************************************/

    /*! exports provided: CharacterBarComponent */

    /***/
    function Gha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterBarComponent", function () {
        return CharacterBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _services_shopService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/shopService */
      "g20U");
      /* harmony import */


      var _services_character_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/character.service */
      "9lje");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CharacterBarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Increase Income:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Increase Castle Health:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", ctx_r0.incomePrice, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", ctx_r0.healthPrice, " ");
        }
      }

      function CharacterBarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Spectating Game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var CharacterBarComponent = /*#__PURE__*/function () {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return CharacterBarComponent.shopServices.getNewIncomePrice(this.id, this.side);

                    case 2:
                      this.incomePrice = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };

          this.getHealthPriceAsync = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return CharacterBarComponent.shopServices.getNewHealthPrice(this.id, this.side);

                    case 2:
                      this.healthPrice = _context2.sent;

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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
            CharacterBarComponent.shopServices = new _services_shopService__WEBPACK_IMPORTED_MODULE_3__["ShopService"](this.http);
            this.initBar();

            document.getElementById("income").onmouseup = function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return CharacterBarComponent.shopServices.buy(this.id, this.side, "income");

                      case 2:
                        _context3.next = 4;
                        return CharacterBarComponent.shopServices.getNewIncomePrice(this.id, this.side);

                      case 4:
                        this.incomePrice = _context3.sent;

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            };

            document.getElementById("health").onmouseup = function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return CharacterBarComponent.shopServices.buy(this.id, this.side, "health");

                      case 2:
                        _context4.next = 4;
                        return CharacterBarComponent.shopServices.getNewHealthPrice(this.id, this.side);

                      case 4:
                        this.healthPrice = _context4.sent;

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            };
          }
        }, {
          key: "initBar",
          value: function initBar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var fullTeam, _loop, i;

              return regeneratorRuntime.wrap(function _callee5$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      fullTeam = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].teamMap.get(this.team);
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                        var currentchar, charprice, charhtml;
                        return regeneratorRuntime.wrap(function _loop$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                currentchar = fullTeam[i];
                                _context5.next = 3;
                                return _this4.characterServices.getPrice(_this4.team, currentchar);

                              case 3:
                                charprice = _context5.sent;
                                charhtml = "<label class='price";
                                if (_this4.team == "black") charhtml += " black-unit";
                                charhtml += "'>$" + charprice + "</label><img src='../../assets/img/icons/" + currentchar + " icon.png'>";
                                document.getElementsByClassName("character")[i].innerHTML += charhtml;
                                document.getElementsByClassName("cooldown")[i].id = currentchar + "cooldown";
                                document.getElementsByClassName("character")[i].addEventListener("mouseup", function (e) {
                                  CharacterBarComponent.shopServices.buy(_this4.id, _this4.side, currentchar);
                                });

                              case 10:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _loop);
                      });
                      i = 0;

                    case 3:
                      if (!(i < 8)) {
                        _context6.next = 8;
                        break;
                      }

                      return _context6.delegateYield(_loop(), "t0", 5);

                    case 5:
                      i++;
                      _context6.next = 3;
                      break;

                    case 8:
                      this.getIncomePriceAsync();
                      this.getHealthPriceAsync();

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return CharacterBarComponent;
      }();

      CharacterBarComponent.ɵfac = function CharacterBarComponent_Factory(t) {
        return new (t || CharacterBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      CharacterBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CharacterBarComponent,
        selectors: [["app-character-bar"]],
        inputs: {
          side: "side",
          team: "team",
          id: "id"
        },
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["spectate", ""], ["id", "income"], ["id", "character-bar", 2, "display", "inline-block"], [1, "character", "first"], [1, "cooldown", 2, "top", "10px", "left", "316px"], [1, "character"], [1, "cooldown", 2, "top", "10px", "left", "426px"], [1, "cooldown", 2, "top", "10px", "left", "536px"], [1, "cooldown", 2, "top", "10px", "left", "646px"], [1, "cooldown", 2, "top", "10px", "left", "756px"], [1, "cooldown", 2, "top", "10px", "left", "866px"], [1, "cooldown", 2, "top", "10px", "left", "976px"], [1, "cooldown", 2, "top", "10px", "left", "1086px"], ["id", "health"], ["id", "spectate"]],
        template: function CharacterBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CharacterBarComponent_div_0_Template, 26, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CharacterBarComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.side < 3)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["#character-bar {\r\n    width: 870px;\r\n    height: 100px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n}\r\n#spectate {\r\n    width: 1498px;\r\n    height: 118px;\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n    font-family: arial;\r\n    font-size: 60px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n}\r\n#income { \r\n    float: left;\r\n    width: 304px;\r\n    height: 88px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: 1px solid black;\r\n}\r\n#income:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n#health {\r\n    float: right;\r\n    width: 304px;\r\n    height: 88px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: 1px solid black;\r\n}\r\n#health:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n.white {\r\n    background-color: #DDDDDD;\r\n}\r\n.black {\r\n    background-color: black;\r\n}\r\n.green {\r\n    background-color: green;\r\n}\r\n.blue {\r\n    background-color: blue;\r\n}\r\n.purple {\r\n    background-color: purple;\r\n}\r\n.yellow {\r\n    background-color: yellow;\r\n}\r\n.orange {\r\n    background-color: orangered;\r\n}\r\n.red {\r\n    background-color: red;\r\n}\r\n.character {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.character:hover {\r\n    cursor: pointer;\r\n}\r\n.cooldown {\r\n    display: none;\r\n    position: absolute;\r\n    height: 100px;\r\n    width: 100px;\r\n    background-color: black;\r\n    opacity: 0.5;\r\n}\r\n.first {\r\n    margin-left: 0px;\r\n}\r\n.hidden {\r\n    opacity: 0;\r\n}\r\n.price {\r\n    z-index: 3;\r\n    margin: 2px;\r\n    position: absolute;\r\n}\r\n.black-unit {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWJhci9jaGFyYWN0ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci1iYXIvY2hhcmFjdGVyLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJhY3Rlci1iYXIge1xyXG4gICAgd2lkdGg6IDg3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI3NwZWN0YXRlIHtcclxuICAgIHdpZHRoOiAxNDk4cHg7XHJcbiAgICBoZWlnaHQ6IDExOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYjE0YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaW5jb21lIHsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMDRweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiMTRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4jaW5jb21lOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGQzNmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2hlYWx0aCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzA0cHg7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYjE0YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuI2hlYWx0aDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkMzZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcclxufVxyXG4uYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnB1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuLnllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNoYXJhY3Rlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvb2xkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYmxhY2stdW5pdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CharacterBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-character-bar',
            templateUrl: './character-bar.component.html',
            styleUrls: ['./character-bar.component.css'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _services_character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, {
          side: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['side']
          }],
          team: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['team']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['id']
          }]
        });
      })();
      /***/

    },

    /***/
    "9lje":
    /*!*******************************************!*\
      !*** ./src/services/character.service.ts ***!
      \*******************************************/

    /*! exports provided: CharacterService */

    /***/
    function lje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterService", function () {
        return CharacterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CharacterService = /*#__PURE__*/function () {
        function CharacterService(http) {
          _classCallCheck(this, CharacterService);

          this.http = http;
          this.http = http;
        }

        _createClass(CharacterService, [{
          key: "getCharacter",
          value: function getCharacter(team, name) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/characters/getcharacter/' + team + '/' + name).toPromise();
          }
        }, {
          key: "getPrice",
          value: function getPrice(team, name) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/characters/getprice/' + team + '/' + name).toPromise();
          }
        }, {
          key: "getTeam",
          value: function getTeam(team) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/characters/getteam/' + team).toPromise();
          }
        }, {
          key: "getInfo",
          value: function getInfo(team, name) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/characters/getinfo/' + team + '/' + name).toPromise();
          }
        }]);

        return CharacterService;
      }();

      CharacterService.ɵfac = function CharacterService_Factory(t) {
        return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CharacterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CharacterService,
        factory: CharacterService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiURL: 'https://localhost:44364/'
      };
      /***/
    },

    /***/
    "G0mN":
    /*!*************************************************!*\
      !*** ./src/app/character-info/characterInfo.ts ***!
      \*************************************************/

    /*! exports provided: CharacterInfo */

    /***/
    function G0mN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterInfo", function () {
        return CharacterInfo;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var CharacterInfo = function CharacterInfo(team, name, characterServices) {
        var _this5 = this;

        _classCallCheck(this, CharacterInfo);

        this.characterServices = characterServices;

        this.constructAsync = function (team, name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var data;
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.characterServices.getInfo(team, name);

                  case 2:
                    data = _context7.sent;
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
                    return _context7.stop();
                }
              }
            }, _callee6, this);
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
    "J7Q4":
    /*!**********************************************!*\
      !*** ./src/app/welcome/welcome.component.ts ***!
      \**********************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function J7Q4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../cloud */
      "tlkb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent() {
          var _this6 = this;

          _classCallCheck(this, WelcomeComponent);

          this.loggedIn = false;

          this.draw_background = function () {
            if (_this6.nextCloud > 0) _this6.nextCloud--;else {
              _this6.nextCloud = Math.floor(Math.random() * 40);

              _this6.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_1__["Cloud"]());
            }

            _this6.context.drawImage(_this6.background, 0, 0);

            if (typeof _this6.clouds != 'undefined') _this6.clouds.forEach(function (cloud) {
              cloud.draw(_this6.context);
            });
            setTimeout(_this6.draw_background, 100);
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
            this.clouds = [new _cloud__WEBPACK_IMPORTED_MODULE_1__["Cloud"](100), new _cloud__WEBPACK_IMPORTED_MODULE_1__["Cloud"](600), new _cloud__WEBPACK_IMPORTED_MODULE_1__["Cloud"](900), new _cloud__WEBPACK_IMPORTED_MODULE_1__["Cloud"](1300)];
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

      WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
        return new (t || WelcomeComponent)();
      };

      WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WelcomeComponent,
        selectors: [["app-welcome"]],
        decls: 48,
        vars: 0,
        consts: [["id", "background-canvas", "width", "1500", "height", "500"], ["id", "main-view"], ["id", "main-button-container"], ["routerLink", "levelselect", "id", "sp"], ["routerLink", "multiplayer", "id", "mp"], ["id", "footer"], ["id", "footer-button-container"], ["id", "instructions"], ["routerLink", "teaminfo", "id", "character-stats"], ["routerLink", "typeinfo", "id", "type-effects"], ["id", "instruction-modal", 1, "modal"], [1, "modal-content"], [1, "close"], [1, "modal-header"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Great Castle Defense Game!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose Your Game Mode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Singleplayer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Multiplayer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Character Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Damage Type Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Instructions:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Different units attack with different types of damage. Damage may be increased or decreased based on the team of the recipient of the damage!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Singleplayer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Be careful though! The levels get difficult very quickly!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Multiplayer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Pit your best strategies against your friends in a 2-player battle!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Create a new game and you will be assigned a random Game ID!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Once you have your ID, your friend will be able to join your game by typing in the ID, or selecting it from the game browser!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "When the game is filled the battle begins!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["#main-view[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 500px;\r\n    z-index: 1;\r\n    display: flex;\r\n    position: absolute;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n    -webkit-animation: fadein 2s;    \r\n            animation: fadein 2s;\r\n}\r\n#background-canvas[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n#sp[_ngcontent-%COMP%] {\r\n    background-color: #00ee55;\r\n}\r\n#sp[_ngcontent-%COMP%]:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n#mp[_ngcontent-%COMP%] {\r\n    background-color: #0066ff;\r\n}\r\n#mp[_ngcontent-%COMP%]:hover {\r\n    background-color: #2288ff;\r\n    cursor: pointer;\r\n}\r\n#main-button-container[_ngcontent-%COMP%] {\r\n    width: 415px;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: flex;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n    -webkit-animation: fadein 2s;    \r\n            animation: fadein 2s;\r\n}\r\n#instructions[_ngcontent-%COMP%] {\r\n    background-color: #d38822;\r\n}\r\n#instructions[_ngcontent-%COMP%]:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#character-stats[_ngcontent-%COMP%] {\r\n    background-color: #d38822;\r\n}\r\n#character-stats[_ngcontent-%COMP%]:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#type-effects[_ngcontent-%COMP%] {\r\n    background-color: #d38822;\r\n}\r\n#type-effects[_ngcontent-%COMP%]:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#footer-button-container[_ngcontent-%COMP%] {\r\n    width: 710px;\r\n    margin: auto;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 5; \r\n    padding-top: 50px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; \r\n    height: 570px; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header[_ngcontent-%COMP%] {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7O0lBRXZCLDRCQUE0QixFQUFFLG9DQUFvQyxFQUNwQyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtZQUN2QyxvQkFBb0I7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7QUFDZDtBQUVBO0lBQ0ksT0FBTyxVQUFVLEVBQUU7SUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7QUFFQSxpQkFBaUI7QUFNakIsb0NBQW9DO0FBQ3BDO0lBQ0ksT0FBTyxVQUFVLEVBQUU7SUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7QUFFQSxzQkFBc0I7QUFNdEIsaUJBQWlCO0FBTWpCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCOztJQUV2Qiw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDcEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7WUFDdkMsb0JBQW9CO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7QUFFRSxrQkFBa0I7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi12aWV3IHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG59XHJcbiNiYWNrZ3JvdW5kLWNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggPCAxNiAqL1xyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogT3BlcmEgPCAxMi4xICovXHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbmgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI3NwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGVlNTU7XHJcbn1cclxuI3NwOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmZmNzc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XHJcbn1cclxuI21wOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjg4ZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21haW4tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDE1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjkxMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAyczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuICAgICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIE9wZXJhIDwgMTIuMSAqL1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAycztcclxufVxyXG4jaW5zdHJ1Y3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzg4MjI7XHJcbn1cclxuI2luc3RydWN0aW9uczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhYTQ0O1xyXG59XHJcbiNjaGFyYWN0ZXItc3RhdHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzODgyMjtcclxufVxyXG4jY2hhcmFjdGVyLXN0YXRzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWFhNDQ7XHJcbn1cclxuI3R5cGUtZWZmZWN0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM4ODIyO1xyXG59XHJcbiN0eXBlLWVmZmVjdHM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YWE0NDtcclxufVxyXG4jZm9vdGVyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nLi4uICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiA1OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogNTcwcHg7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiAgXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JNvz":
    /*!***************************!*\
      !*** ./src/app/player.ts ***!
      \***************************/

    /*! exports provided: Player */

    /***/
    function JNvz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Player", function () {
        return Player;
      });
      /* harmony import */


      var _game_castle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./game/castle */
      "0eXL");

      var Player = /*#__PURE__*/function () {
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
            this.castle = _game_castle__WEBPACK_IMPORTED_MODULE_0__["Castle"].parseCastle(data[id].castle);
          }
        }], [{
          key: "parsePlayer",
          value: function parsePlayer(data, id) {
            return new Player(data[id].money, data[id].income, data[id].incomePrice, data[id].healthPrice, data[id].side, _game_castle__WEBPACK_IMPORTED_MODULE_0__["Castle"].parseCastle(data[id].castle));
          }
        }]);

        return Player;
      }();
      /***/

    },

    /***/
    "Jcmn":
    /*!*****************************************!*\
      !*** ./src/app/game/collisioneffect.ts ***!
      \*****************************************/

    /*! exports provided: CollisionEffect */

    /***/
    function Jcmn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollisionEffect", function () {
        return CollisionEffect;
      });

      var CollisionEffect = /*#__PURE__*/function () {
        function CollisionEffect(stance, collisionType, color) {
          var _this7 = this;

          _classCallCheck(this, CollisionEffect);

          this.draw = function (context, x, y) {
            if (_this7.stance == "attack") {
              context.drawImage(_this7.icon, x, y);
              context.drawImage(_this7.attackEffect, x, y + 15);
            }

            if (_this7.stance == "defend") {
              context.drawImage(_this7.icon, x + 30, y);
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
    "KKJv":
    /*!********************************************************!*\
      !*** ./src/app/level-select/level-select.component.ts ***!
      \********************************************************/

    /*! exports provided: LevelSelectComponent */

    /***/
    function KKJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelSelectComponent", function () {
        return LevelSelectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cloud */
      "tlkb");
      /* harmony import */


      var src_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/game.service */
      "Xq0X");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../team-select/team-select.component */
      "tUNS");

      var _c0 = function _c0() {
        return [""];
      };

      var LevelSelectComponent = /*#__PURE__*/function () {
        function LevelSelectComponent(gameServices, router) {
          var _this8 = this;

          _classCallCheck(this, LevelSelectComponent);

          this.gameServices = gameServices;
          this.router = router;
          this.team = "white";
          this.id = 1;
          this.side = 1;

          this.checkGame = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      document.getElementById("start").addEventListener("click", function () {});
                      this.updateTeam();
                      _context8.next = 4;
                      return this.gameServices.getLevelID(this.id);

                    case 4:
                      this.id = _context8.sent;
                      this.router.navigate(["../game/", this.id, this.team, this.side]);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee7, this);
            }));
          };

          this.updateTeam = function () {
            _this8.team = document.getElementsByClassName("selected")[1].id;
          };

          this.draw_background = function () {
            if (_this8.nextCloud > 0) _this8.nextCloud--;else {
              _this8.nextCloud = Math.floor(Math.random() * 40);

              _this8.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"]());
            }

            _this8.context.drawImage(_this8.background, 0, 0);

            if (typeof _this8.clouds != 'undefined') _this8.clouds.forEach(function (cloud) {
              cloud.draw(_this8.context);
            });
            setTimeout(_this8.draw_background, 100);
          };
        }

        _createClass(LevelSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            var levels = document.getElementsByClassName("level");

            for (var i = 0; i < levels.length; i++) {
              levels[i].addEventListener("click", function (e) {
                var level = e.target;
                _this9.id = Number(level.innerText);

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

            this.draw_background();
          }
        }]);

        return LevelSelectComponent;
      }();

      LevelSelectComponent.ɵfac = function LevelSelectComponent_Factory(t) {
        return new (t || LevelSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LevelSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LevelSelectComponent,
        selectors: [["app-level-select"]],
        decls: 54,
        vars: 2,
        consts: [["id", "background-canvas", "width", "1500", "height", "500"], ["id", "main-view"], ["id", "level-select"], [1, "level", "selected"], [1, "level"], ["id", "start", 3, "click"], ["id", "footer"], ["id", "footer-button-container"], ["id", "back", 3, "routerLink"], ["id", "instructions"], ["id", "instruction-modal", 1, "modal"], [1, "modal-content"], [1, "close"], [1, "modal-header"]],
        template: function LevelSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choose your level!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-team-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LevelSelectComponent_Template_button_click_22_listener() {
              return ctx.checkGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start Game!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Back to Main Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Instructions:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Singleplayer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Be careful though! The levels get difficult very quickly!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Multiplayer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Pit your best strategies against your friends in a 2-player battle!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Create a new game and you will be assigned a random Game ID!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Once you have your ID, your friend will be able to join your game and the battle begins!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_team_select_team_select_component__WEBPACK_IMPORTED_MODULE_5__["TeamSelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n.level[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n    margin: 10px;\r\n    background-color: white;\r\n    text-align: center;\r\n    font-size: 80px;\r\n}\r\n.selected[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    border: 10px solid lightgreen;\r\n}\r\n#main-view[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 500px;\r\n    z-index: 1;\r\n    position: absolute;\r\n}\r\n#background-canvas[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n#start[_ngcontent-%COMP%] {\r\n    background-color: #00ee55;\r\n    margin-left: 671px;\r\n    margin-right: 50px;\r\n}\r\n#start[_ngcontent-%COMP%]:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n#level-select[_ngcontent-%COMP%] {\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    margin-left: 270px;\r\n    padding: 10px;\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n}\r\n#instructions[_ngcontent-%COMP%] {\r\n    background-color: #d38822;\r\n}\r\n#instructions[_ngcontent-%COMP%]:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#back[_ngcontent-%COMP%] {\r\n    background-color: #ff2222;\r\n}\r\n#back[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff6622;\r\n}\r\n#footer-button-container[_ngcontent-%COMP%] {\r\n    width: 475px;\r\n    margin: auto;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 5; \r\n    padding-top: 50px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; \r\n    height: 570px; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header[_ngcontent-%COMP%] {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV2ZWwtc2VsZWN0L2xldmVsLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7QUFFRSxrQkFBa0I7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGV2ZWwtc2VsZWN0L2xldmVsLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5sZXZlbCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbiNtYWluLXZpZXcge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiNiYWNrZ3JvdW5kLWNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuI3N0YXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGVlNTU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjcxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuI3N0YXJ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmZmNzc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xldmVsLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTEyYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG4jaW5zdHJ1Y3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzg4MjI7XHJcbn1cclxuI2luc3RydWN0aW9uczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhYTQ0O1xyXG59XHJcbiNiYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XHJcbn1cclxuI2JhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYyMjtcclxufVxyXG4jZm9vdGVyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQ3NXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nLi4uICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiA1OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogNTcwcHg7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4gIFxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiAgXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LevelSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-level-select',
            templateUrl: './level-select.component.html',
            styleUrls: ['./level-select.component.css']
          }]
        }], function () {
          return [{
            type: src_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NKP/":
    /*!************************************************!*\
      !*** ./src/app/typeinfo/typeinfo.component.ts ***!
      \************************************************/

    /*! exports provided: TypeinfoComponent */

    /***/
    function NKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeinfoComponent", function () {
        return TypeinfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return [""];
      };

      var TypeinfoComponent = /*#__PURE__*/function () {
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

      TypeinfoComponent.ɵfac = function TypeinfoComponent_Factory(t) {
        return new (t || TypeinfoComponent)();
      };

      TypeinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TypeinfoComponent,
        selectors: [["app-typeinfo"]],
        decls: 31,
        vars: 2,
        consts: [["id", "type-info-view"], ["id", "footer"], ["id", "footer-button-container"], ["id", "back", 3, "routerLink"], ["id", "instruction-modal", 1, "modal"], [1, "modal-content"], [1, "close"], [1, "modal-header"]],
        template: function TypeinfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to Main Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type Effects:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In the game each unit is a member of a colored team, but will attack with a specific type of attack.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A unit does not necessarily attack with the same type of damage as its team!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Different teams are strong or weak against attacks of different types, so knowing these effects can be a great asset in battle!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Some Attack types do bonus damage to towers as well, while other teams will gain a bonus to the HP of their castle at the beginning of the game!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This page lists all the type effects in the game.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Legend:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Colors on the left side of an arrow are attacking colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Colors on the right side of an arrow are defending colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "A normal arrow denotes a type ADVANTAGE (enhanced damage)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "An X'd arrow denotes a type DISADVANTAGE (mitigated damage)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["button[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#type-info-view[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 500px;\r\n    background-image: url('typeeffects with background.png');\r\n}\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%] {\r\n    background-color: #ff2222;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff6622;\r\n}\r\n\r\n#footer-button-container[_ngcontent-%COMP%] {\r\n    width: 290px;\r\n    margin: auto;\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    position: fixed; \r\n    z-index: 5; \r\n    padding-top: 50px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; \r\n    height: 570px; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwZWluZm8vdHlwZWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix3REFBb0Y7QUFDeEY7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsaUJBQWlCLEVBQUUsd0JBQXdCO0lBQzNDLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYSxFQUFFLGVBQWU7SUFDOUIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsZ0NBQWdDO0FBQ3BDOztBQUVFLGtCQUFrQjs7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBQ0E7TUFDTSxlQUFlO01BQ2YsZUFBZTtBQUNyQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3R5cGVpbmZvL3R5cGVpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jdHlwZS1pbmZvLXZpZXcge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQvdHlwZWVmZmVjdHMgd2l0aCBiYWNrZ3JvdW5kLnBuZ1wiKTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI5MTJjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiNiYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XHJcbn1cclxuI2JhY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYyMjtcclxufVxyXG4jZm9vdGVyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nLi4uICovXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDU7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDE1MDBweDsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiA1NzBweDsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbn1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiAgXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuICBcclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeinfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-typeinfo',
            templateUrl: './typeinfo.component.html',
            styleUrls: ['./typeinfo.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "OV8q":
    /*!******************************!*\
      !*** ./src/app/game/unit.ts ***!
      \******************************/

    /*! exports provided: Unit */

    /***/
    function OV8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Unit", function () {
        return Unit;
      });
      /* harmony import */


      var _collisioneffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./collisioneffect */
      "Jcmn");

      var Unit = /*#__PURE__*/function () {
        function Unit(name, side, health, maxHealth, size, x) {
          var _this10 = this;

          var y = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 400;
          var aeffect = arguments.length > 7 ? arguments[7] : undefined;
          var deffect = arguments.length > 8 ? arguments[8] : undefined;

          _classCallCheck(this, Unit);

          this.equals = function (obj) {
            if (_this10.side == obj.side && _this10.name == obj.name && _this10.maxHealth == obj.maxHealth && _this10.size == obj.size && _this10.x == obj.x && _this10.y == obj.y) return true;
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
              units.push(new Unit(data[i].name, data[i].side, data[i].health, data[i].maxHealth, data[i].size, data[i].x, data[i].y, _collisioneffect__WEBPACK_IMPORTED_MODULE_0__["CollisionEffect"].parseCollisionEffect(data[i].attackEffect), _collisioneffect__WEBPACK_IMPORTED_MODULE_0__["CollisionEffect"].parseCollisionEffect(data[i].defendEffect)));
            }

            return units;
          }
        }]);

        return Unit;
      }();
      /***/

    },

    /***/
    "SeMY":
    /*!******************************************************!*\
      !*** ./src/app/multiplayer/multiplayer.component.ts ***!
      \******************************************************/

    /*! exports provided: MultiplayerComponent */

    /***/
    function SeMY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiplayerComponent", function () {
        return MultiplayerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../cloud */
      "tlkb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/game.service */
      "Xq0X");
      /* harmony import */


      var _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../team-select/team-select.component */
      "tUNS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MultiplayerComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No games are currently in session :/");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MultiplayerComponent_ng_template_52_div_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MultiplayerComponent_ng_template_52_div_0_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Full");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MultiplayerComponent_ng_template_52_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiplayerComponent_ng_template_52_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var id_r4 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.setId(id_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiplayerComponent_ng_template_52_div_0_span_3_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MultiplayerComponent_ng_template_52_div_0_span_4_Template, 2, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var id_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Game: ", id_r4, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.allIDsandStates[id_r4] == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.allIDsandStates[id_r4] == 2);
        }
      }

      function MultiplayerComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MultiplayerComponent_ng_template_52_div_0_Template, 5, 3, "div", 18);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.gameIDs);
        }
      }

      var _c0 = function _c0() {
        return [""];
      };

      var MultiplayerComponent = /*#__PURE__*/function () {
        function MultiplayerComponent(router, gameServices) {
          var _this11 = this;

          _classCallCheck(this, MultiplayerComponent);

          this.router = router;
          this.gameServices = gameServices;
          this.team = "white";
          this.id = 1000;
          this.allIDsandStates = {};
          this.gameIDs = [];

          this.updateGamesAsync = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var jsonData, obj;
              return regeneratorRuntime.wrap(function _callee8$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.gameServices.getAllGameIDsAndStates();

                    case 2:
                      jsonData = _context9.sent;
                      obj = jsonData;
                      this.allIDsandStates = obj;
                      if (Object.keys(this.allIDsandStates)) this.gameIDs = Object.keys(this.allIDsandStates);else this.gameIDs = [];

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee8, this);
            }));
          };

          this.setId = function (id) {
            _this11.id = id;
            document.getElementById("game-browser-modal").style.display = "none";
            document.getElementById("game-id").value = _this11.id;
            document.getElementById("jg").classList.remove("unverified");
          };

          this.updateTeam = function () {
            _this11.team = document.getElementsByClassName("selected")[0].id;
          };

          this.getNewId = function () {
            _this11.id = Math.floor(Math.random() * 9000 + 1000);

            while (_this11.id in _this11.allIDsandStates) {
              _this11.id = Math.floor(Math.random() * 9000 + 1000);
            }
          };

          this.tryId = function () {
            _this11.id = document.getElementById("game-id").value;
            if (_this11.id < 1000 || _this11.id > 9999) return false;
            if (!(_this11.id in _this11.allIDsandStates)) return false;
            if (_this11.allIDsandStates[_this11.id] != 1) return false;
            return true;
          };

          this.newGame = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.updateGamesAsync();

                    case 2:
                      this.getNewId();
                      this.updateTeam();
                      this.router.navigate(["../game", this.id, this.team, 1]);

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee9, this);
            }));
          };

          this.joinGame = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var side;
              return regeneratorRuntime.wrap(function _callee10$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      side = 2;
                      _context11.next = 3;
                      return this.updateGamesAsync();

                    case 3:
                      if (this.tryId()) {
                        _context11.next = 10;
                        break;
                      }

                      if (!(this.allIDsandStates[this.id] == 2)) {
                        _context11.next = 8;
                        break;
                      }

                      side = 3;
                      _context11.next = 10;
                      break;

                    case 8:
                      alert("The ID entered is invalid! Check to make sure the entered ID is correct.\n(or it's just a bug lol)");
                      return _context11.abrupt("return");

                    case 10:
                      this.updateTeam();
                      this.router.navigate(["../game", this.id, this.team, side]);

                    case 12:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee10, this);
            }));
          };

          this.draw_background = function () {
            if (_this11.nextCloud > 0) _this11.nextCloud--;else {
              _this11.nextCloud = Math.floor(Math.random() * 40);

              _this11.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_2__["Cloud"]());
            }

            _this11.context.drawImage(_this11.background, 0, 0);

            if (typeof _this11.clouds != 'undefined') _this11.clouds.forEach(function (cloud) {
              cloud.draw(_this11.context);
            });
            setTimeout(_this11.draw_background, 100);
          };
        }

        _createClass(MultiplayerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

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
              _this12.updateGamesAsync();

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

      MultiplayerComponent.ɵfac = function MultiplayerComponent_Factory(t) {
        return new (t || MultiplayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]));
      };

      MultiplayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MultiplayerComponent,
        selectors: [["app-multiplayer"]],
        decls: 54,
        vars: 4,
        consts: [["id", "background-canvas", "width", "1500", "height", "500"], ["id", "main-view"], ["id", "ng", 3, "click"], ["id", "jg", 1, "unverified", 3, "click"], ["for", "game-id", "id", "game-id-label"], ["type", "number", "min", "1000", "max", "9999", "id", "game-id", "placeholder", "----", "name", "game-id"], ["id", "game-browser"], ["id", "footer"], ["id", "footer-button-container"], ["id", "back", 3, "routerLink"], ["id", "instructions"], ["id", "instruction-modal", 1, "modal"], [1, "modal-content"], [1, "close"], [1, "modal-header"], ["id", "game-browser-modal", 1, "modal"], [4, "ngIf", "ngIfElse"], ["showGameList", ""], ["class", "game-browser-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "game-browser-item", 3, "click"], [1, "game-id"], ["class", "game-state", 4, "ngIf"], [1, "game-state"]],
        template: function MultiplayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Multiplayer!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-team-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiplayerComponent_Template_button_click_5_listener() {
              return ctx.newGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "New Game!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiplayerComponent_Template_button_click_7_listener() {
              return ctx.joinGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Join Game!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Game ID:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Game Browser");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Back to Main Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Instructions:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "This is a castle defense game, the aim of the game is to power up and purchase units to attack the enemy castle while keeping your own castle safe!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Singleplayer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Choose your favorite team and battle against a variety of opponents in 8 different levels who will send units at you in a pre-defined pattern!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Be careful though! The levels get difficult very quickly!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Multiplayer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Pit your best strategies against your friends in a 2-player battle!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Create a new game and you will be assigned a random Game ID!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Once you have your ID, your friend will be able to join your game and the battle begins!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h1", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Game Browser");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, MultiplayerComponent_div_51_Template, 3, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, MultiplayerComponent_ng_template_52_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameIDs.length == 0)("ngIfElse", _r1);
          }
        },
        directives: [_team_select_team_select_component__WEBPACK_IMPORTED_MODULE_5__["TeamSelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["button[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n    color: #666666;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    margin-left: 10px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-family: arial;\r\n    font-size: 20px;\r\n    margin-left: 30px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n.game-browser-item[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n}\r\n.game-browser-item[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    background-color: #dcdcdc;\r\n}\r\n.game-state[_ngcontent-%COMP%] {\r\n    margin-left: 25px;\r\n}\r\n#main-view[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 500px;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n#background-canvas[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n#ng[_ngcontent-%COMP%] {\r\n    margin-left: 300px;\r\n    background-color: #0066ff;\r\n}\r\n#ng[_ngcontent-%COMP%]:hover {\r\n    background-color: #2288ff;\r\n}\r\n#jg.unverified[_ngcontent-%COMP%] {\r\n    background-color: #ff2222;\r\n}\r\n#jg.unverified[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff6622;\r\n}\r\n#jg[_ngcontent-%COMP%] {\r\n    background-color: #00ee55;\r\n}\r\n#jg[_ngcontent-%COMP%]:hover {\r\n    background-color: #22ff77;\r\n}\r\n#game-browser[_ngcontent-%COMP%] {\r\n    background-color: #440088;\r\n}\r\n#game-browser[_ngcontent-%COMP%]:hover {\r\n    background-color: #4422aa;\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1500px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n}\r\n#instructions[_ngcontent-%COMP%] {\r\n    background-color: #d38822;\r\n}\r\n#instructions[_ngcontent-%COMP%]:hover {\r\n    background-color: #f5aa44;\r\n}\r\n#back[_ngcontent-%COMP%] {\r\n    background-color: #ff2222;\r\n}\r\n#back[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff6622;\r\n}\r\n#footer-button-container[_ngcontent-%COMP%] {\r\n    width: 475px;\r\n    margin: auto;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 5; \r\n    padding-top: 50px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; \r\n    height: 570px; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 80%;\r\n    height: 80%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header[_ngcontent-%COMP%] {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhLEVBQUUsZUFBZTtJQUM5QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtJQUN4RCxnQ0FBZ0M7QUFDcEM7QUFFRSxrQkFBa0I7QUFDcEI7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtNQUNNLGVBQWU7TUFDZixlQUFlO0FBQ3JCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uZ2FtZS1icm93c2VyLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5nYW1lLWJyb3dzZXItaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG59XHJcbi5nYW1lLXN0YXRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4jbWFpbi12aWV3IHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4jYmFja2dyb3VuZC1jYW52YXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuI25nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmY7XHJcbn1cclxuI25nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjg4ZmY7XHJcbn1cclxuI2pnLnVudmVyaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIyMjtcclxufVxyXG4jamcudW52ZXJpZmllZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjIyO1xyXG59XHJcbiNqZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlZTU1O1xyXG59XHJcbiNqZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJmZjc3O1xyXG59XHJcbiNnYW1lLWJyb3dzZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MDA4ODtcclxufVxyXG4jZ2FtZS1icm93c2VyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDIyYWE7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjkxMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuI2luc3RydWN0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM4ODIyO1xyXG59XHJcbiNpbnN0cnVjdGlvbnM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YWE0NDtcclxufVxyXG4jYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xyXG59XHJcbiNiYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MjI7XHJcbn1cclxuI2Zvb3Rlci1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0NzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogTW9kYWwgU3R5bGluZy4uLiAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgei1pbmRleDogNTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDU3MHB4OyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuICBcclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4gIFxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultiplayerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-multiplayer',
            templateUrl: './multiplayer.component.html',
            styleUrls: ['./multiplayer.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/character.service */
      "9lje");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(http, characterServices
        /*, private userServices: UserService*/
        ) {
          var _this13 = this;

          _classCallCheck(this, AppComponent);

          this.http = http;
          this.characterServices = characterServices;

          this.setupTeamMap = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.t0 = AppComponent.teamMap;
                      _context12.next = 3;
                      return this.characterServices.getTeam("white");

                    case 3:
                      _context12.t1 = _context12.sent;

                      _context12.t0.set.call(_context12.t0, "white", _context12.t1);

                      _context12.t2 = AppComponent.teamMap;
                      _context12.next = 8;
                      return this.characterServices.getTeam("green");

                    case 8:
                      _context12.t3 = _context12.sent;

                      _context12.t2.set.call(_context12.t2, "green", _context12.t3);

                      _context12.t4 = AppComponent.teamMap;
                      _context12.next = 13;
                      return this.characterServices.getTeam("blue");

                    case 13:
                      _context12.t5 = _context12.sent;

                      _context12.t4.set.call(_context12.t4, "blue", _context12.t5);

                      _context12.t6 = AppComponent.teamMap;
                      _context12.next = 18;
                      return this.characterServices.getTeam("purple");

                    case 18:
                      _context12.t7 = _context12.sent;

                      _context12.t6.set.call(_context12.t6, "purple", _context12.t7);

                      _context12.t8 = AppComponent.teamMap;
                      _context12.next = 23;
                      return this.characterServices.getTeam("yellow");

                    case 23:
                      _context12.t9 = _context12.sent;

                      _context12.t8.set.call(_context12.t8, "yellow", _context12.t9);

                      _context12.t10 = AppComponent.teamMap;
                      _context12.next = 28;
                      return this.characterServices.getTeam("orange");

                    case 28:
                      _context12.t11 = _context12.sent;

                      _context12.t10.set.call(_context12.t10, "orange", _context12.t11);

                      _context12.t12 = AppComponent.teamMap;
                      _context12.next = 33;
                      return this.characterServices.getTeam("red");

                    case 33:
                      _context12.t13 = _context12.sent;

                      _context12.t12.set.call(_context12.t12, "red", _context12.t13);

                      _context12.t14 = AppComponent.teamMap;
                      _context12.next = 38;
                      return this.characterServices.getTeam("black");

                    case 38:
                      _context12.t15 = _context12.sent;

                      _context12.t14.set.call(_context12.t14, "black", _context12.t15);

                    case 40:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee11, this);
            }));
          }; //AppComponent.user = new User(this.userServices);

        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            AppComponent.teamMap = new Map();
            this.setupTeamMap();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["id", "view-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["#view-container[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 620px;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlldy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogNjIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Xq0X":
    /*!**************************************!*\
      !*** ./src/services/game.service.ts ***!
      \**************************************/

    /*! exports provided: GameService */

    /***/
    function Xq0X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameService", function () {
        return GameService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GameService = /*#__PURE__*/function () {
        function GameService(http) {
          _classCallCheck(this, GameService);

          console.log("creating game service...");
          this.http = http;
        }

        _createClass(GameService, [{
          key: "init",
          value: function init(team, id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/init/' + team + '/' + id).toPromise();
          }
        }, {
          key: "play",
          value: function play(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/play/' + id).toPromise();
          }
        }, {
          key: "end",
          value: function end(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/end/' + id).toPromise();
          }
        }, {
          key: "getPlayerStats",
          value: function getPlayerStats(id, player) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/getPlayerStats/' + id + '/' + player).toPromise();
          }
        }, {
          key: "getAllGameIDs",
          value: function getAllGameIDs() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/getallgameids').toPromise();
          }
        }, {
          key: "getAllGameIDsAndStates",
          value: function getAllGameIDsAndStates() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/getallgameidsandstates').toPromise();
          }
        }, {
          key: "getLevelID",
          value: function getLevelID(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'api/game/getlevelid/' + id).toPromise();
          }
        }]);

        return GameService;
      }();

      GameService.ɵfac = function GameService_Factory(t) {
        return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GameService,
        factory: GameService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./character-bar/character-bar.component */
      "5Gha");
      /* harmony import */


      var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome/welcome.component */
      "J7Q4");
      /* harmony import */


      var _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./team-select/team-select.component */
      "tUNS");
      /* harmony import */


      var _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./level-select/level-select.component */
      "KKJv");
      /* harmony import */


      var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./multiplayer/multiplayer.component */
      "SeMY");
      /* harmony import */


      var _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./character-info/character-info.component */
      "gIxv");
      /* harmony import */


      var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./team-info/team-info.component */
      "cdf7");
      /* harmony import */


      var _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./typeinfo/typeinfo.component */
      "NKP/");
      /* harmony import */


      var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./game/game.component */
      "jBAD");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [HTMLCanvasElement, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_8__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_9__["MultiplayerComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_11__["TeamInfoComponent"], _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_12__["TypeinfoComponent"], _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_10__["CharacterInfoComponent"], _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_5__["CharacterBarComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_7__["TeamSelectComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_8__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_9__["MultiplayerComponent"], _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_10__["CharacterInfoComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_11__["TeamInfoComponent"], _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_12__["TypeinfoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"], _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_5__["CharacterBarComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_7__["TeamSelectComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_8__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_9__["MultiplayerComponent"], _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_10__["CharacterInfoComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_11__["TeamInfoComponent"], _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_12__["TypeinfoComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [HTMLCanvasElement, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cdf7":
    /*!**************************************************!*\
      !*** ./src/app/team-info/team-info.component.ts ***!
      \**************************************************/

    /*! exports provided: TeamInfoComponent */

    /***/
    function cdf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamInfoComponent", function () {
        return TeamInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../team-select/team-select.component */
      "tUNS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1, a2) {
        return ["../characterinfo", a1, a2];
      };

      function TeamInfoComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.currentTeam, unit_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/icons/", unit_r1, " icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c1 = function _c1() {
        return [""];
      };

      var TeamInfoComponent = /*#__PURE__*/function () {
        function TeamInfoComponent() {
          var _this14 = this;

          _classCallCheck(this, TeamInfoComponent);

          this.currentTeam = "white";

          this.updateTeam = function () {
            _this14.currentTeam = document.getElementsByClassName("selected")[0].id;
            _this14.currentUnits = _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].teamMap.get(_this14.currentTeam);
            document.getElementById("team-info-view").style.backgroundColor = "" + _this14.currentTeam;
          };
        }

        _createClass(TeamInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.updateTeam();

            document.getElementById("team-info-view").onmouseup = function () {
              _this15.updateTeam();
            };
          }
        }]);

        return TeamInfoComponent;
      }();

      TeamInfoComponent.ɵfac = function TeamInfoComponent_Factory(t) {
        return new (t || TeamInfoComponent)();
      };

      TeamInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeamInfoComponent,
        selectors: [["app-team-info"]],
        decls: 10,
        vars: 3,
        consts: [["id", "team-info-view"], ["id", "character-select-bar"], ["style", "display: inline-block; margin: 10px;", 4, "ngFor", "ngForOf"], ["id", "footer"], ["id", "footer-button-container"], ["id", "back", 3, "routerLink"], [2, "display", "inline-block", "margin", "10px"], [3, "routerLink"], [3, "src"]],
        template: function TeamInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a Character to see details on them!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamInfoComponent_div_4_Template, 3, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-team-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to Main Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentUnits);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _team_select_team_select_component__WEBPACK_IMPORTED_MODULE_3__["TeamSelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["#team-info-view[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 500px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    color: #888888;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#character-select-bar[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    margin: auto;\r\n    margin-top: 0px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n#back[_ngcontent-%COMP%] {\r\n    background-color: #ff2222;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff6622;\r\n}\r\n\r\n#footer-button-container[_ngcontent-%COMP%] {\r\n    width: 290px;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1pbmZvL3RlYW0taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlYW0taW5mby90ZWFtLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0ZWFtLWluZm8tdmlldyB7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNjaGFyYWN0ZXItc2VsZWN0LWJhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxNTAycHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiOTEyYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyMjIyO1xyXG59XHJcbiNiYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MjI7XHJcbn1cclxuI2Zvb3Rlci1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-team-info',
            templateUrl: './team-info.component.html',
            styleUrls: ['./team-info.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "g20U":
    /*!*************************************!*\
      !*** ./src/services/shopService.ts ***!
      \*************************************/

    /*! exports provided: ShopService */

    /***/
    function g20U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopService", function () {
        return ShopService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      var ShopService = /*#__PURE__*/function () {
        function ShopService(http) {
          _classCallCheck(this, ShopService);

          this.http = http;
        }

        _createClass(ShopService, [{
          key: "buy",
          value: function buy(id, player, unit) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'api/game/buy/' + id + '/' + player + '/' + unit).toPromise();
          }
        }, {
          key: "getNewIncomePrice",
          value: function getNewIncomePrice(id, player) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'api/game/incomeprice/' + id + '/' + player).toPromise();
          }
        }, {
          key: "getNewHealthPrice",
          value: function getNewHealthPrice(id, player) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'api/game/healthprice/' + id + '/' + player).toPromise();
          }
        }]);

        return ShopService;
      }();
      /***/

    },

    /***/
    "gIxv":
    /*!************************************************************!*\
      !*** ./src/app/character-info/character-info.component.ts ***!
      \************************************************************/

    /*! exports provided: CharacterInfoComponent */

    /***/
    function gIxv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterInfoComponent", function () {
        return CharacterInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _characterInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./characterInfo */
      "G0mN");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_character_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/character.service */
      "9lje");

      var _c0 = function _c0(a1, a2) {
        return ["/characterinfo/", a1, a2];
      };

      var _c1 = function _c1() {
        return ["/teaminfo"];
      };

      var CharacterInfoComponent = /*#__PURE__*/function () {
        function CharacterInfoComponent(route, characterServices) {
          _classCallCheck(this, CharacterInfoComponent);

          this.route = route;
          this.characterServices = characterServices;
          this.team = "white";
          this.name = "doggo";
          this.character = new _characterInfo__WEBPACK_IMPORTED_MODULE_1__["CharacterInfo"]("white", "unknown", this.characterServices);
          this.next = "doggo";
          this.prev = "doggo";
        }

        _createClass(CharacterInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.route.paramMap.subscribe(function (map) {
              var mapParams = map;
              _this16.team = mapParams.params.team;
              _this16.name = mapParams.params.name;
              _this16.character = new _characterInfo__WEBPACK_IMPORTED_MODULE_1__["CharacterInfo"](_this16.team, _this16.name, _this16.characterServices);
              _this16.fullTeam = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].teamMap.get(_this16.team);

              var index = _this16.fullTeam.indexOf(_this16.name);

              _this16.next = _this16.fullTeam[(index + 1) % 8];
              if (index == 0) _this16.prev = _this16.fullTeam[7];else _this16.prev = _this16.fullTeam[index - 1];
              document.getElementById("main-view").style.backgroundColor = _this16.team;
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {}
        }]);

        return CharacterInfoComponent;
      }();

      CharacterInfoComponent.ɵfac = function CharacterInfoComponent_Factory(t) {
        return new (t || CharacterInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]));
      };

      CharacterInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CharacterInfoComponent,
        selectors: [["app-character-info"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 47,
        vars: 21,
        consts: [["id", "main-view"], [1, "info-container"], [1, "image", 2, "float", "left", "margin", "0px", "width", "200px"], [3, "src"], [1, "info"], ["id", "info-headers"], ["id", "info-values"], ["id", "damage-type"], ["id", "footer"], ["id", "footer-content"], [1, "image-link", 3, "routerLink"], ["id", "prev-info", 3, "src"], ["id", "back", 3, "routerLink"], ["id", "next-info", 3, "src"]],
        template: function CharacterInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Team:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Damage:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Damage Type:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Health:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Speed:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Back to Team View");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.character.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/units/", ctx.name, "1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.team, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.damage, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.type, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.health, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.speed, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.character.description, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.team, ctx.prev));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/icons/", ctx.prev, " icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.team, ctx.next));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/icons/", ctx.next, " icon.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["#main-view[_ngcontent-%COMP%] {\r\n    width: 1500px;\r\n    height: 500px;\r\n    border: 1px solid black;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    color: #888888;\r\n    font-family: arial;\r\n    font-size: 50px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 25px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    margin: auto;\r\n    color: #888888;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    width: 700px;\r\n    float: right;\r\n}\r\n\r\n.image-link[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 10px;\r\n    float: left;\r\n}\r\n\r\n#info-headers[_ngcontent-%COMP%] {\r\n    float: left;\r\n    flex-direction: column;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    width: 30%;\r\n}\r\n\r\n#info-values[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    flex-direction: column;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    width: 70%;\r\n}\r\n\r\n#damage-type[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n    height: 22px;\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n}\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    background-color: #0b912c;\r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n#footer-content[_ngcontent-%COMP%] {\r\n    width: 510px;\r\n    margin: auto;\r\n}\r\n\r\n#back[_ngcontent-%COMP%] {\r\n    background-color: #ff2222;\r\n    float: left;\r\n}\r\n\r\n#back[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff6622;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWluZm8vY2hhcmFjdGVyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci1pbmZvL2NoYXJhY3Rlci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi12aWV3IHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5pbWFnZS1saW5rIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jaW5mby1oZWFkZXJzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4jaW5mby12YWx1ZXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuI2RhbWFnZS10eXBlIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTUwMnB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjkxMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxufVxyXG4jZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDUxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiNiYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjIyMjI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jYmFjazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjIyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-character-info',
            templateUrl: './character-info.component.html',
            styleUrls: ['./character-info.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _services_character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jBAD":
    /*!****************************************!*\
      !*** ./src/app/game/game.component.ts ***!
      \****************************************/

    /*! exports provided: GameComponent */

    /***/
    function jBAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
        return GameComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./unit */
      "OV8q");
      /* harmony import */


      var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../player */
      "JNvz");
      /* harmony import */


      var _castle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./castle */
      "0eXL");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var _cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../cloud */
      "tlkb");
      /* harmony import */


      var _character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../character-bar/character-bar.component */
      "5Gha");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_game_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/game.service */
      "Xq0X");

      var _c0 = function _c0() {
        return ["/"];
      }; //import { AppComponent } from '../app.component';


      var GameComponent = /*#__PURE__*/function () {
        function GameComponent(route, gameServices) {
          var _this17 = this;

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.gameServices.init(this.team, this.id);

                    case 2:
                      if (this.id < 1000 || this.id > 10000) this.start();else this.waitForPlayer2();

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee12, this);
            }));
          };

          this.waitForPlayer2 = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.draw_background(false);
                      if (this.player2.income < 0.01) setTimeout(this.waitForPlayer2, 250);else this.start();

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee13, this);
            }));
          };

          this.start = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.gameServices.play(this.id);

                    case 2:
                      window.requestAnimationFrame(function () {
                        return _this18.draw();
                      });

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee14, this);
            }));
          };

          this.reset = function () {
            _this17.player1 = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_4__["Castle"](0, 0, "white", 0, 0, 0));
            _this17.player2 = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_4__["Castle"](0, 0, "white", 0, 0, 0));
            _this17.units = new Array();

            _this17.route.paramMap.subscribe(function (map) {
              var mapParams = map;
              _this17.id = mapParams.params.id;
              _this17.team = mapParams.params.team;
              _this17.side = mapParams.params.side;
              if (_this17.side == 1) _this17.connectedPlayer = _this17.player1;else if (_this17.side == 2) _this17.connectedPlayer = _this17.player2;else _this17.connectedPlayer = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](0, 0, 0, 0, 3, new _castle__WEBPACK_IMPORTED_MODULE_4__["Castle"](0, 0, "white", 0, 0, 0));
            });

            document.getElementById("main-menu").style.display = "none";
          };

          this.background = new Image();
          this.background.src = "../../assets/img/background/background default.png";
        }

        _createClass(GameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.player1 = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_4__["Castle"](0, 0, "white", 0, 0, 0));
            this.player2 = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](0, 0, 0, 0, 0, new _castle__WEBPACK_IMPORTED_MODULE_4__["Castle"](0, 0, "white", 0, 0, 0));
            this.route.paramMap.subscribe(function (map) {
              var mapParams = map;
              _this19.id = mapParams.params.id;
              _this19.team = mapParams.params.team;
              _this19.side = mapParams.params.side;
              if (_this19.side == 1) _this19.connectedPlayer = _this19.player1;else if (_this19.side == 2) _this19.connectedPlayer = _this19.player2;else _this19.connectedPlayer = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](0, 0, 0, 0, 3, new _castle__WEBPACK_IMPORTED_MODULE_4__["Castle"](0, 0, "white", 0, 0, 0));
            });
            this.clouds = [new _cloud__WEBPACK_IMPORTED_MODULE_6__["Cloud"](100), new _cloud__WEBPACK_IMPORTED_MODULE_6__["Cloud"](600), new _cloud__WEBPACK_IMPORTED_MODULE_6__["Cloud"](900), new _cloud__WEBPACK_IMPORTED_MODULE_6__["Cloud"](1300)];
            this.nextCloud = Math.floor(Math.random() * 25);
            this.units = new Array();
            if (this.side == 1) this.init();else this.gameServices.init(this.team, this.id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this20 = this;

            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]().withUrl("/gamehub").build();
            connection.start().then(function () {
              console.log("connected!");
              connection.invoke("connectedto", _this20.id);
            });
            connection.on("UpdateUnits", function (unitData) {
              _this20.units = _unit__WEBPACK_IMPORTED_MODULE_2__["Unit"].parseUnits(unitData);
              window.requestAnimationFrame(function () {
                return _this20.draw();
              });
            });
            connection.on("UpdatePlayers", function (playerData) {
              _this20.player1.updatePlayer(playerData, 0);

              _this20.player2.updatePlayer(playerData, 1);
            });
            connection.on("EndGame", function (side) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                return regeneratorRuntime.wrap(function _callee15$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return this.gameServices.getPlayerStats(this.id, 1);

                      case 2:
                        this.player1Stats = _context16.sent;
                        _context16.next = 5;
                        return this.gameServices.getPlayerStats(this.id, 2);

                      case 5:
                        this.player2Stats = _context16.sent;
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
                        return _context16.stop();
                    }
                  }
                }, _callee15, this);
              }));
            });
            connection.onclose(function () {
              if (_this20.side >= 3) return;
              document.getElementById("endgame-modal").style.display = "none";

              _this20.gameServices.end(_this20.id);

              _this20.reset();

              delete _this20.gameServices;
            });
            this.canvas = document.getElementById("game-canvas");
            this.context = this.canvas.getContext("2d");
            var menuButton = document.getElementById("main-menu");

            menuButton.onmouseup = function () {
              connection.stop();
            };

            connection.on("AddCooldown", function (side, name) {
              if (_this20.connectedPlayer.side != side) return;

              _this20.characterbar.addCooldown(name);
            });
            connection.on("RemoveCooldown", function (side, name) {
              if (_this20.connectedPlayer.side != side) return;

              _this20.characterbar.removeCooldown(name);
            });
          }
        }, {
          key: "draw",
          value: function draw() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var ctx;
              return regeneratorRuntime.wrap(function _callee16$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      ctx = this.context;
                      this.draw_background();
                      if (typeof this.units != 'undefined') this.units.forEach(function (unit) {
                        unit.draw(ctx);
                      });

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee16, this);
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
              this.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_6__["Cloud"]());
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

      GameComponent.ɵfac = function GameComponent_Factory(t) {
        return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"]));
      };

      GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GameComponent,
        selectors: [["app-game"]],
        viewQuery: function GameComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_7__["CharacterBarComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.characterbar = _t.first);
          }
        },
        decls: 85,
        vars: 22,
        consts: [["id", "game-canvas", "width", "1500", "height", "500"], ["id", "footer", 3, "side", "team", "id"], ["id", "endgame-modal", 1, "modal"], ["id", "endgame-modal-content", 1, "modal-content"], ["id", "endgame-header"], ["id", "endgame-stats"], ["id", "player1-stats"], [1, "contains-icon"], [3, "src"], ["id", "player2-stats"], ["id", "endgame-button"], ["id", "main-menu", 3, "routerLink"]],
        template: function GameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-character-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Player 1:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Total Income:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Units Bought:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Favorite Unit:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Most Damage:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Most Castle Damage:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Player 2:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Total Income:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Units Bought:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Favorite Unit:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Most Damage:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Most Castle Damage:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Main Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("side", ctx.side)("team", ctx.team)("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.gameResult);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player1Stats.TotalIncome.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player1Stats.UnitsBought.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player1Stats.FavoriteUnit.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.player1FavoriteUnitIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player1Stats.MostDamage.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.player1MostDamageIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player1Stats.MostCastleDamage.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.player1MostCastleDamageIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player2Stats.TotalIncome.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player2Stats.UnitsBought.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player2Stats.FavoriteUnit.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.player2FavoriteUnitIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player2Stats.MostDamage.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.player2MostDamageIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player2Stats.MostCastleDamage.Item2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.player2MostCastleDamageIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));
          }
        },
        directives: [_character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_7__["CharacterBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n.contains-icon[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n#game-canvas[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    width: 1502px;\r\n    height: 120px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 500px;\r\n    left: 0px;\r\n}\r\n#endgame-stats[_ngcontent-%COMP%] {\r\n    border-top: 1px solid black;\r\n}\r\n#player1-stats[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 50%;\r\n}\r\n#player2-stats[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 50%;\r\n}\r\n#main-menu[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #00ee55;\r\n    font-size: 20px;\r\n    padding: 25px;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    -webkit-animation: fadein 2s;    \r\n            animation: fadein 2s;\r\n}\r\n#main-menu[_ngcontent-%COMP%]:hover {\r\n    background-color: #22ff77;\r\n    cursor: pointer;\r\n}\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 5; \r\n    padding-top: 15px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 1500px; \r\n    height: 605px; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    border-radius: 0px 0px 20px 20px;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    border-radius: 20px;\r\n    width: 85%;\r\n    height: 90%;\r\n    font-family: arial;\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n.modal-header[_ngcontent-%COMP%] {\r\n      margin-top: 0px;\r\n      font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLDRCQUE0QixFQUFFLG9DQUFvQyxFQUNwQyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtZQUN2QyxvQkFBb0I7QUFDaEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLGlCQUFpQjtBQU1qQixvQ0FBb0M7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2QjtBQUVBLHNCQUFzQjtBQU10QixpQkFBaUI7QUFNakIscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWEsRUFBRSxlQUFlO0lBQzlCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQ3hELGdDQUFnQztBQUNwQztBQUVFLGtCQUFrQjtBQUNwQjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO01BQ00sZUFBZTtNQUNmLGVBQWU7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb250YWlucy1pY29uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiNnYW1lLWNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDE1MDJweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4jZW5kZ2FtZS1zdGF0cyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuI3BsYXllcjEtc3RhdHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4jcGxheWVyMi1zdGF0cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4jbWFpbi1tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGVlNTU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAyczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG4gICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAyczsgLyogRmlyZWZveCA8IDE2ICovXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xyXG59XHJcbiNtYWluLW1lbnU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyZmY3NztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggPCAxNiAqL1xyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEludGVybmV0IEV4cGxvcmVyICovXHJcbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogT3BlcmEgPCAxMi4xICovXHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBNb2RhbCBTdHlsaW5nLi4uICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiA1OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogNjA1cHg7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */", "#character-bar[_ngcontent-%COMP%] {\r\n    width: 870px;\r\n    height: 100px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n}\r\n#spectate[_ngcontent-%COMP%] {\r\n    width: 1498px;\r\n    height: 118px;\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n    font-family: arial;\r\n    font-size: 60px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n}\r\n#income[_ngcontent-%COMP%] { \r\n    float: left;\r\n    width: 304px;\r\n    height: 88px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 20px 0px 0px 20px;\r\n    border: 1px solid black;\r\n}\r\n#income[_ngcontent-%COMP%]:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n#health[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 304px;\r\n    height: 88px;\r\n    margin: 0px;\r\n    padding-top: 30px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n    background-color: #2bb14c;\r\n    text-align: center;\r\n    border-radius: 0px 20px 20px 0px;\r\n    border: 1px solid black;\r\n}\r\n#health[_ngcontent-%COMP%]:hover {\r\n    background-color: #5dd36e;\r\n    cursor: pointer;\r\n}\r\n.white[_ngcontent-%COMP%] {\r\n    background-color: #DDDDDD;\r\n}\r\n.black[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n}\r\n.green[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n.blue[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n}\r\n.purple[_ngcontent-%COMP%] {\r\n    background-color: purple;\r\n}\r\n.yellow[_ngcontent-%COMP%] {\r\n    background-color: yellow;\r\n}\r\n.orange[_ngcontent-%COMP%] {\r\n    background-color: orangered;\r\n}\r\n.red[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\r\n.character[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.character[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n.cooldown[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    height: 100px;\r\n    width: 100px;\r\n    background-color: black;\r\n    opacity: 0.5;\r\n}\r\n.first[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n}\r\n.hidden[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n.price[_ngcontent-%COMP%] {\r\n    z-index: 3;\r\n    margin: 2px;\r\n    position: absolute;\r\n}\r\n.black-unit[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWJhci9jaGFyYWN0ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci1iYXIvY2hhcmFjdGVyLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJhY3Rlci1iYXIge1xyXG4gICAgd2lkdGg6IDg3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI3NwZWN0YXRlIHtcclxuICAgIHdpZHRoOiAxNDk4cHg7XHJcbiAgICBoZWlnaHQ6IDExOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYjE0YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaW5jb21lIHsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMDRweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiMTRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4jaW5jb21lOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGQzNmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2hlYWx0aCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMzA0cHg7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYjE0YztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuI2hlYWx0aDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkMzZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcclxufVxyXG4uYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuLnB1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbn1cclxuLnllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNoYXJhY3Rlcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvb2xkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYmxhY2stdW5pdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css', '../character-bar/character-bar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _services_game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"]
          }];
        }, {
          characterbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_character_bar_character_bar_component__WEBPACK_IMPORTED_MODULE_7__["CharacterBarComponent"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "tUNS":
    /*!******************************************************!*\
      !*** ./src/app/team-select/team-select.component.ts ***!
      \******************************************************/

    /*! exports provided: TeamSelectComponent */

    /***/
    function tUNS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamSelectComponent", function () {
        return TeamSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TeamSelectComponent = /*#__PURE__*/function () {
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

      TeamSelectComponent.ɵfac = function TeamSelectComponent_Factory(t) {
        return new (t || TeamSelectComponent)();
      };

      TeamSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeamSelectComponent,
        selectors: [["app-team-select"]],
        decls: 11,
        vars: 0,
        consts: [["id", "team-select"], ["id", "white", 1, "team", "selected"], ["id", "green", 1, "team"], ["id", "blue", 1, "team"], ["id", "purple", 1, "team"], ["id", "yellow", 1, "team"], ["id", "orange", 1, "team"], ["id", "red", 1, "team"], ["id", "black", 1, "team"]],
        template: function TeamSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose your team!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 10px;\r\n    font-family: arial;\r\n    font-size: 25px;\r\n}\r\n#team-select[_ngcontent-%COMP%] {\r\n    width: 960px;\r\n    height: 120px;\r\n    background-color: lightgray;\r\n    padding: 10px;\r\n    margin-left: 270px;\r\n}\r\n.team[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n    margin: 10px;\r\n}\r\n.selected[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    border: 10px solid lightgreen;\r\n}\r\n#white[_ngcontent-%COMP%] {\r\n    width: 96px;\r\n    height: 96px;\r\n    background-color: white;\r\n}\r\n#black[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n}\r\n#green[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n#blue[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n}\r\n#purple[_ngcontent-%COMP%] {\r\n    background-color: purple;\r\n}\r\n#yellow[_ngcontent-%COMP%] {\r\n    background-color: yellow;\r\n}\r\n#orange[_ngcontent-%COMP%] {\r\n    background-color: orangered;\r\n}\r\n#red[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1zZWxlY3QvdGVhbS1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC90ZWFtLXNlbGVjdC90ZWFtLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiN0ZWFtLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNzBweDtcclxufVxyXG4udGVhbSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgbGlnaHRncmVlbjtcclxufVxyXG5cclxuI3doaXRlIHtcclxuICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuI2JsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbiNncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4jYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbiNwdXJwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG59XHJcbiN5ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbiNvcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbiNyZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-team-select',
            templateUrl: './team-select.component.html',
            styleUrls: ['./team-select.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tlkb":
    /*!**************************!*\
      !*** ./src/app/cloud.ts ***!
      \**************************/

    /*! exports provided: Cloud */

    /***/
    function tlkb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cloud", function () {
        return Cloud;
      });

      var Cloud = function Cloud(x) {
        var _this21 = this;

        _classCallCheck(this, Cloud);

        this.draw = function (ctx) {
          ctx.drawImage(_this21.image, _this21.x, _this21.y);
          _this21.x -= _this21.speed;
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
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule, routingComponents */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./game/game.component */
      "jBAD");
      /* harmony import */


      var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome/welcome.component */
      "J7Q4");
      /* harmony import */


      var _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./level-select/level-select.component */
      "KKJv");
      /* harmony import */


      var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./multiplayer/multiplayer.component */
      "SeMY");
      /* harmony import */


      var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./team-info/team-info.component */
      "cdf7");
      /* harmony import */


      var _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./typeinfo/typeinfo.component */
      "NKP/");
      /* harmony import */


      var _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./character-info/character-info.component */
      "gIxv");

      var routes = [{
        path: "game/:id/:team/:side",
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"]
      }, {
        path: "levelselect",
        component: _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_4__["LevelSelectComponent"]
      }, {
        path: "multiplayer",
        component: _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_5__["MultiplayerComponent"]
      }, {
        path: "game/10000",
        component: _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_5__["MultiplayerComponent"]
      }, {
        path: "teaminfo",
        component: _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_6__["TeamInfoComponent"]
      }, {
        path: "typeinfo",
        component: _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_7__["TypeinfoComponent"]
      }, {
        path: "characterinfo/:team/:name",
        component: _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_8__["CharacterInfoComponent"]
      }, {
        path: "",
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
      }, {
        path: "**",
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();

      var routingComponents = [_game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], _level_select_level_select_component__WEBPACK_IMPORTED_MODULE_4__["LevelSelectComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_5__["MultiplayerComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_6__["TeamInfoComponent"], _typeinfo_typeinfo_component__WEBPACK_IMPORTED_MODULE_7__["TypeinfoComponent"], _character_info_character_info_component__WEBPACK_IMPORTED_MODULE_8__["CharacterInfoComponent"]];
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map