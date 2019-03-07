(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main class=\"container\">\n  <app-issue-manager *ngIf=\"authState$ | async else inputToken\"></app-issue-manager>\n  <ng-template #inputToken>\n    <app-tutorial></app-tutorial>\n  </ng-template>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _octokit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./octokit.service */ "./src/app/octokit.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, octokitService) {
        var _this = this;
        this.authService = authService;
        this.octokitService = octokitService;
        this.authState$ = this.authService.authState$;
        this.authState$.subscribe(function (status) {
            if (status) {
                _this.octokitService.initOctokit(_this.authService.token);
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _octokit_service__WEBPACK_IMPORTED_MODULE_3__["OctokitService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _issue_table_issue_table_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./issue-table/issue-table.component */ "./src/app/issue-table/issue-table.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _issue_manager_issue_manager_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./issue-manager/issue-manager.component */ "./src/app/issue-manager/issue-manager.component.ts");








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _issue_table_issue_table_component__WEBPACK_IMPORTED_MODULE_35__["IssueTableComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"], _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_37__["TutorialComponent"], _issue_manager_issue_manager_component__WEBPACK_IMPORTED_MODULE_38__["IssueManagerComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @octokit/rest */ "./node_modules/@octokit/rest/index.js");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService() {
        this.authSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.authState$ = this.authSource.asObservable();
        this.token = this.getTokenFromLocalStorage();
        if (this.token) {
            this.checkAuth(this.token);
        }
    }
    AuthService.prototype.checkAuth = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            new _octokit_rest__WEBPACK_IMPORTED_MODULE_3__({
                auth: "token " + token
            }).issues.list({
                per_page: 1
            }).then(function (result) {
                _this.authSource.next(true);
                _this.setTokenToLocalStorage(token);
                _this.token = token;
                resolve(token);
            }).catch(function (err) {
                _this.authSource.next(false);
                reject();
            });
        });
    };
    AuthService.prototype.setTokenToLocalStorage = function (token) {
        localStorage.token = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(token, 'wmUHW3v4').toString();
    };
    AuthService.prototype.getTokenFromLocalStorage = function () {
        if (localStorage.token) {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(localStorage.token, 'wmUHW3v4');
            return bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8);
        }
        else {
            return null;
        }
    };
    AuthService.prototype.clearCache = function () {
        localStorage.issueParams = null;
        localStorage.token = null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  GitHub Issue Manager\n  <span class=\"spacer\"></span>\n  <a\n    href=\"https://github.com/deer-inc/GitHub-Issue-Manager\"\n    mat-button\n    target=\"_blank\"\n    class=\"github\"\n  >\n    <img src=\"/assets/github.svg\" alt=\"\" />\n    GitHub\n  </a>\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button (click)=\"clearCache()\" mat-menu-item>\n      <mat-icon>delete_sweep</mat-icon>\n      <span>キャッシュクリア</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 0; }\n\n.github img {\n  vertical-align: -5px;\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWljaGluaW5vbWl5YS9Xb3Jrcy9naXRodWItaXNzdWUtbWFuYWdlci9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFFSSxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSAwO1xufVxuXG4uZ2l0aHViIHtcbiAgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _octokit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../octokit.service */ "./src/app/octokit.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(octkitService, authService) {
        this.octkitService = octkitService;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.clearCache = function () {
        this.octkitService.clearCache();
        this.authService.clearCache();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_octokit_service__WEBPACK_IMPORTED_MODULE_2__["OctokitService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/issue-manager/issue-manager.component.html":
/*!************************************************************!*\
  !*** ./src/app/issue-manager/issue-manager.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>リポジトリオーナー</mat-label>\n    <input\n      matInput\n      formControlName=\"owner\"\n      type=\"text\"\n      autocomplete=\"off\"\n      required\n    />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>リポジト名</mat-label>\n    <input\n      matInput\n      formControlName=\"repo\"\n      type=\"text\"\n      autocomplete=\"off\"\n      required\n    />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>マイルストーン</mat-label>\n    <input\n      matInput\n      formControlName=\"milestone\"\n      type=\"text\"\n      autocomplete=\"off\"\n    />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>ステータス</mat-label>\n    <mat-select formControlName=\"state\">\n      <mat-option\n        [value]=\"state\"\n        *ngFor=\"let state of ['open', 'closed', 'all']\"\n      >\n        {{ state }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>アサイン</mat-label>\n    <input matInput formControlName=\"assignee\" type=\"text\" autocomplete=\"off\" />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>作成者</mat-label>\n    <input matInput formControlName=\"creator\" type=\"text\" autocomplete=\"off\" />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>メンション</mat-label>\n    <input\n      matInput\n      formControlName=\"mentioned\"\n      type=\"text\"\n      autocomplete=\"off\"\n    />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>ラベル</mat-label>\n    <input matInput formControlName=\"labels\" type=\"text\" autocomplete=\"off\" />\n    <mat-hint>,（コンマ）区切りで指定</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>ソート</mat-label>\n    <mat-select formControlName=\"sort\">\n      <mat-option\n        [value]=\"sort\"\n        *ngFor=\"let sort of ['created', 'updated', 'comments']\"\n      >\n        {{ sort }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>順序</mat-label>\n    <mat-select formControlName=\"direction\">\n      <mat-option [value]=\"direction\" *ngFor=\"let direction of ['asc', 'desc']\">\n        {{ direction }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>最終更新日</mat-label>\n    <input matInput formControlName=\"since\" type=\"date\" autocomplete=\"off\" />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>取得数</mat-label>\n    <input\n      matInput\n      formControlName=\"per_page\"\n      type=\"number\"\n      autocomplete=\"off\"\n      max=\"100\"\n    />\n    <mat-hint>最大100件</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>ページ</mat-label>\n    <input matInput formControlName=\"page\" type=\"number\" autocomplete=\"off\" />\n  </mat-form-field>\n\n  <button [disabled]=\"form.invalid\" (click)=\"getIssues()\" mat-raised-button>\n    Issue取得\n  </button>\n</form>\n\n<app-issue-table *ngIf=\"issues\" [issues]=\"issues\"></app-issue-table>\n"

/***/ }),

/***/ "./src/app/issue-manager/issue-manager.component.scss":
/*!************************************************************!*\
  !*** ./src/app/issue-manager/issue-manager.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWljaGluaW5vbWl5YS9Xb3Jrcy9naXRodWItaXNzdWUtbWFuYWdlci9zcmMvYXBwL2lzc3VlLW1hbmFnZXIvaXNzdWUtbWFuYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2lzc3VlLW1hbmFnZXIvaXNzdWUtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/issue-manager/issue-manager.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/issue-manager/issue-manager.component.ts ***!
  \**********************************************************/
/*! exports provided: IssueManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueManagerComponent", function() { return IssueManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _octokit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../octokit.service */ "./src/app/octokit.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var IssueManagerComponent = /** @class */ (function () {
    function IssueManagerComponent(fb, octokitService, snackBar) {
        this.fb = fb;
        this.octokitService = octokitService;
        this.snackBar = snackBar;
        this.form = this.fb.group({
            owner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            repo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            milestone: [null],
            state: ['open'],
            assignee: [null],
            creator: [null],
            mentioned: [null],
            labels: [null],
            sort: ['created'],
            direction: ['desc'],
            since: [null],
            per_page: [100, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)],
            page: [1]
        });
        if (this.octokitService.lastParamas) {
            this.form.patchValue(this.octokitService.lastParamas);
        }
    }
    IssueManagerComponent.prototype.ngOnInit = function () {
    };
    IssueManagerComponent.prototype.buildParams = function (base) {
        var params = {
            owner: '',
            repo: ''
        };
        Object.keys(base).forEach(function (key) {
            if (base[key]) {
                params[key] = base[key];
            }
        });
        return params;
    };
    IssueManagerComponent.prototype.getIssues = function () {
        var _this = this;
        var params = this.buildParams(this.form.value);
        this.octokitService
            .getIssues(params)
            .then(function (result) {
            _this.issues = result.data;
            _this.snackBar.open('Issueを取得しました', null, {
                duration: 2000
            });
        })
            .catch(function (err) {
            console.error(err);
            _this.snackBar.open('取得に失敗しました。トークンをご確認ください', null, {
                duration: 2000
            });
        });
    };
    IssueManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-manager',
            template: __webpack_require__(/*! ./issue-manager.component.html */ "./src/app/issue-manager/issue-manager.component.html"),
            styles: [__webpack_require__(/*! ./issue-manager.component.scss */ "./src/app/issue-manager/issue-manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _octokit_service__WEBPACK_IMPORTED_MODULE_3__["OctokitService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], IssueManagerComponent);
    return IssueManagerComponent;
}());



