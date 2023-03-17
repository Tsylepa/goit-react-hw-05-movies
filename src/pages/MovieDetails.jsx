import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieById } from '../requests';
import placeholder from 'images/placeholder.webp';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        const resp = await getMovieById(movieId);
        setMovie(resp);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  }, [movieId]);

  const { poster_path, overview } = movie;
  const location = useLocation();
  const backPath = location.state?.from ?? '/';
  console.log(location.state);

  return (
    isLoaded && (
      <>
        <Link to={backPath}>Back</Link>
        <img
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : placeholder
          }
          width="300"
        />
        <p>{overview}</p>
        <Link to="reviews" state={{ from: backPath }}>
          Reviews
        </Link>
        <Link to="cast" state={{ from: backPath }}>
          Cast
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
}

export default MovieDetails;
