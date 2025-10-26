import { Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HomeComponent } from './home/home.component';

//export const routes: Routes = [];
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: GoogleMapComponent },
  { path: '**', redirectTo: '' }
];