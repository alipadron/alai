(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tecnica-de-respiracion-tecnica-de-respiracion-module"],{

/***/ "EftM":
/*!*************************************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-de-respiracion.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnicaDeRespiracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicaDeRespiracionPageModule", function() { return TecnicaDeRespiracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tecnica_de_respiracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tecnica-de-respiracion-routing.module */ "eFwg");
/* harmony import */ var _tecnica_de_respiracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tecnica-de-respiracion.page */ "Gb4O");
/* harmony import */ var _tecnica_slides_tecnica_slides_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tecnica-slides/tecnica-slides.page */ "N78A");
/* harmony import */ var _tecnica_uno_slides_tecnica_uno_slides_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tecnica-uno-slides/tecnica-uno-slides.component */ "ZgI1");
/* harmony import */ var _tecnica_dos_slides_tecnica_dos_slides_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tecnica-dos-slides/tecnica-dos-slides.component */ "cqKq");










let TecnicaDeRespiracionPageModule = class TecnicaDeRespiracionPageModule {
};
TecnicaDeRespiracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tecnica_de_respiracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["TecnicaDeRespiracionPageRoutingModule"],
        ],
        declarations: [
            _tecnica_de_respiracion_page__WEBPACK_IMPORTED_MODULE_6__["TecnicaDeRespiracionPage"],
            _tecnica_slides_tecnica_slides_page__WEBPACK_IMPORTED_MODULE_7__["TecnicaSlidesPage"],
            _tecnica_uno_slides_tecnica_uno_slides_component__WEBPACK_IMPORTED_MODULE_8__["TecnicaUnoSlidesComponent"],
            _tecnica_dos_slides_tecnica_dos_slides_component__WEBPACK_IMPORTED_MODULE_9__["TecnicaDosSlidesComponent"],
        ],
    })
], TecnicaDeRespiracionPageModule);



/***/ }),

/***/ "Gb4O":
/*!***********************************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-de-respiracion.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: TecnicaDeRespiracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicaDeRespiracionPage", function() { return TecnicaDeRespiracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tecnica_de_respiracion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tecnica-de-respiracion.page.html */ "tTEw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _tecnicas_de_respiracion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tecnicas-de-respiracion */ "r04N");






let TecnicaDeRespiracionPage = class TecnicaDeRespiracionPage {
    constructor(route) {
        this.route = route;
        this.tecnica$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((paramMap) => parseInt(paramMap.get('tecnicaId'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((tecnicaId) => _tecnicas_de_respiracion__WEBPACK_IMPORTED_MODULE_5__["TECNICAS_DE_RESPIRACION"].find(({ id }) => id === tecnicaId)));
    }
    ngOnInit() {
    }
};
TecnicaDeRespiracionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TecnicaDeRespiracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tecnica-de-respiracion',
        template: _raw_loader_tecnica_de_respiracion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TecnicaDeRespiracionPage);



/***/ }),

/***/ "N78A":
/*!******************************************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-slides/tecnica-slides.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: TecnicaSlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicaSlidesPage", function() { return TecnicaSlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tecnica_slides_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tecnica-slides.page.html */ "VXN0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let TecnicaSlidesPage = class TecnicaSlidesPage {
    constructor(route) {
        this.route = route;
        this.tecnicaId$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((paramMap) => parseInt(paramMap.get('tecnicaId'))));
    }
    ngOnInit() { }
};
TecnicaSlidesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TecnicaSlidesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tecnica-slides',
        template: _raw_loader_tecnica_slides_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TecnicaSlidesPage);



/***/ }),

