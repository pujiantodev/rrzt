import { Navigate } from 'react-router';
import useAuthStore from '../store/authStore';

export default function Authenticated({ children }) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
}