/***/ }),

/***/ "./src/app/issue-table/issue-table.component.html":
/*!********************************************************!*\
  !*** ./src/app/issue-table/issue-table.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div>\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>ID</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.number }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>タイトル</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.title }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assignee\">\n        <th mat-header-cell *matHeaderCellDef>アサイン</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div class=\"avatars\">\n            <span [style.background-image]=\"'url(https://github.com/' + assignee.login + '.png)'\" [matTooltip]=\"assignee.login\" class=\"avatar\" *ngFor=\"let assignee of element.assignees\"></span>\n          </div>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>ステータス</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.state }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"cost\">\n        <th mat-header-cell *matHeaderCellDef>工数</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.cost }}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator [pageSize]=\"100\" [pageSizeOptions]=\"[10, 50, 100]\" showFirstLastButtons></mat-paginator>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/issue-table/issue-table.component.scss":
/*!********************************************************!*\
  !*** ./src/app/issue-table/issue-table.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatars {\n  display: inline-flex;\n  vertical-align: middle;\n  flex-direction: row-reverse; }\n\n.avatar {\n  width: 32px;\n  height: 32px;\n  background: center/cover;\n  display: block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 2px solid white; }\n\n.avatar + .avatar {\n    margin-right: -16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWljaGluaW5vbWl5YS9Xb3Jrcy9naXRodWItaXNzdWUtbWFuYWdlci9zcmMvYXBwL2lzc3VlLXRhYmxlL2lzc3VlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFQekI7SUFTSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2lzc3VlLXRhYmxlL2lzc3VlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgJiArICYge1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/issue-table/issue-table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/issue-table/issue-table.component.ts ***!
  \******************************************************/
