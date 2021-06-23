(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nota-nota-module"],{

/***/ "0stb":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@tinkoff/angular-contenteditable-accessor/__ivy_ngcc__/fesm2015/tinkoff-angular-contenteditable-accessor.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ContenteditableValueAccessor, ContenteditableValueAccessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableValueAccessor", function() { return ContenteditableValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableValueAccessorModule", function() { return ContenteditableValueAccessorModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * This is a barebones contenteditable {@link ControlValueAccessor} allowing you to use
 * Angular forms with native contenteditable HTML. For security reasons you might want
 * to consider sanitizing pasted/dropped content before using it. Also make sure that
 * you do not set any dangerous content as control value yourself, because directive
 * just outputs control value as-is.
 */

class ContenteditableValueAccessor {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /*
             * MutationObserver IE11 fallback (as opposed to input event for modern browsers).
             * When mutation removes a tag, i.e. delete is pressed on the last remaining character
             * inside a tag — callback is triggered before the DOM is actually changed, therefore
             * setTimeout is used
             */
        this.observer = new MutationObserver((/**
         * @return {?}
         */
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.onChange(ContenteditableValueAccessor.processValue(this.elementRef.nativeElement.innerHTML));
            }));
        }));
        /*
             * onTouch callback that marks control as touched and allows FormHooks use
             */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        /*
             * onChange callback that writes value to control and allows FormHooks use
             */
        this.onChange = (/**
         * @return {?}
         */
        () => { });
    }
    /*
         * To support IE11 MutationObserver is used to monitor changes to the content
         */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.observer.observe(this.elementRef.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    }
    /*
         * Disconnect MutationObserver IE11 fallback on destroy
         */
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.observer.disconnect();
    }
    /*
         * Listen to input events to write innerHTML value into control,
         * also disconnect MutationObserver as it is not needed if this
         * event works in current browser
         */
    /**
     * @return {?}
     */
    onInput() {
        this.observer.disconnect();
        this.onChange(ContenteditableValueAccessor.processValue(this.elementRef.nativeElement.innerHTML));
    }
    /*
         * Listen to blur event to mark control as touched
         */
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /*
         * Reacts to external change
         *
         * @see {@link ControlValueAccessor#writeValue}
         */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', ContenteditableValueAccessor.processValue(value));
    }
    /*
         * Registers onChange callback
         *
         * @see {@link ControlValueAccessor#registerOnChange}
         */
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    /*
         * Registers onTouch callback
         *
         * @see {@link ControlValueAccessor#registerOnTouched}
         */
    /**
     * @param {?} onTouched
     * @return {?}
     */
    registerOnTouched(onTouched) {
        this.onTouched = onTouched;
    }
    /*
         * Sets disabled state by setting contenteditable attribute to true/false
         *
         * @see {@link ControlValueAccessor#setDisabledState}
         */
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', String(!disabled));
    }
    /*
         * null and other falsy control values are treated as empty string to
         * prevent IE11 outputting 'null', also single <br> is replaced with empty
         * string when passed to the control
         */
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    static processValue(value) {
        /** @type {?} */
        const processed = value || '';
        return processed.trim() === '<br>' ? '' : processed;
    }
}
ContenteditableValueAccessor.ɵfac = function ContenteditableValueAccessor_Factory(t) { return new (t || ContenteditableValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
ContenteditableValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ContenteditableValueAccessor, selectors: [["", "contenteditable", "", "formControlName", ""], ["", "contenteditable", "", "formControl", ""], ["", "contenteditable", "", "ngModel", ""]], hostBindings: function ContenteditableValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ContenteditableValueAccessor_input_HostBindingHandler() { return ctx.onInput(); })("blur", function ContenteditableValueAccessor_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                 * @return {?}
                 */() => ContenteditableValueAccessor)),
                multi: true
            },
        ])] });
/** @nocollapse */
ContenteditableValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],] }] }
];
ContenteditableValueAccessor.propDecorators = {
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContenteditableValueAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[contenteditable][formControlName], [contenteditable][formControl], [contenteditable][ngModel]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                         * @return {?}
                         */() => ContenteditableValueAccessor)),
                        multi: true
                    },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
            }] }]; }, { 
    /*
         * Listen to input events to write innerHTML value into control,
         * also disconnect MutationObserver as it is not needed if this
         * event works in current browser
         */
    /**
     * @return {?}
     */
    onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }], 
    /*
         * Listen to blur event to mark control as touched
         */
    /**
     * @return {?}
     */
    onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContenteditableValueAccessorModule {
}
ContenteditableValueAccessorModule.ɵfac = function ContenteditableValueAccessorModule_Factory(t) { return new (t || ContenteditableValueAccessorModule)(); };
ContenteditableValueAccessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContenteditableValueAccessorModule });
ContenteditableValueAccessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContenteditableValueAccessorModule, { declarations: [ContenteditableValueAccessor], exports: [ContenteditableValueAccessor] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContenteditableValueAccessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [ContenteditableValueAccessor],
                exports: [ContenteditableValueAccessor]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=tinkoff-angular-contenteditable-accessor.js.map

/***/ }),

