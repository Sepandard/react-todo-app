export const getToken = () => localStorage.getItem('token');

export const storeToken = (token: string) => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');
