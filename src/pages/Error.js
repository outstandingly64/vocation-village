import {Link} from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="404 not found!" />
        <h3>Page not found...</h3>
        <p>The page you are looking for cannot be found.</p>
        <Link to='/'>Back To Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error