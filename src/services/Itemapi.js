import api from './api.js';

export const getAllItems = () => api.get('/items');

export const getItemById = (id) => api.get(`/items/${id}`);

export const createItem = (itemData) => api.post('/items', itemData);

export const updateItem = (id, itemData) => api.put(`/items/${id}`, itemData);

export const deleteItem = (id) => api.delete(`/items/${id}`)