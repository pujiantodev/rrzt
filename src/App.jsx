import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Authenticated from './middleware/Authenticated';
import Guest from './middleware/Guest';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Authenticated>
                            <Home />
                        </Authenticated>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/login"
                    element={
                        <Guest>
                            <Login />
                        </Guest>
                    }
                />
                {/* untuk notfound  */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