/*! exports provided: IssueTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTableComponent", function() { return IssueTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var IssueTableComponent = /** @class */ (function () {
    function IssueTableComponent() {
        this.displayedColumns = ['id', 'title', 'assignee', 'cost', 'state'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    Object.defineProperty(IssueTableComponent.prototype, "issues", {
        set: function (issues) {
            this.dataSource.data = issues.map(function (issue) {
                var cost = issue.title.match(/- (\d(?:\d+|\d?\.\d)?)H/);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ cost: cost ? parseInt(cost[1], 10) : 0 }, issue);
            });
        },
        enumerable: true,
        configurable: true
    });
    IssueTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    IssueTableComponent.prototype.getTotalCost = function () {
        return this.dataSource.data
            .map(function (t) { return t.cost; })
            .reduce(function (acc, value) { return acc + value; }, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], IssueTableComponent.prototype, "issues", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IssueTableComponent.prototype, "paginator", void 0);
    IssueTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-table',
            template: __webpack_require__(/*! ./issue-table.component.html */ "./src/app/issue-table/issue-table.component.html"),
            styles: [__webpack_require__(/*! ./issue-table.component.scss */ "./src/app/issue-table/issue-table.component.scss")]
        })
    ], IssueTableComponent);
    return IssueTableComponent;
}());



/***/ }),

/***/ "./src/app/octokit.service.ts":
/*!************************************!*\
  !*** ./src/app/octokit.service.ts ***!
  \************************************/
/*! exports provided: OctokitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OctokitService", function() { return OctokitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/rest */ "./node_modules/@octokit/rest/index.js");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_2__);



