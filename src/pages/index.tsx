import React from 'react'
import {Link} from 'react-router-dom';

import {Card} from '../components/Card';
import { useAuth } from '../contexts/auth-context';

const HomePage = () => {
  const [isAuthenticated] = useAuth();

  return (
    <div>
      Home
      <Link to="/about">
        About
      </Link>

      <br />
      <>
        State:
        {JSON.stringify(isAuthenticated, null, 2)}
      </>

      <br />

      <Card isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default HomePage;
