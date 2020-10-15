import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
