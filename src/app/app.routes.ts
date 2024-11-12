import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'gif',
        canActivate: [authGuard],
        loadChildren: () => import('./modules/gif/gif.module').then(m => m.GifModule)
    }
];
