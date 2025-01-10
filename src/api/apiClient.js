import axios from 'axios';

// Buat instance Axios
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL, // Ganti dengan base URL API Anda
    timeout: 10000, // Timeout (opsional)
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor untuk menambahkan token Authorization
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token'); // Ambil token dari localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Interceptor untuk menangani error
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Anda bisa menambahkan logika seperti redirect ke login jika token tidak valid
        if (error.response?.status === 401) {
            console.error('Unauthorized. Please login again.');
            localStorage.removeItem('access_token'); // Hapus token jika perlu
            window.location.href = '/login'; // Redirect ke halaman login
        }
        return Promise.reject(error);
    },
);

export default apiClient;
