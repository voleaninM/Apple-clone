import {Routes,Route,useLocation} from 'react-router-dom'
import Home from "./components/home/Home";
import Iphone from './routes/iphone/Iphone';
import Mac from './routes/Mac';
import Watch from './routes/watch/Watch';
import Support from './routes/support/Support';
import { AnimatePresence } from 'framer-motion';
import Shop from './routes/shop/Shop';
import { ShopContextProvider } from './context/contextProvider';
import Cart from './routes/cart/Cart';


function App() {
  const location = useLocation()
  return (
    <ShopContextProvider>
    <AnimatePresence
    wait
    >
      
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/mac' element={<Mac/>}/>
          <Route path='/iphone' element={<Iphone/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        
        </AnimatePresence>
        </ShopContextProvider>

  );
}

export default App;
