const getCurrentUser = () => {
  const authToken = localStorage.getItem('auth-token');
  const authPayload = JSON.parse(atob(authToken.split('.')[1]));
  const { name, email, role } = authPayload;

  return {
    name: name,
    email: email,
    role: role
  };
};

export default getCurrentUser;
