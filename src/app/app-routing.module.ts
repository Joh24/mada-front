import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { RegisterComponent } from './register/register.component';
import { SittingComponent } from './sitting/sitting.component';
import { AuthGuard } from './auth.guard';
import { AfterRegisterComponent } from './after-register/after-register.component';

const routes: Routes = [
  {path : 'list', component : ProfileListComponent/*, canActivate:[AuthGuard]*/},
  {path : 'profile/:id', component : ProfileComponent, canActivate:[AuthGuard]},
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'message', component : MessageComponent/*, canActivate:[AuthGuard]*/},
  {path : 'register', component : RegisterComponent},
  {path : 'sitting', component : SittingComponent},
  {path : 'messages', component : MessageListComponent},
  {path : 'after-register', component : AfterRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
