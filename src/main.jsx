import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import useAuthStore from './store/authStore';

(async () => {
    await useAuthStore.getState().restoreAuth(); // Tunggu hingga selesai
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>,
    );
})();
