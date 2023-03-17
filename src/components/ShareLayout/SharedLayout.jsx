import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