/***/ "VXN0":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-slides/tecnica-slides.page.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button\n        text=\"\"\n          [defaultHref]=\"'/tecnicas-de-respiracion/' + (tecnicaId$ | async)\"\n        ></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ng-container [ngSwitch]=\"tecnicaId$ | async\">\n    <app-tecnica-uno-slides *ngSwitchCase=\"1\"></app-tecnica-uno-slides>\n    <app-tecnica-dos-slides *ngSwitchCase=\"2\"></app-tecnica-dos-slides>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "ZgI1":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-uno-slides/tecnica-uno-slides.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TecnicaUnoSlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicaUnoSlidesComponent", function() { return TecnicaUnoSlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tecnica_uno_slides_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tecnica-uno-slides.component.html */ "cXbE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let TecnicaUnoSlidesComponent = class TecnicaUnoSlidesComponent {
    constructor() {
        this.slideOptions = {
            allowTouchMove: false,
            loop: true
        };
        this.slideAnimationDuration = 1000;
        this.reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.timer$ = this.reset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.slideAnimationDuration, 1500)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((v) => 3 - v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.timerFinished$ = this.timer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((v) => v === 0));
    }
    ngAfterViewInit() {
        this.reset$.next();
        this.timerFinished$.subscribe(() => {
            this.slides.slideNext(this.slideAnimationDuration);
            this.reset$.next();
        });
    }
};
TecnicaUnoSlidesComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"],] }]
};
TecnicaUnoSlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tecnica-uno-slides',
        template: _raw_loader_tecnica_uno_slides_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TecnicaUnoSlidesComponent);



/***/ }),

/***/ "cXbE":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-uno-slides/tecnica-uno-slides.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides [options]=\"slideOptions\" class=\"h-full\">\n  <ion-slide class=\"p-4 flex-col\">\n    <h1 class=\"text-center text-4xl mb-4 block\">\n      Toma aire por la nariz, lenta y profundamente.\n    </h1>\n    <p *ngIf=\"timer$ | async as time\" class=\"text-center text-6xl font-bold\">\n      {{ time }}\n    </p>\n  </ion-slide>\n  <ion-slide class=\"p-4 flex-col\">\n    <h1 class=\"text-center text-4xl mb-4 block\">Retén el aire</h1>\n    <p *ngIf=\"timer$ | async as time\" class=\"text-center text-6xl font-bold\">\n      {{ time }}\n    </p>\n  </ion-slide>\n  <ion-slide class=\"p-4 flex-col\">\n    <h1 class=\"text-center text-4xl mb-4 block\">Suelta el aire</h1>\n    <p *ngIf=\"timer$ | async as time\" class=\"text-center text-6xl font-bold\">\n      {{ time }}\n    </p>\n  </ion-slide>\n  <ion-slide class=\"p-4\">\n    <h1 class=\"text-center text-4xl\">Repetir</h1>\n  </ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "cqKq":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-dos-slides/tecnica-dos-slides.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TecnicaDosSlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicaDosSlidesComponent", function() { return TecnicaDosSlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tecnica_dos_slides_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tecnica-dos-slides.component.html */ "lH8j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let TecnicaDosSlidesComponent = class TecnicaDosSlidesComponent {
    constructor() {
        this.slideOptions = {
            allowTouchMove: false,
            loop: true,
        };
        this.slideAnimationDuration = 1000;
        this.reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.startSevenCountdown$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.startEightCountdown$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.startRepeatCountdown$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.fourCountdown$ = this.reset$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.slideAnimationDuration, 1500)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((v) => 4 - v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.sevenCountdown$ = this.startSevenCountdown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.slideAnimationDuration, 1000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((v) => 7 - v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(8), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.eightCountdown$ = this.startEightCountdown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.slideAnimationDuration, 1000)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((v) => 8 - v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(9), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.repeatCountdown$ = this.startRepeatCountdown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.slideAnimationDuration, 1500)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((v) => 3 - v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(4), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.isFinished = (v) => v === 0;
    }
    ngAfterViewInit() {
        this.reset$.next();
        this.fourCountdown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.isFinished), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.startSevenCountdown$.next();
            this.slides.slideNext();
        });
        this.sevenCountdown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.isFinished), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.startEightCountdown$.next();
            this.slides.slideNext();
        });
        this.eightCountdown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.isFinished), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.startRepeatCountdown$.next();
            this.slides.slideNext();
        });
        this.repeatCountdown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.isFinished), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.reset$.next();
            this.slides.slideNext();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
TecnicaDosSlidesComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"],] }]
};
TecnicaDosSlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tecnica-dos-slides',
        template: _raw_loader_tecnica_dos_slides_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TecnicaDosSlidesComponent);



/***/ }),

/***/ "eFwg":
/*!*********************************************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-de-respiracion-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TecnicaDeRespiracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicaDeRespiracionPageRoutingModule", function() { return TecnicaDeRespiracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tecnica_de_respiracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tecnica-de-respiracion.page */ "Gb4O");
/* harmony import */ var _tecnica_slides_tecnica_slides_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tecnica-slides/tecnica-slides.page */ "N78A");





const routes = [
    {
        path: '',
        component: _tecnica_de_respiracion_page__WEBPACK_IMPORTED_MODULE_3__["TecnicaDeRespiracionPage"]
    },
    {
        path: 'slides',
        component: _tecnica_slides_tecnica_slides_page__WEBPACK_IMPORTED_MODULE_4__["TecnicaSlidesPage"]
    }
];
let TecnicaDeRespiracionPageRoutingModule = class TecnicaDeRespiracionPageRoutingModule {
};
TecnicaDeRespiracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnicaDeRespiracionPageRoutingModule);



/***/ }),

/***/ "lH8j":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-dos-slides/tecnica-dos-slides.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides [options]=\"slideOptions\" class=\"h-full\">\n  <ion-slide class=\"p-4 flex-col\">\n    <h1 class=\"text-center text-4xl mb-4 block\">\n      Cierra tu boca e inhala el aire a través de la nariz.\n    </h1>\n    <p *ngIf=\"fourCountdown$ | async as time\" class=\"text-center text-6xl font-bold\">\n      {{ time }}\n    </p>\n  </ion-slide>\n  <ion-slide class=\"p-4 flex-col\">\n    <h1 class=\"text-center text-4xl mb-4 block\">Retén el aire</h1>\n    <p *ngIf=\"sevenCountdown$ | async as time\" class=\"text-center text-6xl font-bold\">\n      {{ time }}\n    </p>\n  </ion-slide>\n  <ion-slide class=\"p-4 flex-col\">\n    <h1 class=\"text-center text-4xl mb-4 block\">Suelta el aire</h1>\n    <p *ngIf=\"eightCountdown$ | async as time\" class=\"text-center text-6xl font-bold\">\n      {{ time }}\n    </p>\n  </ion-slide>\n  <ion-slide class=\"p-4\">\n    <h1 class=\"text-center text-4xl\">Repetir</h1>\n  </ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "tTEw":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tecnicas-de-respiracion/tecnica-de-respiracion/tecnica-de-respiracion.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"tecnica$ | async as tecnica\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button\n        text=\"\"\n          defaultHref=\"/tecnicas-de-respiracion\"\n        ></ion-back-button>\n      </ion-buttons>\n      <ion-title\n        class=\"font-alai font-light tracking-widest text-2xl text-center\"\n      >\n        {{tecnica.titulo}}\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div class=\"p-4 space-y-6\">\n      <img src=\"assets/images/tecnicas-de-respiracion.jpg\" />\n      <ion-text color=\"secondary\">\n        <h1 class=\"text-xl font-bold text-center\">{{tecnica.titulo}}</h1>\n      </ion-text>\n      <ol class=\"list-inside list-decimal\">\n        <li *ngFor=\"let parrafo of tecnica.parrafos\">{{parrafo}}</li>\n      </ol>\n      <ion-button expand=\"block\" color=\"secondary\" routerLink=\"slides\">\n        Iniciar técnica\n        <ion-icon name=\"play-outline\" class=\"ml-2\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=tecnica-de-respiracion-tecnica-de-respiracion-module.js.map