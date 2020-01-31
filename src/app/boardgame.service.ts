import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Boardgame, BoardgameDetails, BoardgameName, BoardgameList, CommentList, CommentDetails } from './model';

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

  boardgameDetails(id: string): Promise<Boardgame> {
    return (
      this.http.get<any>(`/api/boardgame/${id}`)
        .toPromise()
        .then(result => {
          return <Boardgame>{
            _id: result._id,
            id: result.ID,
            name: result.Name,
            year: result.Year,
            rank: result.Rank,
            average: result.Average,
            bayesAverage: result['Bayes average'],
            usersRated: result['Users rated'],
            url: result.URL,
            thumbnail: result.Thumbnail
          }
        })
      )
  }

  boardgameAdditionalDetails(id: string): Promise<BoardgameDetails> {
    return (
      this.http.get<any>(`/api/boardgame/details/${id}`)
        .toPromise()
        .then(result => {
          return <BoardgameDetails>{
            _id: result._id,
            id: result.id,
            minPlayers: result.minplayers,
            maxPlayers: result.maxplayers
          }
        })
      )
  }

  commentsByBoardgameId(id: string): Promise<CommentList> {
    return (
      this.http.get<CommentDetails[]>(`/api/comments/${id}`)
        .toPromise()
        .then(result => {
          return (<CommentList>{
            comments: result,
          });
        })
    );
  }

}
