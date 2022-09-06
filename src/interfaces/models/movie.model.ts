export interface Movie {
  _id: string;
  name: string;
  title?: string;
  description?: string;
  cover?: string;
  adult?: boolean;
  backdrop_path?: string;
  media_type?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: Date;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  isFav: boolean;
}

export interface MovieResponse {
  success: boolean;
  entry: Movie;
}

export interface MovieListResponse {
  success: boolean;
  entries: Movie[];
  page?: number;
  total?: number;
}
