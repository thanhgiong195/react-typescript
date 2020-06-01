export function isLogin() {
  const logedIn = getUserState();

  return logedIn;
}

function getUserState() {
  const auth = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';
  const keyAuth = localStorage.getItem('keyAuth');
  return auth === keyAuth;
}
