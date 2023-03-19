import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
}

export default SharedLayout;
