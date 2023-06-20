import api from './api';

export const getUser = (userId) => {
  return api.get(`/users/${userId}`);
};

export const createUser = (userData) => {
  return api.post('/users', userData);
};

export const updateUser = (userId, userData) => {
  return api.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`);
};