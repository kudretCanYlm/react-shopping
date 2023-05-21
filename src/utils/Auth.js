const logOut = () => {
  localStorage.removeItem('token');
  location.replace('http://localhost:3000/');
};

export { logOut };
