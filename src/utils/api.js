/**
 * Centralized API configuration
 * 
 * In development (localhost), we point to the local backend port 5000.
 * In production (Vercel), we use relative paths (/api) because the 
 * frontend and backend are hosted on the same domain.
 */

const isDevelopment = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

export const API_BASE_URL = isDevelopment 
    ? "http://localhost:5000/api" 
    : "/api";

export const endpoints = {
    students: {
        login: `${API_BASE_URL}/students/login`,
        register: `${API_BASE_URL}/students/register`,
        update: (id) => `${API_BASE_URL}/students/update/${id}`,
        getAll: `${API_BASE_URL}/students`,
    },
    trainers: {
        login: `${API_BASE_URL}/trainers/login`,
        register: `${API_BASE_URL}/trainers/register`,
    },
    admin: {
        login: `${API_BASE_URL}/admin/login`,
    },
    test: `${API_BASE_URL}/test`,
};

export default { API_BASE_URL, endpoints };
