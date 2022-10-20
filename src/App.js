import logo from './logo.svg';
import './app.css';
import Topbar from './components/topbar/Topbar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';

function App() {
  return (
    <div >
      <Topbar />

      <div className='container'>
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
