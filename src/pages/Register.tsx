import react from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import '../styles/Register.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/user/user.actions';
import { AppDispatch } from '../store';

const Register = () => {
  const loading = useSelector((state: any) => state.user.loading);
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

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    switch (e.target.name) {
      case 'name':
        if (e.target.value.length < 3 || e.target.value.length > 100) {
          setErrors({ ...errors, name: 'Name must be between 3 and 100 characters' });
        } else {
          setErrors({ ...errors, name: '' });
        }
        break;
      case 'email':
        if (!validateEmail(e.target.value)) {
          setErrors({ ...errors, email: 'Please enter a valid email' });
        } else {
          setErrors({ ...errors, email: '' });
        }
        break;
      case 'password':
        if (e.target.value.length < 8) {
          setErrors({ ...errors, password: 'Password must be at least 8 characters' });
        } else {
          setErrors({ ...errors, password: '' });
        }
        break;
      case 'confirmPassword':
        if (e.target.value !== user.password) {
          setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
        } else {
          setErrors({ ...errors, confirmPassword: '' });
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.confirmPassword && !errors.email && !errors.name && !errors.password && user.name && user.email && user.password && user.confirmPassword) {
      const response = await dispatch(registerUser(user));
      console.log(response, 'response');
    } else {
      setErrors({ ...errors, form: 'Please fill out all fields' });
    }
  };
  return (
    <AuthLayout>
      <h1>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
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
        {loading ? (
          <button type="submit" disabled>Loading...</button>
        ) : (
          <button type="submit">Register</button>
        )}
      </form>
    </AuthLayout>
  );
};

export default Register;