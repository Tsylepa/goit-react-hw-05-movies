import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() => import('./ShareLayout'));
const Home = lazy(() => import('pages/Home'));
const SearchMovies = lazy(() => import('pages/SearchMovies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
