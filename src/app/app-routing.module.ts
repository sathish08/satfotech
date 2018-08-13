import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path:'login', component:LoginComponent },
	{ path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard] },
	{ path:'404', component:PageNotFoundComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path:'**', redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
