import { loginUser } from "../fakeAPI/User-login-fake-api";

export function Userlogin(username, password) {
  const userProfile = loginUser(username, password);
  return userProfile;
}
