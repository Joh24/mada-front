import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { RegisterComponent } from './register/register.component';
import { SittingComponent } from './sitting/sitting.component';

const routes: Routes = [
  {path : 'list', component : ProfileListComponent },
  {path : 'profile', component : ProfileComponent},
  {path : '', component : LoginComponent},
  {path : 'message', component : MessageComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'sitting', component : SittingComponent},
  {path : 'messages', component : MessageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
