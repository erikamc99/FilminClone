import { useEffect, useState } from 'react';
import {
  getFamilyFriendly,
  getAnimated,
  getRomantic,
} from '../services/TmbServicesCarousel';

const fetchFunctions = {
  family: getFamilyFriendly,
  animated: getAnimated,
  romantic: getRomantic,
};

export function useFetchMovies(category) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category || !fetchFunctions[category]) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const data = await fetchFunctions[category]();
        setMovies(data.results || []);
      } catch (error) {
        console.error(`Error fetching ${category} movies:`, error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  return { movies, loading };
}
