import { getMoviesByKeyword } from 'requests/requests';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Gallery from 'utils/gallery';

function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!query) return;
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
    <form onSubmit={onSubmit}>
      <input type="text" name="search" />
      <button type="submit" children="Search" />
      <Suspense>{isLoaded && <Gallery movies={movies} />}</Suspense>
    </form>
  );
}

export default SearchMovies;
