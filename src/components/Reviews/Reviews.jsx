import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'requests';
import { Author, Empty, ReviewsList } from './Reviews.styled';
import avatar from 'images/avatar.png';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const { results } = await getMovieReviews(movieId);
        results.length && setReviews(results);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, []);

  return (
    isLoaded &&
    (!reviews ? (
      <Empty>No reviews yet...</Empty>
    ) : (
      <ReviewsList>
        {reviews.map(({ id, author, content, author_details: { rating } }) => (
          <li key={id}>
            <img src={avatar} width="40" />
            <Author>{author}</Author>
            <p>{content}</p>
          </li>
        ))}
      </ReviewsList>
    ))
  );
}

export default Reviews;
