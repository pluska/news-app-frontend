import axios from 'axios';
import { UserData } from '../interfaces/userData';
import { Credentials } from '../interfaces/credentials';
import { validateError } from '../utils/validators';

const API_URL = `http://localhost:8000/api`;

export const register = async (userData: UserData) => {
  try {
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(`${API_URL}/register`, userData, header);
    return response.data;
  } catch (error) {
    return validateError(error);
  }
};

export const login = async (credentials: Credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
};

export const logout = async () => {
  try {
    const header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await axios.post(`${API_URL}/logout`, null, header);
    return response.data;
  } catch (error) {
    throw new Error("Error al cerrar sesión");
  }
}

export const getUser = async () => {
  try {
    const header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await axios.get(`${API_URL}/user`, header);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

