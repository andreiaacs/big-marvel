import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { FilterPipe } from './pipes/filter.pipe';
import { PipesModule } from 'w-ng5';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComicsListComponent,
    CharactersListComponent,
    AboutComponent,
    ContactComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
