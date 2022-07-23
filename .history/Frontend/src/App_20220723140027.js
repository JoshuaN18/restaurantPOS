import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Payment from './components/payment';
import Confirmation from './components/confirmation';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/"element={<Homepage/>}/>
      <Route path="/menu"element={<Menu/>}/>
      <Route path="/paymeny"element={<Payment/>}/>
      <Route path="/confirmed"element={<Confirmation/>}/>
    </Routes>
   </Router>
  );
}

export default App;
