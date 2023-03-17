import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import placeholder from 'images/placeholder.webp';

function Gallery({ movies }) {
  const location = useLocation();
  // const [movie]
  return (
    <>
      <ul>
        {movies.map(({ id, poster_path, title }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location.pathname + location.search }}
            >
              <img
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                    : placeholder
                }
                width="300"
              />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Gallery;
