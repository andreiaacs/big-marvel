import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'characters', component: CharactersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
