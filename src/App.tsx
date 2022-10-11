import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/searchBar/SearchBar';
import Login from './pages/auth/Login';
import UsersDashboard from './pages/dashboard/UsersDashboard';


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/userdashboard" element={<UsersDashboard />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="*" element={<h1>404</h1>} />    
      </Routes>
    </div>
  );
}

export default App;
