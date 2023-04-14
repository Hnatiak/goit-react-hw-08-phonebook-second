import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://643926ba4660f26eb1ab9c51.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);

  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);

  return result;
};