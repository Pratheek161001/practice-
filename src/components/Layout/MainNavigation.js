import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../auth-context';

const MainNavigation = () => {
  const authcntxt=useContext(AuthContext)
  const iloggedin=authcntxt.isloggedin
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!iloggedin && (<li>
            <Link to='/auth'>Login</Link>
          </li>)}
          {iloggedin && (<li>
            <Link to='/profile'>Profile</Link>
          </li>)}
          {iloggedin && (<li>
            <button>Logout</button>
          </li>)}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
