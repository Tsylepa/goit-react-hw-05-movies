import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import placeholder from 'images/placeholder.webp';
import { Grid, Movie, Title } from './Gallery.styled';

function Gallery({ movies }) {
  const location = useLocation();
  // const [movie]
  return (
    <>
      <Grid>
        {movies.map(({ id, poster_path, title }) => (
          <Movie key={id}>
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
              <Title>{title}</Title>
            </Link>
          </Movie>
        ))}
      </Grid>
    </>
  );
}

export default Gallery;
