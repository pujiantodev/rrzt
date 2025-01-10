import { Navigate } from 'react-router';
import useAuthStore from '../store/authStore';

const Guest = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return children;
};

export default Guest;
