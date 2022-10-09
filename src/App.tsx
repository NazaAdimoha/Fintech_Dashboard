import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import UsersDashboard from './pages/dashboard/UsersDashboard';


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/userdashboard" element={<UsersDashboard />} />    
      </Routes>
    </div>
  );
}

export default App;
