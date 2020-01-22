import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardgameService } from '../boardgame.service';
import { Boardgame, CommentList } from '../model';

@Component({
  selector: 'app-boardgame-details',
  templateUrl: './boardgame-details.component.html',
  styleUrls: ['./boardgame-details.component.css']
})
export class BoardgameDetailsComponent implements OnInit {

  id = '';
  boardgame: Boardgame;
  commentList: CommentList = { comments: [] };
  imageUrl: string;

  constructor(readonly router: Router, readonly activateRoute: ActivatedRoute,
    readonly boardgameSvc: BoardgameService) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params.id;
    console.info('>>id: ', id);
    this.boardgameSvc.boardgameDetails(id)
      .then(result => {
        console.info('details: ', result)
        this.boardgame = result;
        this.imageUrl = this.boardgame.thumbnail;
      })
      .catch(error => {
        console.info('error: ', error)
      })

    this.boardgameSvc.commentsByBoardgameId(id)
      .then(result => {
        this.commentList = result;
        console.info('>> Comments list: ', this.commentList)
      })
      .catch(error => {
        console.info('error: ', error)
      })

  }

}
