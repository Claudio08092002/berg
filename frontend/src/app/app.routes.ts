import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'tours',
        loadComponent: () => import('./pages/tour-list/tour-list').then(m => m.TourList)
    },
    {
        path: 'tours/:id',
        loadComponent: () => import('./pages/tour-detail/tour-detail').then(m => m.TourDetail)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => m.Register)
    },
    {
        path: 'guide/dashboard',
        loadComponent: () => import('./pages/guide-dashboard/guide-dashboard').then(m => m.GuideDashboard)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
