import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'requests';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  });

  return (
    reviews && (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )
  );
}

export default Reviews;
