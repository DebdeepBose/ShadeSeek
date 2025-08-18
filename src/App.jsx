import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage"; 
import { AboutPage } from "./About/About"; 
import { Blogs } from "./Blog/Blogs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;