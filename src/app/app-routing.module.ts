import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    // Lazy load para auth/ -> Cargar AuthModule
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  }, 
  {
   // Lazy load para heroes/ -> Cargar HeroesModule
    path: 'heroes',
    loadChildren: () => import('../app/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    // load para / -> Carga directo los componentes
    path: '404',
    component: Error404Component
  }, {
    path: '**',
    // component: Error404Component
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
