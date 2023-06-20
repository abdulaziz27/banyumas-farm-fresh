import api from './Api';

export const registerUser = async (userCredentials) => {
  try {
    const { email, password } = userCredentials;

    if (!email || !password) {
      throw new Error('Email dan password harus diisi');
    }

    const response = await api.post('/users/register', userCredentials);

    localStorage.setItem('token', response.data.token);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const sendVerificationEmail = async (email) => {
  try {
    const response = await api.post('/users/send-verification-email', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const verifyEmail = async (token) => {
  try {
    const response = await api.get(`/users/verify-email/${token}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const loginUser = async (userCredential) => {
  try {
    const { email, password } = userCredential;

    if (!email || !password) {
      throw new Error('Email dan password harus diisi');
    }

    const response = await api.post('/users/login', {
      email,
      password,
    });

    localStorage.setItem('token', response.data.token);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
