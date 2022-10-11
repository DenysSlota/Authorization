import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, CATALOG_ROUTE } from '../../utils/constans';
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from 'react';
import { Context } from '../..';
import { signOut } from 'firebase/auth';
import styles from './Header.module.css';

const Header = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);


  return (
    <div className={styles.container}>
      {user ? 
          <>
            <NavLink to={HOME_ROUTE}>Home</NavLink>
            <NavLink to={CATALOG_ROUTE}>Catalog</NavLink>
            <NavLink onClick={() => signOut(auth)} to={HOME_ROUTE}>SignOut</NavLink>
            
          </>
          :
          <>
            <NavLink to={HOME_ROUTE}>Home</NavLink>
            <NavLink to={LOGIN_ROUTE}>SignIn</NavLink>
          </>
      }
    </div>
  )
}

export default Header;