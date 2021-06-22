(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dinamica-dinamica-module"],{

/***/ "4kNS":
/*!*****************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica.page.ts ***!
  \*****************************************************/
/*! exports provided: DinamicaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaPage", function() { return DinamicaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica.page.html */ "VTd4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dinamicas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dinamicas */ "jvjw");






let DinamicaPage = class DinamicaPage {
    constructor(route) {
        this.route = route;
        this.dinamica$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((paramMap) => parseInt(paramMap.get('dinamicaId'))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((dinamicaId) => _dinamicas__WEBPACK_IMPORTED_MODULE_5__["DINAMICAS"].find(({ id }) => id === dinamicaId)));
    }
    ngOnInit() { }
};
DinamicaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DinamicaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica',
        template: _raw_loader_dinamica_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaPage);



/***/ }),

/***/ "7jqq":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica-cuatro/dinamica-cuatro.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 space-y-6\">\n  <img src=\"assets/images/instrucciones.jpg\" />\n  <ion-text color=\"primary\">\n    <h1 class=\"text-xl font-bold text-center\">{{ dinamica.titulo }}</h1>\n  </ion-text>\n  <p>\n    Puedes elegir una frase que a menudo te digas para tranquilizarte. Algunos\n    ejemplos pueden ser:\n  </p>\n  <ul class=\"text-center\">\n    <ion-text color=\"primary\" class=\"font-bold\">\n      <li>“Calma. Todo pasa.”</li>\n    </ion-text>\n    <ion-text color=\"secondary\" class=\"font-bold\">\n      <li>“Tranquilo, todo irá bien”</li>\n    </ion-text>\n    <ion-text color=\"tertiary\" class=\"font-bold\">\n      <li>“Relájate y respira”</li>\n    </ion-text>\n  </ul>\n  <p>\n    En el momento en el que te sientas mal y ansioso, acompáñalo de\n    respiraciones profundas y ve diciéndote las autoinstrucciones que hayas\n    elegido para ti.\n  </p>\n  <p>\n    Es importante que las personalices y que escojas aquellas que a ti te\n    transmitan calma y tranquilidad. Estas frases son diferentes para cada uno\n    de nosotros.\n  </p>\n</div>\n");

/***/ }),

/***/ "BtSw":
/*!***************************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-dos/dinamica-dos.component.ts ***!
  \***************************************************************************/
/*! exports provided: DinamicaDosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaDosComponent", function() { return DinamicaDosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_dos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica-dos.component.html */ "iB8P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dinamica-base.component */ "iiTt");




let DinamicaDosComponent = class DinamicaDosComponent extends _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__["DinamicaBaseComponent"] {
    constructor() {
        super(...arguments);
        this.pasos = [
            'Ten un reloj cerca para que puedas controlar el tiempo de tu meditación.',
            'Sientate con la espalda recta apoyada en una pared o en una silla.',
            'Para iniciar, intenta respirar lentamente durante dos minutos.',
            'Inhala por la nariz lentamente e intenta llevar el aire a la parte inferior de los pulmone, no infles el pecho, ensancha la parte del diafragma.',
            'Mantén la respiración al menos por 15 segundos, exhala el aire con lentitud, la velocidad debe ser menor a cuando inhalaste.',
            'Mientras haces todo este procedimiento, repite un mantra en tu mente y concéntrate en eso.',
            'La frase puede ser: “Estoy agradecid@ por todo lo que me da la vida”.',
            'Repite esta técnica de meditación por más tiempo.',
        ];
    }
};
DinamicaDosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica-dos',
        template: _raw_loader_dinamica_dos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaDosComponent);



/***/ }),

/***/ "Cut0":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica-tres/dinamica-tres.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 space-y-6\">\n  <img src=\"assets/images/distraccion.jpg\" />\n  <ion-text color=\"primary\">\n    <h1 class=\"text-xl font-bold text-center\">{{ dinamica.titulo }}</h1>\n  </ion-text>\n  <p>\n    Técnicas que consideraríamos dentro de la distracción sería hablar con otras\n    personas, leer o cantar, escuchar música para dejar de pensar en eso, etc.\n  </p>\n  <p>\n    Es importante que tengas en cuenta que no es una técnica que vaya a\n    solucionar tu problema, es una solucion a corto plazo.\n  </p>\n</div>\n");

/***/ }),

/***/ "UYJZ":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica-uno/dinamica-uno.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 space-y-6\">\n  <img src=\"assets/images/meditacion.jpg\" />\n  <ion-text color=\"primary\">\n    <h1 class=\"text-xl font-bold text-center\">{{ dinamica.titulo }}</h1>\n  </ion-text>\n  <ol class=\"list-inside list-decimal\">\n    <li *ngFor=\"let paso of pasos\">{{ paso }}</li>\n  </ol>\n</div>\n");

