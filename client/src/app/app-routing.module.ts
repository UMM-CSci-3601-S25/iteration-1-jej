import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing-page/landing-page';
import { SettingsComponent } from './settings-page/settings-page';
import { GameComponent } from './game-page/game-page';

// Note that the 'users/new' route needs to come before 'users/:id'.
// If 'users/:id' came first, it would accidentally catch requests to
// 'users/new'; the router would just think that the string 'new' is a user ID.
const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Generic Apples Game'},
  {path: 'settings', component: SettingsComponent, title: 'Settings'},
  {path: 'game', component: GameComponent, title: 'Game'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
