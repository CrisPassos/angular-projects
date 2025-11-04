import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then(c => c.Home)
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos/todos').then(c => c.Todos)
  }
];
