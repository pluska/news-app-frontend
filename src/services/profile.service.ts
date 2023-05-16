import axios from "axios";
import { ProfileData } from "../interfaces/profileData";

const API_URL = `http://localhost:8000/api`;

export const getProfile = async () => {
  try {
    const header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.get(`${API_URL}/profile`, header);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el perfil");
  }
}

export const updateProfile = async (profileData: ProfileData) => {
  try {
    const header = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await axios.put(`${API_URL}/profile`, profileData, header);
    return response.data;
  } catch (error) {
    throw new Error("Error al actualizar el perfil");
  }
}