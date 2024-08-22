import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    title: "Home",
    path: '',
    loadComponent: () => import('./components/check.khodam/check.khodam.component').then(c => c.CheckKhodamComponent)
  }
];
