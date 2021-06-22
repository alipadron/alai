(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tecnicas-de-respiracion-tecnicas-de-respiracion-module"],{

/***/ "+O13":
/*!***************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnicas-de-respiracion.module.ts ***!
  \***************************************************************************/
/*! exports provided: TecnicasDeRespiracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicasDeRespiracionPageModule", function() { return TecnicasDeRespiracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tecnicas_de_respiracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tecnicas-de-respiracion-routing.module */ "PGQZ");
/* harmony import */ var _tecnicas_de_respiracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tecnicas-de-respiracion.page */ "hXpJ");







let TecnicasDeRespiracionPageModule = class TecnicasDeRespiracionPageModule {
};
TecnicasDeRespiracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tecnicas_de_respiracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["TecnicasDeRespiracionPageRoutingModule"]
        ],
        declarations: [_tecnicas_de_respiracion_page__WEBPACK_IMPORTED_MODULE_6__["TecnicasDeRespiracionPage"]]
    })
], TecnicasDeRespiracionPageModule);



/***/ }),

/***/ "PGQZ":
/*!***********************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnicas-de-respiracion-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TecnicasDeRespiracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicasDeRespiracionPageRoutingModule", function() { return TecnicasDeRespiracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tecnicas_de_respiracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tecnicas-de-respiracion.page */ "hXpJ");




const routes = [
    {
        path: '',
        component: _tecnicas_de_respiracion_page__WEBPACK_IMPORTED_MODULE_3__["TecnicasDeRespiracionPage"]
    },
    {
        path: ':tecnicaId',
        loadChildren: () => __webpack_require__.e(/*! import() | tecnica-de-respiracion-tecnica-de-respiracion-module */ "tecnica-de-respiracion-tecnica-de-respiracion-module").then(__webpack_require__.bind(null, /*! ./tecnica-de-respiracion/tecnica-de-respiracion.module */ "EftM")).then(m => m.TecnicaDeRespiracionPageModule)
    },
];
let TecnicasDeRespiracionPageRoutingModule = class TecnicasDeRespiracionPageRoutingModule {
};
TecnicasDeRespiracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnicasDeRespiracionPageRoutingModule);



/***/ }),

/***/ "hXpJ":
/*!*************************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnicas-de-respiracion.page.ts ***!
  \*************************************************************************/
/*! exports provided: TecnicasDeRespiracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicasDeRespiracionPage", function() { return TecnicasDeRespiracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tecnicas_de_respiracion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tecnicas-de-respiracion.page.html */ "pD/n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tecnicas_de_respiracion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tecnicas-de-respiracion */ "r04N");




let TecnicasDeRespiracionPage = class TecnicasDeRespiracionPage {
    constructor() {
        this.tecnicasdeRespiracion = _tecnicas_de_respiracion__WEBPACK_IMPORTED_MODULE_3__["TECNICAS_DE_RESPIRACION"];
    }
    ngOnInit() {
    }
};
TecnicasDeRespiracionPage.ctorParameters = () => [];
TecnicasDeRespiracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tecnicas-de-respiracion',
        template: _raw_loader_tecnicas_de_respiracion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TecnicasDeRespiracionPage);



/***/ }),

/***/ "pD/n":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tecnicas-de-respiracion/tecnicas-de-respiracion.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        text=\"\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"font-alai font-light tracking-widest text-2xl text-center\">Técnicas de respiración</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n\n        <ion-icon></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"p-4\">\n    <img src=\"assets/images/tecnicas-de-respiracion.jpg\" />\n    <p>\n      Las técnicas de respiración son una serie de pasos que te permiten\n      respirar con cierto orden y sentido, de manera que te permita relajarte y\n      en tal caso, parar un ataque de pánico.\n    </p>\n  </div>\n  <ion-list>\n    <ion-item\n      [routerLink]=\"tecnica.id.toString()\"\n      *ngFor=\"let tecnica of tecnicasdeRespiracion\"\n    >\n      <ion-label color=\"secondary\">\n        <h1>{{tecnica.titulo}}</h1>\n        <p>{{tecnica.descripcion}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "r04N":
/*!********************************************************************!*\
  !*** ./src/app/tecnicas-de-respiracion/tecnicas-de-respiracion.ts ***!
  \********************************************************************/
/*! exports provided: TECNICAS_DE_RESPIRACION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TECNICAS_DE_RESPIRACION", function() { return TECNICAS_DE_RESPIRACION; });
const TECNICAS_DE_RESPIRACION = [
    {
        id: 1,
        titulo: 'La respiración profundo o diafragmática',
        descripcion: 'Para comenzar sentarse y apoyar la espalda completamente en una silla o en la pared y posicionar una mano sobre el vientre y la otra en el pecho.',
        parrafos: [
            'Tomar aire por la nariz, lenta y profundamente, mientras se cuenta hasta tres llenando bien de aire los pulmones. Si la mano situada en el vientre se levanta y la del pecho no se mueve estamos haciéndolo de forma correcta.',
            'Retener el aire durante 3 segundos.',
            'Soltar el aire por la boca lentamente, contando de nuevo hasta tres. El abdomen volverá a su posición natural.',
            'Repetir el proceso dos o tres veces.',
        ],
    },
    {
        id: 2,
        titulo: 'La técnica 4-7-8',
        descripcion: 'Puede realizarse en cualquier postura cómoda, pero para iniciar es preferentemente hacerlo sentado y con la espalda recta.',
        parrafos: [
            'Cierra tu boca e inhala el aire a través de la nariz.',
            'Cuenta hasta cuatro.',
            'Aguanta la respiración durante siete segundos.',
            'Expira completamente el aire de tus pulmones durante ocho segundos (es importante realizar un sonido/soplido que puedas oír).',
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=tecnicas-de-respiracion-tecnicas-de-respiracion-module.js.map