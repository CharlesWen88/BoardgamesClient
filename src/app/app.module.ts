import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { BoardgamesComponent } from './components/boardgames.component';
import { BoardgameDetailsComponent } from './components/boardgame-details.component';
import { CommentsComponent } from './components/comments.component';
import { ApprouteModule } from './approute.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardgamesComponent,
    BoardgameDetailsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ApprouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
