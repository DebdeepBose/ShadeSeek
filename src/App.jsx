import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./About/About";
import { Blogs } from "./Blog/Blogs";
import { Layout } from "./Layout"; // import the new Layout

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Layout>
  );
}

export default App;