/***/ }),

/***/ "UpKd":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica-cinco/dinamica-cinco.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 space-y-6\">\n  <img src=\"assets/images/detencion-del-pensamiento.jpg\" />\n  <ion-text color=\"primary\">\n    <h1 class=\"text-xl font-bold text-center\">{{ dinamica.titulo }}</h1>\n  </ion-text>\n\n  <p>\n    Otra de las técnicas que puedes utilizar para hacer frente cuando te venza\n    la ansiedad es lo que llamamos detención de pensamiento. Es una técnica que\n    se centra en controlar aquellos pensamientos que te están haciendo sufrir y\n    te están creando ansiedad\n  </p>\n  <p>\n    Para ello, cuando aparezcan los pensamientos que te producen intranquilidad\n    y empiezas a alterarte y a ponerte nervioso, lo que debes hacer es fijarte\n    en ellos y observar cuáles de ellos son negativos. Una vez los hayas\n    identificado, debes decir fuerte:\n  </p>\n\n  <ul class=\"text-center\">\n    <ion-text color=\"primary\">\n      <li class=\"font-bold\">\"¡BASTA!\"</li>\n    </ion-text>\n    <li>\n      <ion-icon size=\"large\" name=\"hand-right-outline\"></ion-icon>\n    </li>\n    <ion-text color=\"secondary\">\n      <li class=\"font-bold\">\"¡STOP!”</li>\n    </ion-text>\n    <li>\n      <ion-icon size=\"large\" name=\"hand-right-outline\"></ion-icon>\n    </li>\n    <ion-text color=\"tertiary\">\n      <li class=\"font-bold\">\"¡PARA!”</li>\n    </ion-text>\n  </ul>\n  <p>\n    Si estás sola en casa, por ejemplo, puedes decirlo en voz alta y puedes dar\n    incluso una palmada. Si estás en público es mejor que lo digas con todas tus\n    fuerzas mentalmente. Inmediatamente sustitúyelo por otro pensamiento más\n    positivo.\n  </p>\n  <p>\n    Es importante que aprendas antes a identificar los pensamientos que te\n    resultan desagradables y te causan ansiedad. Si no eres capaz de hacerlo\n    aún, puedes utilizar antes un autoregistro de pensamiento. Para ello, toma\n    una hoja y de manera horizontal haz columnas: en una de ellas pon la\n    situación, en otra columna pon “Pensamiento”, en otra pon “Ansiedad (0-10)”.\n    Así, cuando notes que te encuentras mal y que tienes ansiedad, apunta en la\n    hoja el nivel de ansiedad, en qué situación te encuentras y lo que has\n    pensado. Aprende así a identificar los pensamientos.\n  </p>\n</div>\n");

/***/ }),

/***/ "VTd4":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"dinamica$ | async as dinamica\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button\n        text=\"\" defaultHref=\"/dinamicas\"></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"font-alai font-light tracking-widest text-2xl text-center\">{{dinamica.titulo}}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div [ngSwitch]=\"dinamica.id\">\n      <div *ngSwitchCase=\"1\">\n        <app-dinamica-uno [dinamica]=\"dinamica\"></app-dinamica-uno>\n      </div>\n      <div *ngSwitchCase=\"2\">\n        <app-dinamica-dos [dinamica]=\"dinamica\"></app-dinamica-dos>\n      </div>\n      <div *ngSwitchCase=\"3\">\n        <app-dinamica-tres [dinamica]=\"dinamica\"></app-dinamica-tres>\n      </div>\n      <div *ngSwitchCase=\"4\">\n        <app-dinamica-cuatro [dinamica]=\"dinamica\"></app-dinamica-cuatro>\n      </div>\n      <div *ngSwitchCase=\"5\">\n        <app-dinamica-cinco [dinamica]=\"dinamica\"></app-dinamica-cinco>\n      </div>\n      <div *ngSwitchCase=\"6\">\n        <app-dinamica-seis [dinamica]=\"dinamica\"></app-dinamica-seis>\n      </div>\n    </div>\n  </ion-content>\n</ng-container>\n");

/***/ }),

/***/ "WceW":
/*!*****************************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-seis/dinamica-seis.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DinamicaSeisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaSeisComponent", function() { return DinamicaSeisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_seis_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica-seis.component.html */ "u0MT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dinamica_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dinamica-base.component */ "iiTt");






