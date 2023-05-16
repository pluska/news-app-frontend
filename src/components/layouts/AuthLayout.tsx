import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='auth-layout'>
      <header>
        <h1 className='logo-brand'>News App</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Log In</Link></li>
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

export default AuthLayout;
