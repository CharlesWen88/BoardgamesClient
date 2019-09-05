import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Boardgame, BoardgameName, BoardgameList, Comment } from './model';

@Injectable()
export class BoardgameService {

  constructor(readonly http: HttpClient) { }

  boardgames(): Promise<BoardgameList> {
    return (
      this.http.get<string[]>('/api/boardgames/name/:name')
        .toPromise()
        .then(result => {
          return (<BoardgameList>{
            boardgames: result,
          });
        })
    );
  }

}
