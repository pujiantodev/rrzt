import { useState } from 'react';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('officer@example.com');
    const [password, setPassword] = useState('password');
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //  Panggil fungsi login
        await login(email, password);
        // get user dari api/me atau function me
        await useAuthStore.getState().me();
        // Periksa apakah login berhasil
        let isAuthenticated = useAuthStore.getState().isAuthenticated;
        if (isAuthenticated) {
            navigate('/'); // Redirect ke /home
        }
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
