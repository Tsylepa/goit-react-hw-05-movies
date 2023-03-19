import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../requests';
import placeholder from 'images/placeholder.webp';
import { Info, Back, MoreInfo, MoreLink, Meta } from './MovieDetails.styled';
import { MdArrowBackIosNew } from 'react-icons/md';
import { ThreeDots } from 'react-loader-spinner';
import Loader from 'components/Loader';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoaded(false);

        const resp = await getMovieById(movieId);

        setMovie(resp);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  }, [movieId]);

  const { poster_path, overview, title, release_date, genres } = movie;
  const location = useLocation();
  const backPath = location.state?.from ?? '/';

  return !isLoaded ? (
    <Loader />
  ) : (
    <>
      <Back to={backPath}>
        <MdArrowBackIosNew />
        Back
      </Back>
      <Info>
        <img
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : placeholder
          }
          width="300"
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <Meta>
            <span>{release_date.slice(0, 4)}</span>
            {genres.map(({ name }) => name).join(', ')}
          </Meta>
          <p>{overview}</p>
          <MoreInfo>
            <li>
              <MoreLink to="reviews" state={{ from: backPath }}>
                Reviews
              </MoreLink>
            </li>
            <li>
              <MoreLink to="cast" state={{ from: backPath }}>
                Cast
              </MoreLink>
            </li>
          </MoreInfo>
        </div>
      </Info>

      <Suspense
        fallback={
          <ThreeDots
            color="orangered"
            secondaryColor="orange"
            height={40}
            width={40}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
