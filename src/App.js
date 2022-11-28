import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import Home from "./components/home/Home";
import Iphone from './routes/iphone/Iphone';
import Mac from './routes/Mac';
import Watch from './routes/watch/Watch';
import Support from './routes/support/Support';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation()
  return (
    <AnimatePresence
    wait
    >
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/mac' element={<Mac/>}/>
          <Route path='/iphone' element={<Iphone/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/support' element={<Support/>}/>
        </Routes>
        </AnimatePresence>

  );
}

export default App;
