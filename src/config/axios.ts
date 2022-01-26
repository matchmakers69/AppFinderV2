import axios from "axios";
import { token } from "src/services/auth/getToken";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Request interceptor for API calls
apiClient.interceptors.request.use(
  async (config) => {
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };

export default apiClient;
