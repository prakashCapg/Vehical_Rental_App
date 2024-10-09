import { getUserProfileDataFakeAPI } from "../fakeAPI/user-profile-fake-api";

export function getUserProfiles() {
  const userProfile = getUserProfileDataFakeAPI();
  return userProfile;
}