var OctokitService = /** @class */ (function () {
    function OctokitService() {
        this.getStorageData();
    }
    OctokitService.prototype.getStorageData = function () {
        this.lastParamas = this.getDataFromStorage('issueParams');
        if (this.lastToken) {
            this.initOctokit(this.lastToken);
        }
    };
    OctokitService.prototype.setDataToStorage = function (key, params) {
        localStorage[key] = JSON.stringify(params);
    };
    OctokitService.prototype.getDataFromStorage = function (key) {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        }
        else {
            return null;
        }
    };
    OctokitService.prototype.initOctokit = function (token) {
        this.octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_2__({
            auth: "token " + token
        });
    };
    OctokitService.prototype.clearCache = function () {
        localStorage.issueParams = null;
    };
    OctokitService.prototype.getIssues = function (params) {
        this.setDataToStorage('issueParams', params);
        if (params.since) {
            params.since = new Date(params.since).toISOString();
        }
        return this.octokit.issues.listForRepo(params);
    };
    OctokitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OctokitService);
    return OctokitService;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tutorial\">\n  <div class=\"tutorial__body\">\n    <h2>アクセストークンを入力してください。</h2>\n    <ul>\n      <li>\n        アクセストークンはDBやクッキーに保存されないのでご安心ください。\n      </li>\n      <li>\n        アクセストークンがない人は<a\n          href=\"https://github.com/settings/tokens/new\"\n          target=\"_blank\"\n          >作成</a\n        >してください。\n        <ul>\n          <li>\n            作成時に<b>repo</b>のみにチェックしてください\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <figure class=\"tutorial__image\">\n    <img src=\"/assets/api-setting.png\" alt=\"\" />\n  </figure>\n</div>\n\n<mat-form-field class=\"token-field\" floatLabel=\"always\">\n  <mat-label>アクセストークン</mat-label>\n  <input\n    type=\"text\"\n    autofocus\n    required\n    placeholder=\"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\"\n    maxlength=\"40\"\n    minlength=\"40\"\n    autocomplete=\"off\"\n    [formControl]=\"tokenField\"\n    matInput\n  />\n  <mat-error *ngIf=\"tokenField.invalid\"\n    >正しいトークンをペースしてください。</mat-error\n  >\n</mat-form-field>\n\n<button [disabled]=\"tokenField.invalid\" mat-raised-button (click)=\"checkToken(tokenField.value)\">認証</button>\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tutorial {\n  display: flex;\n  margin: 24px 0; }\n  .tutorial__image {\n    margin-left: 16px;\n    width: 500px;\n    margin: 0; }\n  .tutorial__image img {\n      width: 100%; }\n  .tutorial__body {\n    flex: 1;\n    font-size: 14px; }\n  .token-field {\n  width: 40em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYWljaGluaW5vbWl5YS9Xb3Jrcy9naXRodWItaXNzdWUtbWFuYWdlci9zcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTtFQUNkO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTLEVBQUE7RUFIVjtNQUtHLFdBQVcsRUFBQTtFQUdmO0lBQ0UsT0FBTztJQUNQLGVBQWUsRUFBQTtFQUluQjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR1dG9yaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyNHB4IDA7XG4gICZfX2ltYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgJl9fYm9keSB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLnRva2VuLWZpZWxkIHtcbiAgd2lkdGg6IDQwZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _octokit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../octokit.service */ "./src/app/octokit.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(octokitService, authService, snackBar) {
        this.octokitService = octokitService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.tokenField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(40)
        ]);
    }
    TutorialComponent.prototype.ngOnInit = function () { };
    TutorialComponent.prototype.checkToken = function (token) {
        var _this = this;
        if (this.tokenField.valid) {
            this.authService.checkAuth(token)
                .then(function (result) {
                _this.octokitService.initOctokit(result);
            })
                .catch(function (result) {
                _this.snackBar.open('認証に失敗しました', null, {
                    duration: 2000
                });
            });
        }
    };
    TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/tutorial/tutorial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_octokit_service__WEBPACK_IMPORTED_MODULE_3__["OctokitService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daichininomiya/Works/github-issue-manager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map