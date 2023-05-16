export  const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const validateForm = (input:string , value: string, errors: any, password: string | null) => {
  switch (input) {
    case 'name':
      if (value.length < 3 || value.length > 100) {
        return({ ...errors, name: 'Name must be between 3 and 100 characters' });
      } else {
        return({ ...errors, name: '' });
      }
    case 'email':
      if (!validateEmail(value)) {
        return({ ...errors, email: 'Please enter a valid email' });
      } else {
        return({ ...errors, email: '' });
      }
    case 'password':
      if (value.length < 8) {
        return({ ...errors, password: 'Password must be at least 8 characters' });
      } else {
        return({ ...errors, password: '' });
      }
    case 'confirmPassword':
      if (value !== password) {
        return({ ...errors, confirmPassword: 'Passwords do not match' });
      } else {
        return({ ...errors, confirmPassword: '' });
      }
    default:
  }
}

export const validateError = (error: any) => {
  if (error.response) {
    if (error.response.status === 401) {
      return 'Invalid credentials';
    } else if (error.response.status === 400) {
      return 'Invalid data';
    } else if (error.response.status === 409) {
      return 'Email already registered';
    } else {
      return 'Something went wrong';
    }
  } else {
    return 'Something went wrong';
  }
}
