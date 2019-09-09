export interface Boardgame {
  _id: string;
  id: string;
  name: string;
  year: string;
  rank: string;
  average: string;
  bayesAverage: string;
  usersRated: string;
  url: string;
  thumbnail: string;
}

export interface BoardgameName {
  _id: string;
  id: string;
  name: string;
}

export interface BoardgameList {
  boardgames: BoardgameName[];
}

export interface Comment {
  _id: string;
  id: string;
  name: string;
  user: string;
  rating: string;
  comment: string;
}
