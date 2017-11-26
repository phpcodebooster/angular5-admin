import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        resolve: {
            configs: ConfigService
        }
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthService ],
        resolve: {
            configs: ConfigService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ConfigService]
})
export class AppRoutingModule { }
