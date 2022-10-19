import logo from './logo.svg';
import './app.css';
import Topbar from './components/topbar/Topbar';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div >
   <Topbar/>
 
   <div className='container'>
   <SideBar/>
   <div className='others'>others page</div>
   </div>
    </div>
  );
}

export default App;
