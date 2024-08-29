export type Movies = {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  genre_ids: number[];
  is_favorite: boolean;
};