let DinamicaSeisComponent = class DinamicaSeisComponent extends _dinamica_base_component__WEBPACK_IMPORTED_MODULE_5__["DinamicaBaseComponent"] {
    constructor() {
        super(...arguments);
        this.timerState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            count: false,
            value: 100,
        });
        this.isRunning$ = this.timerState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ count }) => count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
        this.time$ = this.timerState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])((state, curr) => (Object.assign(Object.assign({}, state), curr))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((state) => state.count
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((i) => state.value - i))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(state.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((v) => {
            if (v === 0) {
                this.timerState.next({ count: false, value: 100 });
            }
        }));
    }
};
DinamicaSeisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica-seis',
        template: _raw_loader_dinamica_seis_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaSeisComponent);



/***/ }),

/***/ "exA7":
/*!*******************************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-cinco/dinamica-cinco.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DinamicaCincoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaCincoComponent", function() { return DinamicaCincoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_cinco_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica-cinco.component.html */ "UpKd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dinamica-base.component */ "iiTt");




let DinamicaCincoComponent = class DinamicaCincoComponent extends _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__["DinamicaBaseComponent"] {
};
DinamicaCincoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica-cinco',
        template: _raw_loader_dinamica_cinco_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaCincoComponent);



/***/ }),

/***/ "iB8P":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica-dos/dinamica-dos.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 space-y-6\">\n  <img src=\"assets/images/enfoque.jpg\" />\n  <ion-text color=\"primary\">\n    <h1 class=\"text-xl font-bold text-center\">{{ dinamica.titulo }}</h1>\n  </ion-text>\n  <p>\n    Esta técnica consiste en llevar los pensamientos negativos a lugares\n    tranquilos.\n  </p>\n  <p>\n    Imagina que tienes una deuda y eso te quita paz. No te decimos que olvides\n    la deuda; pero lo que sí puedes hacer es ver ese problema bajo otra\n    percepción.\n  </p>\n  <p>\n    Con esta dinámica para la ansiedad y preocupación, podrás llevar cosas\n    negativas hasta tus imágenes mentales de recuerdos agradables.\n  </p>\n  <p>\n    Intenta pensar en aquel día que sonreíste mucho. Incluso, combina recuerdos\n    de sabor, aroma o texturas.\n  </p>\n</div>\n");

/***/ }),

/***/ "iiTt":
/*!***************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-base.component.ts ***!
  \***************************************************************/
/*! exports provided: DinamicaBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaBaseComponent", function() { return DinamicaBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DinamicaBaseComponent = class DinamicaBaseComponent {
};
DinamicaBaseComponent.propDecorators = {
    dinamica: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DinamicaBaseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '',
    })
], DinamicaBaseComponent);



/***/ }),

/***/ "nR7w":
/*!*********************************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-cuatro/dinamica-cuatro.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DinamicaCuatroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaCuatroComponent", function() { return DinamicaCuatroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_cuatro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica-cuatro.component.html */ "7jqq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dinamica-base.component */ "iiTt");




let DinamicaCuatroComponent = class DinamicaCuatroComponent extends _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__["DinamicaBaseComponent"] {
};
DinamicaCuatroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica-cuatro',
        template: _raw_loader_dinamica_cuatro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaCuatroComponent);



/***/ }),

/***/ "pq+C":
/*!***************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DinamicaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaPageRoutingModule", function() { return DinamicaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dinamica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dinamica.page */ "4kNS");




const routes = [
    {
        path: '',
        component: _dinamica_page__WEBPACK_IMPORTED_MODULE_3__["DinamicaPage"]
    }
];
let DinamicaPageRoutingModule = class DinamicaPageRoutingModule {
};
DinamicaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DinamicaPageRoutingModule);



/***/ }),

/***/ "s/jS":
/*!***************************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-uno/dinamica-uno.component.ts ***!
  \***************************************************************************/
/*! exports provided: DinamicaUnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaUnoComponent", function() { return DinamicaUnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_uno_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica-uno.component.html */ "UYJZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dinamica-base.component */ "iiTt");




let DinamicaUnoComponent = class DinamicaUnoComponent extends _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__["DinamicaBaseComponent"] {
    constructor() {
        super(...arguments);
        this.pasos = [
            'Ten un reloj cerca para que puedas controlar el tiempo de tu meditación.',
            'Sientate con la espalda recta apoyada en una pared o en una silla.',
            'Para iniciar, intenta respirar lentamente durante dos minutos.',
            'Inhala por la nariz lentamente e intenta llevar el aire a la parte inferior de los pulmone, no infles el pecho, ensancha la parte del diafragma.',
            'Mantén la respiración al menos por 15 segundos, exhala el aire con lentitud, la velocidad debe ser menor a cuando inhalaste.',
            'Mientras haces todo este procedimiento, repite un mantra en tu mente y concéntrate en eso.',
            'La frase puede ser: “Estoy agradecid@ por todo lo que me da la vida”.',
            'Repite esta técnica de meditación por más tiempo.',
        ];
    }
};
DinamicaUnoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica-uno',
        template: _raw_loader_dinamica_uno_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaUnoComponent);



