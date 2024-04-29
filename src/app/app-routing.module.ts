import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {RegisterComponent} from "./views/register/register.component";
import {MovieDescriptionComponent} from "./views/movie-description/movie-description.component";
import {ProfileComponent} from "./views/profile/profile.component";
import {EditProfileComponent} from "./views/edit-profile/edit-profile.component";
import {NotfoundComponent} from "./views/notfound/notfound.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movie-description', component: MovieDescriptionComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
