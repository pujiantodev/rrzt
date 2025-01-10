import { create } from 'zustand';
import apiClient from '../api/apiClient';

const useAuthStore = create((set) => ({
    token: null,
    user: null,
    isAuthenticated: false,
    // Login function
    login: async (email, password) => {
        try {
            const response = await apiClient.post('/api/login', {
                email,
                password,
            });
            const { access_token } = response.data.data;
            set({ token: access_token });
            // Simpan token ke localStorage
            localStorage.setItem('access_token', access_token);

            // Set default header Authorization untuk Axios
            apiClient.defaults.headers.common['Authorization'] =
                `Bearer ${access_token}`;
        } catch (error) {
            console.error(
                'Login failed:',
                error.response?.data || error.message,
            );
        }
    },

    // checkme
    me: async () => {
        try {
            const { data } = await apiClient.get('/api/me');
            const user = data.data;
            set({ user: user, isAuthenticated: true });
        } catch (error) {
            console.error('Me failed:', error.response?.data || error.message);
        }
    },

    // Logout function
    logout: () => {
        set({
            token: null,
            user: null,
            isAuthenticated: false,
        });

        // Hapus token dari localStorage
        localStorage.removeItem('access_token');

        // Hapus header Authorization dari Axios
        delete apiClient.defaults.headers.common['Authorization'];
    },

    // Restore auth state from localStorage
    restoreAuth: async () => {
        const token = localStorage.getItem('access_token');

        if (token) {
            // Set header Authorization jika token ada di localStorage
            apiClient.defaults.headers.common['Authorization'] =
                `Bearer ${token}`;

            try {
                // Periksa pengguna dengan memanggil /api/me
                const response = await apiClient.get('/api/me');
                const user = response.data.data;

                // Update state auth jika valid
                set({
                    user: user,
                    isAuthenticated: true,
                    token: token,
                });
            } catch (error) {
                console.error(
                    'Restore auth failed:',
                    error.response?.data || error.message,
                );

                // Hapus token jika tidak valid
                localStorage.removeItem('access_token');
                delete apiClient.defaults.headers.common['Authorization'];

                // Reset state auth
                set({
                    token: null,
                    user: null,
                    isAuthenticated: false,
                });
            }
        }
    },
}));

export default useAuthStore;
