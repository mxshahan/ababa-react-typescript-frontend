import React, { useEffect, useState } from "react";
import { MovieCard } from "../components/Pages/Movies/MovieCard";
import { Pagination } from "../components/Pagination/component";
import { Movie } from "../interfaces/models";
import { useGetMoviesQuery } from "../store/apis/movie.api";

export const Movies = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(30);

  const { data, refetch, isLoading } = useGetMoviesQuery({
    page,
    limit,
    sort: "createdAt,desc",
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleChangePage = ({ page: _page }: { page: number; pageSize: number }) => {
    setPage(_page);
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl mb-4 font-semibold text-white">Movies</h1>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-5">
            {data?.entries.map((movie: Movie) => (
              <MovieCard key={movie._id} movie={movie} isFav={movie.isFav} />
            ))}
          </div>
          <div className="py-10 text-center">
            <Pagination
              className="invert"
              total={data?.total || 0}
              page={page}
              pageSize={limit}
              onChangePage={handleChangePage}
            />
          </div>
        </>
      )}
    </div>
  );
};
