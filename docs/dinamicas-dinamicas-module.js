(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dinamicas-dinamicas-module"],{

/***/ "EOSA":
/*!***********************************************!*\
  !*** ./src/app/dinamicas/dinamicas.module.ts ***!
  \***********************************************/
/*! exports provided: DinamicasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicasPageModule", function() { return DinamicasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dinamicas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dinamicas-routing.module */ "eeyi");
/* harmony import */ var _dinamicas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dinamicas.page */ "vf11");







let DinamicasPageModule = class DinamicasPageModule {
};
DinamicasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dinamicas_routing_module__WEBPACK_IMPORTED_MODULE_5__["DinamicasPageRoutingModule"]
        ],
        declarations: [_dinamicas_page__WEBPACK_IMPORTED_MODULE_6__["DinamicasPage"]]
    })
], DinamicasPageModule);



/***/ }),

/***/ "SV5i":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dinamicas/dinamicas.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        text=\"\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"font-alai font-light tracking-widest text-2xl text-center\">Dinámicas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n\n        <ion-icon></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"p-4\">\n    <img src=\"assets/images/dinamicas.jpg\" />\n    <p>\n      Las dinámicas son actividades que tienen como prioridad centrarse en las\n      personas participantes como individuos para ayudar a controlar ciertas\n      situaciones implementando las habilidades para la vida.\n    </p>\n  </div>\n  <ion-list>\n    <ion-item\n      [routerLink]=\"dinamica.id.toString()\"\n      *ngFor=\"let dinamica of dinamicas\"\n    >\n      <ion-label color=\"primary\">\n        <h1>{{dinamica.titulo}}</h1>\n        <p>{{dinamica.descripcion}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "eeyi":
/*!*******************************************************!*\
  !*** ./src/app/dinamicas/dinamicas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DinamicasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicasPageRoutingModule", function() { return DinamicasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dinamicas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dinamicas.page */ "vf11");




const routes = [
    {
        path: '',
        component: _dinamicas_page__WEBPACK_IMPORTED_MODULE_3__["DinamicasPage"]
    },
    {
        path: ':dinamicaId',
        loadChildren: () => __webpack_require__.e(/*! import() | dinamica-dinamica-module */ "dinamica-dinamica-module").then(__webpack_require__.bind(null, /*! ./dinamica/dinamica.module */ "zZ+C")).then(m => m.DinamicaPageModule)
    }
];
let DinamicasPageRoutingModule = class DinamicasPageRoutingModule {
};
DinamicasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DinamicasPageRoutingModule);



/***/ }),

/***/ "jvjw":
/*!****************************************!*\
  !*** ./src/app/dinamicas/dinamicas.ts ***!
  \****************************************/
