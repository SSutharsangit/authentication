
import './App.css';
import Navabar from './components/Navabar';
import About from './pages/About';
import Home from './pages/Home';
import Sigin from './pages/Sigin';
import Sigup from './pages/Sigup';
import {Route,Routes} from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div >
      <Navabar/>
     <Routes>
     <Route path='/' element={currentUser ? <Home /> : <Sigin/>} />
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Signin' element={<Sigin/>}></Route>
        <Route path='/Signup' element={<Sigup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
