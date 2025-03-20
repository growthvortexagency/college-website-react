import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
  return (
    <div>
      <SideBar />
      <div className='main-content'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;