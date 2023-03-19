import { getMoviesByKeyword } from 'requests/requests';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Field, Submit } from './SearchMovies.styled';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';

function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setMovies([]);
    setQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

  useEffect(() => {
    if (!query) return;
    setIsLoaded(false);
    async function search() {
      try {
        const { results } = await getMoviesByKeyword(query);
        setMovies(results);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    setSearchParams({ query });
    search();
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    setQuery(e.target.search.value);
  }

  return (
    <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
      <Field type="text" name="search" />
      <Submit type="submit" children="Search" />
      <Suspense>
        {!isLoaded ? <Loader /> : <Gallery movies={movies} />}
      </Suspense>
    </form>
  );
}

export default SearchMovies;
