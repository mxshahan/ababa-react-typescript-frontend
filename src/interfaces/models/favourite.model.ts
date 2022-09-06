import { Movie } from "./movie.model";

export interface Favourite {
  _id: string;
  user: string;
  movie: Movie;
  createdAt: Date;
  updatedAt: Date;
}

export interface FavouriteListResponse {
  success: boolean;
  entries: Favourite[];
  page?: number;
  total?: number;
}
