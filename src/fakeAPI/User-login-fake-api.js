import UserProfileData from "../Data/UserProfileData.json";

export const loginUser = async (username, password) => {
  const Userdata = UserProfileData.UserProfileData.filter(
    (user) => user.userID === username && user.pswd === password
  );

  if (Userdata.length > 0) {
    const { pswd, ...user } = Userdata[0];
    return user;
  }
};

export const logoutUser = () => {
  const Userdata = "";
  return Userdata;
};
