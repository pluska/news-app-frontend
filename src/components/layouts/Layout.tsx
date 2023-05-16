import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<AuthLayoutProps> = ({ children }) => {
  const user = useSelector((state: any) => state.user.user);
  const [menu, setMenu] = React.useState(false);
  return (
    <div className='layout'>
      <header>
        <h1 className='logo-brand'>News App</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {user ?
          <>
          <li
          className={`nav-link ${menu ? 'active': ''}`}
          onClick={()=>setMenu(!menu)}>
            Hello, {user.name}
          <div className='nav-menu'>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/logout'>Log Out</Link></li>
          </div>
          </li>
          </>
          :
          <>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Log In</Link></li>
          </>
          }
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          News App &copy; 2023
        </p>
      </footer>
    </div>
  );
};

export default Layout;
