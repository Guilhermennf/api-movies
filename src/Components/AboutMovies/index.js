import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../Api';
import Button from '../../Components/Button';

import { Container } from './styles';

function AboutMovies() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`,
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date } = data;

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };

        setMovie(movie);
      });
  }, []);

  return (
    <Container>
      <div className='movie'>
        <img src={movie.image} alt={movie.sinopse} />
        <div className='details'>
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span>Release Date: {movie.releaseDate}</span>
          <Button />
        </div>
      </div>
    </Container>
  );
}

export default AboutMovies;
