import api from './api';

export const registerUser = async (userCredentials) => {
  try {
    const response = await api.post('/users/register', userCredentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const loginUser = async (userCredentials) => {
  try {
    const response = await api.post('/users/login', userCredentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
