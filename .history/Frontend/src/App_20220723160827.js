import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
function App() {
  return (
   //nav class is temporary. needed for testing purposes.  
   <body className="bg-dark text-white">
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