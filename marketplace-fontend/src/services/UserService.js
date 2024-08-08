import axios from 'axios';

const REST_API_USER_URL = 'http://localhost:8080/api/users/';

export const registerUser = (user) => {
    return axios.post(REST_API_USER_URL,user);

}

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch(`${REST_API_USER_URL}authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return { status: 202 }; // Returnera ett objekt med status 202 vid lyckad autentisering
    } else {
      return { status: response.status }; // Returnera status från svaret vid misslyckad autentisering
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    return { status: 500 }; // Returnera status 500 vid fel
  }
}

export const getUserProfile = async (userId) => {
  try {
    console.log(`Fetching user profile for userId: ${userId}`);
    const response = await axios.get(`http://localhost:8080/api/users/${userId}/`);
    console.log('User profile fetched successfully:', response.data);
    return response;
  } catch (error) {
    console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const createOrUpdateUserProfile = async (userProfile) => {
  try {
    console.log('Sending Data:', userProfile); // Debugging: Log data being sent
    const response = await axios.post(`${REST_API_USER_URL}userprofile`, userProfile);
    console.log('Response:', response); // Debugging: Log response from backend
    return response;
  } catch (error) {
    console.error('Error creating/updating user profile:', error);
    throw error;
  }
};