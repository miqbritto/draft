import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/play/play').then(m => m.Play)
  }
];
