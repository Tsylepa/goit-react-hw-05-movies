import { useParams } from 'react-router-dom';
import { getMovieCast } from 'requests';
import { useState, useEffect } from 'react';

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
  });

  const { movieId } = useParams();
  return (
    cast && (
      <ul>
        {cast.map(({ id, character, name }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
