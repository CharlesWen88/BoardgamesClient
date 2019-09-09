import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Boardgame, BoardgameName, BoardgameList, Comment } from './model';

@Injectable()
export class BoardgameService {

  constructor(readonly http: HttpClient) { }

  boardgamesByName(name: string): Promise<BoardgameList> {
    return (
      this.http.get<BoardgameName[]>(`/api/boardgames/name/${name}`)
        .toPromise()
        .then(result => {
          return (<BoardgameList>{
            boardgames: result,
          });
        })
    );
  }

  boardgamesByCategory(category: string): Promise<BoardgameList> {
    return (
      this.http.get<BoardgameName[]>(`/api/boardgames/category/${category}`)
        .toPromise()
        .then(result => {
          return (<BoardgameList>{
            boardgames: result,
          });
        })
    );
  }

}
