import axios from "axios";

// базовый URL вашего API
const API_BASE_URL = "http://localhost:4000/api";

export const api = {
  // ===== Auth =====
  register: async (email, password, role) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        email,
        password,
        role,
      });
      return response.data;
    } catch (err) {
      // если сервер вернул ошибку
      return err.response?.data || { message: "Ошибка сети" };
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      return err.response?.data || { message: "Ошибка сети" };
    }
  },

  // ===== Users =====
  getUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (err) {
      return [];
    }
  },

  getUserById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`);
      return response.data;
    } catch (err) {
      return null;
    }
  },

  // ===== Projects =====
  getProjects: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (err) {
      return [];
    }
  },

  createProject: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/projects`, data);
      return response.data;
    } catch (err) {
      return err.response?.data || { message: "Ошибка сети" };
    }
  },

  // ===== Defects =====
  getDefects: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/defects`);
      return response.data;
    } catch (err) {
      return [];
    }
  },

  createDefect: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/defects`, data);
      return response.data;
    } catch (err) {
      return err.response?.data || { message: "Ошибка сети" };
    }
  },

  // ===== Reports =====
  getReports: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reports`);
      return response.data;
    } catch (err) {
      return [];
    }
  },

  createReport: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reports`, data);
      return response.data;
    } catch (err) {
      return err.response?.data || { message: "Ошибка сети" };
    }
  },

  // ===== Auth token helper =====
  setToken: (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  },
};
