import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API } from '../../Api';
import { Container, Movie, MovieList } from './styles';

function ListMoviesToHome() {
  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  const loadMovies = useCallback(async () => {
    const { data } = await API.get(
      `3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );

    setMovies(data.results);
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default ListMoviesToHome;
