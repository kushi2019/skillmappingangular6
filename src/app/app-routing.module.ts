import { NgModule } from '@angular/core';
import { RegisterComponent }      from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ListallComponent} from './listall/listall.component'
import { HomeComponent } from './home/home.component';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  { path: 'register', component: RegisterComponent },
  {path:'login',component:LoginComponent},
  {path:'listall',component:ListallComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'logout',component:LogoutComponent},
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
