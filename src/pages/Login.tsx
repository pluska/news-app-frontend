import react from 'react';
import Layout from '../components/layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/user/user.actions';
import { AppDispatch } from '../store';
import { validateForm } from '../utils/validators';
import '../styles/Auth.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const loading = useSelector((state: any) => state.user.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = react.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = react.useState({
    email: '',
    password: '',
    form: '',
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(validateForm(e.target.name, e.target.value, errors, null));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setErrors({ ...errors, form: 'Please fill in all fields' });
    } else {
      const res = await dispatch(loginUser(user));
      if (res.meta.requestStatus === 'rejected' && res.payload) {
        setErrors({ ...errors, form: res.payload.message });
      } else {
        setErrors({ ...errors, form: '' });
        return navigate('/');
      }
    }
  }

  return (
    <Layout>
        <h1>Login</h1>
        <form className='auth-form' onSubmit={handleSubmit}>
          {errors.form && <p>{errors.form}</p>}
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleUserChange}
              type="email"
              name="email"
              id="email"
              value={user.email}
              placeholder="Enter your email"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleUserChange}
              type="password"
              name="password"
              id="password"
              value={user.password}
              placeholder="Enter your password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button disabled={loading} type='submit'>{loading ? "loading..." : "Login"}</button>
        </form>
    </Layout>
  );
}

export default Login;