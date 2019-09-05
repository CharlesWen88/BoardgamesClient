import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { BoardgamesComponent } from './components/boardgames.component';
import { BoardgameDetailsComponent } from './components/boardgame-details.component';
import { CommentsComponent } from './components/comments.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boardgames', component: BoardgamesComponent },
  { path: 'details', component: BoardgameDetailsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class ApprouteModule { }