/***/ }),

/***/ "u0MT":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamica/dinamica-seis/dinamica-seis.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4 space-y-6\">\n  <img src=\"assets/images/conteo.jpg\" />\n  <ion-text color=\"primary\">\n    <h1 class=\"text-xl font-bold text-center\">{{ dinamica.titulo }}</h1>\n  </ion-text>\n  <p>\n    Este ejercicio permite que dejes de pensar, controla los pensamientos que te\n    están afectándote y al mismo tiempo te distrae. Al mismo tiempo, aplicas una\n    tecnica de respiracion.\n  </p>\n  <ng-template #notRunning>\n    <ion-button\n      (click)=\"timerState.next({ count: true, value: 100 })\"\n      expand=\"block\"\n      color=\"primary\"\n    >\n      Iniciar conteo\n      <ion-icon name=\"play-outline\" class=\"ml-2\"></ion-icon>\n    </ion-button>\n  </ng-template>\n  <ion-button\n    *ngIf=\"isRunning$ | async; else notRunning\"\n    (click)=\"timerState.next({ count: false, value: 100 })\"\n    expand=\"block\"\n    color=\"tertiary\"\n  >\n    Reiniciar conteo\n    <ion-icon name=\"reload-outline\" class=\"ml-2\"></ion-icon>\n  </ion-button>\n  <p *ngIf=\"isRunning$ | async\" class=\"text-center text-6xl font-bold\">\n    {{ time$ | async }}\n  </p>\n</div>\n");

/***/ }),

/***/ "uKNN":
/*!*****************************************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica-tres/dinamica-tres.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DinamicaTresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaTresComponent", function() { return DinamicaTresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamica_tres_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamica-tres.component.html */ "Cut0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dinamica-base.component */ "iiTt");




let DinamicaTresComponent = class DinamicaTresComponent extends _dinamica_base_component__WEBPACK_IMPORTED_MODULE_3__["DinamicaBaseComponent"] {
};
DinamicaTresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamica-tres',
        template: _raw_loader_dinamica_tres_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicaTresComponent);



/***/ }),

/***/ "zZ+C":
/*!*******************************************************!*\
  !*** ./src/app/dinamicas/dinamica/dinamica.module.ts ***!
  \*******************************************************/
/*! exports provided: DinamicaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicaPageModule", function() { return DinamicaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dinamica_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dinamica-routing.module */ "pq+C");
/* harmony import */ var _dinamica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dinamica.page */ "4kNS");
/* harmony import */ var _dinamica_uno_dinamica_uno_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dinamica-uno/dinamica-uno.component */ "s/jS");
/* harmony import */ var _dinamica_dos_dinamica_dos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dinamica-dos/dinamica-dos.component */ "BtSw");
/* harmony import */ var _dinamica_tres_dinamica_tres_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dinamica-tres/dinamica-tres.component */ "uKNN");
/* harmony import */ var _dinamica_cuatro_dinamica_cuatro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dinamica-cuatro/dinamica-cuatro.component */ "nR7w");
/* harmony import */ var _dinamica_cinco_dinamica_cinco_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dinamica-cinco/dinamica-cinco.component */ "exA7");
/* harmony import */ var _dinamica_seis_dinamica_seis_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dinamica-seis/dinamica-seis.component */ "WceW");













let DinamicaPageModule = class DinamicaPageModule {
};
DinamicaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dinamica_routing_module__WEBPACK_IMPORTED_MODULE_5__["DinamicaPageRoutingModule"]],
        declarations: [
            _dinamica_page__WEBPACK_IMPORTED_MODULE_6__["DinamicaPage"],
            _dinamica_uno_dinamica_uno_component__WEBPACK_IMPORTED_MODULE_7__["DinamicaUnoComponent"],
            _dinamica_dos_dinamica_dos_component__WEBPACK_IMPORTED_MODULE_8__["DinamicaDosComponent"],
            _dinamica_tres_dinamica_tres_component__WEBPACK_IMPORTED_MODULE_9__["DinamicaTresComponent"],
            _dinamica_cuatro_dinamica_cuatro_component__WEBPACK_IMPORTED_MODULE_10__["DinamicaCuatroComponent"],
            _dinamica_cinco_dinamica_cinco_component__WEBPACK_IMPORTED_MODULE_11__["DinamicaCincoComponent"],
            _dinamica_seis_dinamica_seis_component__WEBPACK_IMPORTED_MODULE_12__["DinamicaSeisComponent"],
        ],
    })
], DinamicaPageModule);



/***/ })

}]);
//# sourceMappingURL=dinamica-dinamica-module.js.map