/***/ "75Xw":
/*!********************************************!*\
  !*** ./src/app/bitacora/nota/nota.page.ts ***!
  \********************************************/
/*! exports provided: NotaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaPage", function() { return NotaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nota_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nota.page.html */ "rdzZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-web-apis/common */ "FWDm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _bitacora_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bitacora.service */ "jL9G");










let NotaPage = class NotaPage {
    constructor(route, bitacoraService, fb, router, document, window) {
        this.route = route;
        this.bitacoraService = bitacoraService;
        this.fb = fb;
        this.router = router;
        this.document = document;
        this.window = window;
        this.nota$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((paramMap) => paramMap.get('notaId')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((notaId) => this.bitacoraService.obtenerNota(notaId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["shareReplay"])());
        this.form = this.fb.group({
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contenido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.nota$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe((nota) => this.form.patchValue(nota || {}));
        this.form
            .get('contenido')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((v) => !v))
            .subscribe(() => this.enfocarTitulo());
    }
    guardar() {
        this.nota$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(({ id }) => {
            if (!id) {
                return this.bitacoraService.agregarNota(this.form.value);
            }
            else {
                return this.bitacoraService.editarNota(id, this.form.value);
            }
        }))
            .subscribe(() => this.router.navigate(['..'], { relativeTo: this.route }));
    }
    enfocarContenido() {
        const range = this.document.createRange();
        const selection = this.window.getSelection();
        if (this.divContenido.nativeElement.lastChild) {
            range.setStart(this.divContenido.nativeElement.lastChild, this.divContenido.nativeElement.lastChild.textContent.length);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        else {
            this.divContenido.nativeElement.focus();
        }
    }
    enfocarTitulo() {
        const range = this.document.createRange();
        const selection = this.window.getSelection();
        if (this.divTitulo.nativeElement.lastChild) {
            range.setStart(this.divTitulo.nativeElement.lastChild, this.divTitulo.nativeElement.lastChild.textContent.length);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        else {
            this.divTitulo.nativeElement.focus();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
NotaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _bitacora_service__WEBPACK_IMPORTED_MODULE_9__["BitacoraService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_6__["WINDOW"],] }] }
];
NotaPage.propDecorators = {
    divContenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['divContenido',] }],
    divTitulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['divTitulo',] }]
};
NotaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nota',
        template: _raw_loader_nota_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotaPage);



/***/ }),

/***/ "DUFz":
/*!******************************************************!*\
  !*** ./src/app/bitacora/nota/nota-routing.module.ts ***!
  \******************************************************/
/*! exports provided: NotaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaPageRoutingModule", function() { return NotaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nota_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nota.page */ "75Xw");




const routes = [
    {
        path: '',
        component: _nota_page__WEBPACK_IMPORTED_MODULE_3__["NotaPage"]
    }
];
let NotaPageRoutingModule = class NotaPageRoutingModule {
};
NotaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotaPageRoutingModule);



/***/ }),

/***/ "otgk":
/*!**********************************************!*\
  !*** ./src/app/bitacora/nota/nota.module.ts ***!
  \**********************************************/
/*! exports provided: NotaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaPageModule", function() { return NotaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nota-routing.module */ "DUFz");
/* harmony import */ var _nota_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nota.page */ "75Xw");
/* harmony import */ var _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/angular-contenteditable-accessor */ "0stb");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









let NotaPageModule = class NotaPageModule {
};
NotaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nota_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotaPageRoutingModule"],
            _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_7__["ContenteditableValueAccessorModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_nota_page__WEBPACK_IMPORTED_MODULE_6__["NotaPage"]],
    })
], NotaPageModule);



/***/ }),

/***/ "rdzZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bitacora/nota/nota.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"nota$ | async as nota\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        text=\"\" defaultHref=\"/bitacora\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"form.invalid\" (click)=\"guardar()\"\n        >Guardar</ion-button\n      >\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-content>\n    <div class=\"p-4 h-full flex max-w-full\" [formGroup]=\"form\">\n      <ion-text color=\"tertiary\" class=\"flex-1 flex flex-col max-w-full\">\n        <div class=\"flex flex-1 flex-col border rounded max-w-full\">\n          <div\n            class=\"\n              p-2\n              focus-visible:outline-none\n              text-4xl\n              font-bold\n              max-w-full\n              whitespace-pre-wrap\n            \"\n            #divTitulo\n            contenteditable\n            formControlName=\"titulo\"\n            (keydown.enter)=\"$event.preventDefault(); enfocarContenido()\"\n          ></div>\n          <div\n            #divContenido\n            class=\"\n              flex-1\n              p-2\n              focus-visible:outline-none\n              max-w-full\n              whitespace-pre-wrap\n            \"\n            contenteditable\n            formControlName=\"contenido\"\n          ></div>\n        </div>\n        <p class=\"text-xs\">{{nota.fecha | date}}</p>\n      </ion-text>\n    </div>\n  </ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=nota-nota-module.js.map