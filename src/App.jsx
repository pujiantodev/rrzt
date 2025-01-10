import { Route, Routes } from 'react-router';
import Home from './page/Home';
import About from './page/About';
import NotFound from './page/NotFound';
import Login from './page/auth/Login';
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
