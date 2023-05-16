import react from 'react';
import Layout from '../components/layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/user/user.actions';
import { AppDispatch } from '../store';
import { validateForm } from '../utils/validators';
import '../styles/Auth.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const loading = useSelector((state: any) => state.user.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = react.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = react.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    form: '',
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(validateForm(e.target.name, e.target.value, errors, user.password));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.confirmPassword && !errors.email && !errors.name && !errors.password && user.name && user.email && user.password && user.confirmPassword) {
      const response = await dispatch(registerUser(user));
      console.log(response);
      if (response.meta.requestStatus === 'rejected' && response.payload) {
        setErrors({ ...errors, form: response.payload });
      } else if (response.meta.requestStatus === 'fulfilled' && response.payload === "Email already registered") {
        setErrors({ ...errors, form: response.payload });
      } else {
        return navigate('/');
      }
    } else {
      setErrors({ ...errors, form: 'Please fill out all fields' });
    }
  };
  return (
    <Layout>
      <h1>Register</h1>
      <form className='auth-form' onSubmit={handleSubmit}>
        {errors.form && <p>{errors.form}</p>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleUserChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleUserChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button disabled={loading} type='submit'>{loading ? "loading..." : "Register"}</button>
      </form>
    </Layout>
  );
};

export default Register;