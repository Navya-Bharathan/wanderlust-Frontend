import './App.css';
import{Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import SignUp from './Components/LoginOrSignUp/SignUp';
import Login from './Components/LoginOrSignUp/Login';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/hotellist" element={<List />}> </Route>
        <Route path="/hotel/:id" element={<Hotel />}> </Route>
        <Route path="/aboutus" element={< AboutUs/>}> </Route>
        <Route path="/contact" element={< Contact/>}> </Route>
        <Route path="/signup" element={< SignUp/>}> </Route>
        <Route path="/login" element={< Login/>}> </Route>
      </Routes>
     
      <Footer />
    </div>
  );
}
export default App;

