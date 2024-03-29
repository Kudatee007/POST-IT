import "./App.css";
import Create from "./Components/createStory/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Getstarted from "./Components/Getstarted/Getstarted";
import Signin from "./Components/Signin/Signin";
import Welcome from "./Components/Welcome/Welcome";
import Private from "./Components/privateRoute/Private";
// import Navbar from "./Components/Navbar/Navbar";
import Edit from "./Components/editStory/Edit";
import Story from "./Components/myStories/Story";
import Allstory from "./Components/allStories/Allstory";
import ReadMore from "./Components/readMore/ReadMore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Getstarted />} />
          <Route path="/login" element={<Signin />} />
          <Route element={<Private />}>
            <Route path="/stories" element={<Allstory />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/mystories" element={<Story />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read/:userId" element={<ReadMore />} />
            <Route path="/edit/:userId" element={<Edit />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
