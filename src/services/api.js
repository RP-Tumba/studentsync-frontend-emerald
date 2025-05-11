import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const studentService = {
  getAllStudents: async () => {
    const response = await api.get(`/`);
    return response.data;
  },

  getStudentById: async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  createStudent: async (studentData) => {
    const response = await api.post("/", studentData);
    return response.data;
  },

  updateStudent: async (id, studentData) => {
    // PUT or PATCH depends on your Backend API route Request method used
    const response = await api.put(`/${id}`, studentData);
    return response.data;
  },

  deleteStudent: async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
  },

  searchStudents: async (query) => {
    const response = await api.get(`/search?q=${query}`);
    return response.data;
  },
};

// Add interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error status codes
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "Invalid request";
          break;
        case 404:
          error.message = "Resource not found";
          break;
        case 409:
          error.message = "Duplicate record found";
          break;
        default:
          error.message = "An error occurred";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
