import Wrapper from '../../assets/wrappers/SharedLayout';
import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add a job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet/>
    </Wrapper>
  )
}

export default SharedLayout