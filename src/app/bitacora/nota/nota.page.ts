import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WINDOW } from '@ng-web-apis/common';
import { Observable, Subject } from 'rxjs';
import {
  filter,
  map,
  shareReplay,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';
import { BitacoraService } from '../bitacora.service';
import { Nota } from '../nota.interface';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
})
export class NotaPage implements OnInit, OnDestroy {
  nota$: Observable<Nota> = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('notaId')),
    switchMap((notaId) => this.bitacoraService.obtenerNota(notaId)),
    shareReplay()
  );

  form: FormGroup = this.fb.group({
    titulo: ['', Validators.required],
    contenido: ['', Validators.required],
  });

  @ViewChild('divContenido')
  private divContenido: ElementRef<HTMLDivElement>;
  @ViewChild('divTitulo')
  private divTitulo: ElementRef<HTMLDivElement>;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private bitacoraService: BitacoraService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.nota$
      .pipe(take(1))
      .subscribe((nota) => this.form.patchValue(nota || {}));
    this.form
      .get('contenido')
      .valueChanges.pipe(
        takeUntil(this.destroy$),
        filter((v) => !v)
      )
      .subscribe(() => this.enfocarTitulo());
  }

  guardar(): void {
    this.bitacoraService
      .agregarNota(this.form.value)
      .subscribe(() =>
        this.router.navigate(['..'], { relativeTo: this.route })
      );
  }

  enfocarContenido() {
    const range = this.document.createRange();
    const selection = this.window.getSelection();
    if (this.divContenido.nativeElement.lastChild) {
      range.setStart(
        this.divContenido.nativeElement.lastChild,
        this.divContenido.nativeElement.lastChild.textContent.length
      );
      range.collapse(true);

      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      this.divContenido.nativeElement.focus();
    }
  }

  enfocarTitulo() {
    const range = this.document.createRange();
    const selection = this.window.getSelection();
    if (this.divTitulo.nativeElement.lastChild) {
      range.setStart(
        this.divTitulo.nativeElement.lastChild,
        this.divTitulo.nativeElement.lastChild.textContent.length
      );
      range.collapse(true);

      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      this.divTitulo.nativeElement.focus();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
