import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/users/';

export const registerUser = (user) => {
    return axios.post(REST_API_BASE_URL,user);

}

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch(`${REST_API_BASE_URL}authenticate`, {
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
};