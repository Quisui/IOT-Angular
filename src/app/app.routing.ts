import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//componentes
import {MovimientoComponent} from './components/movimiento/movimiento.component';
import {LuzComponent} from './components/luz/luz.component';
import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'movimiento', component: MovimientoComponent},
  {path: 'luz', component: LuzComponent},
  {path: '**', component: ErrorComponent  }
];
//exportar rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

