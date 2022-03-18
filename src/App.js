import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Logs from './pages/Logs/Logs';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import CreateUser from './pages/CreateUser/CreateUser';

function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Logs/>} exact/>
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/users" element={<Users/>} exact/>
            <Route path="/register" element={<CreateUser/>} exact/>
            {/* <Route path="/admins" element={<adminPage/>} exact/>  */}
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
