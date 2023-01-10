import './App.css';
import Header from './components/Header/Header';
import {Route, Switch, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Reservation from './Pages/Reservation/Reservation';
import Analytics from "./Pages/Analytics/Analytics";
import Payment from "./Pages/Payment/Payment";



function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/products/:id' element={<Reservation />} />
     <Route path='/analytics' element={<Analytics />} />
     <Route path='/payment' element={<Payment />} />


   </Routes>

  );
}
export default App;
