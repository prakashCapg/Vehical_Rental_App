const API_URL = "http://localhost:3002/UserProfileData";

export const loginUser = async (username, password) => {
  const response = await fetch(
    `${API_URL}?userID=${username}&pswd=${password}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  if (data.length > 0) {
    const user = data[0];
    const token = btoa(
      JSON.stringify({
        id: user.emailId,
        username: user.userID,
        role: user.role,
      })
    );
    return { user, token };
  }

  throw new Error("Invalid credentials");
};
