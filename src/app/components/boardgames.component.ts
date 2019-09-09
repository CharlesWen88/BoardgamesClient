import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardgameService } from '../boardgame.service';
import { BoardgameList } from '../model';

@Component({
  selector: 'app-boardgames',
  templateUrl: './boardgames.component.html',
  styleUrls: ['./boardgames.component.css']
})
export class BoardgamesComponent implements OnInit {

  name = '';
  category = '';
  boardgameList: BoardgameList = { boardgames: [] }

  constructor(readonly activateRoute: ActivatedRoute,
    readonly router: Router, readonly boardgameSvc: BoardgameService) { }

  ngOnInit() {
    if (this.activateRoute.snapshot.params.category == null)
    {
      this.name = this.activateRoute.snapshot.params.name;
      this.boardgameSvc.boardgamesByName(this.name)
        .then(result => {
          this.boardgameList = result;
          console.log('Searching by Name');
          console.info('>> Boardgame list: ', this.boardgameList)
        })
    }
    else
    {
      this.category = this.activateRoute.snapshot.params.category;
      this.boardgameSvc.boardgamesByCategory(this.category)
        .then(result => {
          this.boardgameList = result;
          console.log('Searching by Category');
          console.info('>> Boardgame list: ', this.boardgameList)
        })
    }
    
  }

}
