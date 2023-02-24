import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Getstarted from './Components/Getstarted/Getstarted';
import Signin from './Components/Signin/Signin';
import Welcome from './Components/Welcome/Welcome';



function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/create" element={<Getstarted />} />
   <Route path="/login" element={<Signin />} />
   <Route path="/welcome" element={<Welcome />} />
   </Routes>
   <Footer />
   </BrowserRouter>

   
    </div>
  );
}

export default App;
