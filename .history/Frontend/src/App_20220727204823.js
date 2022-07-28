import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Menu from './pages/Menu';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
function App() {
  return (
   //nav class is temporary. needed for testing purposes.  
   <body className='text-white'>
   <Router>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/menu">Menu </Link>
      <Link to="/payment">Payment </Link>
      <Link to="/confirmed">Confirmed </Link>
    </nav>
    <Routes>
      <Route path="/"element={<Homepage/>}/>
      <Route path="/menu"element={<Menu/>}/>
      <Route path="/payment"element={<Payment/>}/>
      <Route path="/confirmed"element={<Confirmation/>}/>
    </Routes>
    
   </Router>
  </body>
  );
}

export default App;