/*! exports provided: DINAMICAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DINAMICAS", function() { return DINAMICAS; });
const DINAMICAS = [
    {
        id: 1,
        titulo: 'Mantras y meditación',
        descripcion: 'Ten un reloj cerca para que puedas controlar el tiempo de tu meditación. Sientate con la espalda recta apoyada en una pared o en una silla. Para iniciar, intenta respirar lentamente durante dos minutos.Inhala por la nariz lentamente e intenta llevar el aire a la parte inferior de los pulmone, no infles el pecho, ensancha la parte del diafragma. Mantén la respiración al menos por 15 segundos, exhala el aire con lentitud, la velocidad debe ser menor a cuando inhalaste. Mientras haces todo este procedimiento, repite un mantra en tu mente y concéntrate en eso. La frase puede ser: “Estoy agradecid@ por todo lo que me da la vida”. Repite esta técnica de meditación por más tiempo.',
    },
    {
        id: 2,
        titulo: 'Visualización y enfoque mental',
        descripcion: 'Esta técnica consiste en llevar los pensamientos negativos a lugares tranquilos.Imagina que tienes una deuda y eso te quita paz. No te decimos que olvides la deuda; pero lo que sí puedes hacer es ver ese problema bajo otra percepción. Con esta dinámica para la ansiedad y preocupación, podrás llevar cosas negativas hasta tus imágenes mentales de recuerdos agradables. Intenta pensar en aquel día que sonreíste mucho. Incluso, combina recuerdos de sabor, aroma o texturas.',
    },
    {
        id: 3,
        titulo: 'Distracción',
        descripcion: 'Técnicas que consideraríamos dentro de la distracción sería hablar con otras personas, leer o cantar, escuchar música para dejar de pensar en eso, etc.  Es importante que tengas en cuenta que no es una técnica que vaya a solucionar tu problema, es una solucion a corto plazo.',
    },
    {
        id: 4,
        titulo: 'Autoinstrucciones',
        descripcion: 'Puedes elegir una frase que a menudo te digas para tranquilizarte. Algunos ejemplos pueden ser: “Calma. Todo pasa.”, “Tranquilo, todo irá bien”, “Relájate y respira”.En el momento en el que te sientas mal y ansioso, acompáñalo de respiraciones profundas y ve diciéndote las autoinstrucciones que hayas elegido para ti. Es importante que las personalices y que escojas aquellas que a ti te transmitan calma y tranquilidad. Estas frases son diferentes para cada uno de nosotros.',
    },
    {
        id: 5,
        titulo: 'Detención del pensamiento',
        descripcion: 'Otra de las técnicas que puedes utilizar para hacer frente cuando te venza la ansiedad es lo que llamamos detención de pensamiento. Es una técnica que se centra en controlar aquellos pensamientos que te están haciendo sufrir y te están creando ansiedad. Para ello, cuando aparezcan los pensamientos que te producen intranquilidad y empiezas a alterarte y a ponerte nervioso, lo que debes hacer es fijarte en ellos y observar cuáles de ellos son negativos. Una vez los hayas identificado, debes decir fuerte “¡BASTA!” o “¡STOP!” o “¡PARA!”. Si estás sola en casa, por ejemplo, puedes decirlo en voz alta y puedes dar incluso una palmada. Si estás en público es mejor que lo digas con todas tus fuerzas mentalmente. Inmediatamente sustitúyelo por otro pensamiento más positivo.Es importante que aprendas antes a identificar los pensamientos que te resultan desagradables y te causan ansiedad. Si no eres capaz de hacerlo aún, puedes utilizar antes un autoregistro de pensamiento. Para ello, toma una hoja y de manera horizontal haz columnas: en una de ellas pon la situación, en otra columna pon “Pensamiento”, en otra pon “Ansiedad (0-10)”. Así, cuando notes que te encuentras mal y que tienes ansiedad, apunta en la hoja el nivel de ansiedad, en qué situación te encuentras y lo que has pensado. Aprende así a identificar los pensamientos.',
    },
    {
        id: 6,
        titulo: 'Contar en reversa del 100',
        descripcion: 'Este ejercicio permite que dejes de pensar, controla los pensamientos que te están afectándote y  al mismo tiempo te distrae. Al mismo tiempo, aplicas una tecnica de respiracion.',
    },
];


/***/ }),

/***/ "vf11":
/*!*********************************************!*\
  !*** ./src/app/dinamicas/dinamicas.page.ts ***!
  \*********************************************/
/*! exports provided: DinamicasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DinamicasPage", function() { return DinamicasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dinamicas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dinamicas.page.html */ "SV5i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dinamicas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dinamicas */ "jvjw");




let DinamicasPage = class DinamicasPage {
    constructor() {
        this.dinamicas = _dinamicas__WEBPACK_IMPORTED_MODULE_3__["DINAMICAS"];
    }
    ngOnInit() { }
};
DinamicasPage.ctorParameters = () => [];
DinamicasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dinamicas',
        template: _raw_loader_dinamicas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DinamicasPage);



/***/ })

}]);
//# sourceMappingURL=dinamicas-dinamicas-module.js.map