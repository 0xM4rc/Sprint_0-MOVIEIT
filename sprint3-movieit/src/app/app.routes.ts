import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NgModule} from "@angular/core";
import {MovieDescriptionComponent} from "./movie-description/movie-description.component";
import {NotfoundComponent} from "./views/notfound/notfound.component";
import {ProfileComponent} from "../../../../pwmb/sprint3-movieit/src/app/views/profile/profile.component";
import {EditProfileComponent} from "../../../../pwmb/sprint3-movieit/src/app/views/edit-profile/edit-profile.component";;

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movie-description', component: MovieDescriptionComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: '**', component: NotfoundComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
