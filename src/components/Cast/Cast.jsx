import { useParams } from 'react-router-dom';
import { getMovieCast } from 'requests';
import { useState, useEffect } from 'react';
import { Character, Grid } from './Cast.styled';
import actorPlaceholder from 'images/placeholder-profile.jpg';
const Cast = () => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, []);

  const { movieId } = useParams();
  return (
    cast && (
      <Grid>
        {cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : actorPlaceholder
              }
            />
            <p>{name}</p>
            <Character>{character}</Character>
          </li>
        ))}
      </Grid>
    )
  );
};

export default Cast;
