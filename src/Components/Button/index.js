import { Link } from 'react-router-dom';
import { Container } from './styles';

function Button() {
  return (
    <Container>
      <Link to='/'>
        <div>
          <button>Go Back</button>
        </div>
      </Link>
    </Container>
  );
}

export default Button;
