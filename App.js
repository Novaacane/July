
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/contact.jsx';

import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App
