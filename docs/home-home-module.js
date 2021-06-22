(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "N9AZ":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/info/info.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item>\n    María Victoria Bustos\n  </ion-item>\n  <ion-item>\n    5to año \"A\"\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-button>\n          <ion-icon></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title\n        class=\"font-alai font-light tracking-widest text-4xl text-center\"\n      >\n        Alai\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"displayInfo($event)\" color=\"light\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card *ngFor=\"let item of items\" [routerLink]=\"item.url\">\n    <img class=\"h-24 object-cover w-full\" [src]=\"item.imagen\" />\n    <ion-card-header [color]=\"item.color\">\n      <ion-card-title class=\"text-2xl font-alai font-light tracking-widest\">{{item.titulo}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>{{item.descripcion | excerpt:18}} </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "YuHN":
/*!*********************************************!*\
  !*** ./src/app/home/info/info.component.ts ***!
  \*********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info.component.html */ "N9AZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let InfoComponent = class InfoComponent {
    constructor() { }
    ngOnInit() { }
};
InfoComponent.ctorParameters = () => [];
InfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-info',
        template: _raw_loader_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], InfoComponent);



/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/info.component */ "YuHN");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"]],
    })
], HomePageModule);



/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/info.component */ "YuHN");







let HomePage = class HomePage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.items = [
            {
                titulo: 'Dinámicas',
                descripcion: 'Las dinámicas son actividades que tienen como prioridad centrarse en las personas participantes como individuos para ayudar a controlar ciertas situaciones implementando las habilidades para la vida.',
                url: '/dinamicas',
                color: 'primary',
                imagen: 'assets/images/dinamicas.jpg',
            },
            {
                titulo: 'Técnicas de respiración',
                descripcion: 'Las técnicas de respiración son una serie de pasos que te permiten respirar con cierto orden y sentido, de manera que te permita relajarte y en tal caso, parar un ataque de pánico.',
                url: '/tecnicas-de-respiracion',
                color: 'secondary',
                imagen: 'assets/images/tecnicas-de-respiracion.jpg',
            },
            {
                titulo: 'Bitacora',
                descripcion: 'Una bitácora es una serie de anotaciones en las que recopilas detalles importantes y acotaciones de tu progreso.',
                url: '/bitacora',
                color: 'tertiary',
                imagen: 'assets/images/bitacora.jpg',
            },
            {
                titulo: 'Música',
                descripcion: 'La música puede jugar un papel importante en el cuidado de nosotros mismos, no solo como entretenimiento, sino también como herramienta terapéutica para el manejo del estrés. La música nos permite relajarnos a través de un proceso físico por el cual vibraciones de diferente origen se ajustan hasta lograr un mismo ritmo.',
                url: '/musica',
                color: 'primary',
                imagen: 'assets/images/musica.jpg',
            },
        ];
    }
    displayInfo(event) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.popoverController.create({
            event,
            component: _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"],
            translucent: true,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((popover) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(popover.present())))
            .subscribe();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map