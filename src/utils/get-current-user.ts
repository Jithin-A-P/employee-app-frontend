const getCurrentUser = () => {
  const authToken = localStorage.getItem('auth-token');
  const authPayload = JSON.parse(atob(authToken.split('.')[1]));

  const { name, email, role, id } = authPayload;

  console.log(authPayload);

  return {
    id: id,
    name: name,
    email: email,
    role: role
  };
};

export default getCurrentUser;
