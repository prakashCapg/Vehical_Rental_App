import { loginUser, logoutUser } from "../fakeAPI/User-login-fake-api";

export function Userlogin(username, password) {
  const userProfile = loginUser(username, password);
  return userProfile;
}

export function Userlogout() {
  const userProfile = logoutUser();
  console.log("logout");
  return userProfile;
}
