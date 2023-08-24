const getCurrentUser = () => {
  const authToken = localStorage.getItem('auth-token');
  const authPayload = JSON.parse(atob(authToken.split('.')[1]));
  const { id, name, email, role } = authPayload;

  console.log(authPayload);

  return {
    name: name,
    email: email,
    role: role,
    id: id
  };
};

export default getCurrentUser;
