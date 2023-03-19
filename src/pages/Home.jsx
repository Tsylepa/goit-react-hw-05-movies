import { useState, useEffect } from 'react';
import { getTrending } from 'requests';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';

function Home() {
  const [trending, setTrending] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        const { results } = await getTrending(1);
        setTrending(results);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  return <>{!isLoaded ? <Loader /> : <Gallery movies={trending} />}</>;
}

export default Home;
