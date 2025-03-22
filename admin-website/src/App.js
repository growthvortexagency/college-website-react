import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import './App.css'
import Applications from "./pages/Applications";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard/applications" element={<Applications />} />
        </Routes>

      <SideBar />
      <div className='main-content'>
        <Dashboard />
      </div>
      </Router>
    </div>
  );
}

export default App;