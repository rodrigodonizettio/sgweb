
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    LoginComponent,
    MainComponent,
    SecadorComponent,
    RelatorioComponent,
    UsuarioComponent,
    SearchComponent
} from './components/index.pages';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'secador/:numero', component: SecadorComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'search/:numero', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash:true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }

export const routedComponents = [
  LoginComponent,
  MainComponent,
  SecadorComponent,
  RelatorioComponent,
  UsuarioComponent
];















/*
import { Routes, RouterModule } from '@angular/router';

import { 
    LoginComponent,
    MainComponent,
    RelatorioComponent,
    UsuarioComponent
} from './components/index.pages';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routedComponents = RouterModule.forRoot(routes);
*/