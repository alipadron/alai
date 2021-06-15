import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dinamicas',
    loadChildren: () =>
      import('./dinamicas/dinamicas.module').then((m) => m.DinamicasPageModule),
  },
  {
    path: 'tecnicas-de-respiracion',
    loadChildren: () => import('./tecnicas-de-respiracion/tecnicas-de-respiracion.module').then( m => m.TecnicasDeRespiracionPageModule)
  },
  {
    path: 'bitacora',
    loadChildren: () => import('./bitacora/bitacora.module').then( m => m.BitacoraPageModule)
  },
  {
    path: 'musica',
    loadChildren: () => import('./musica/musica.module').then( m => m.MusicaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
