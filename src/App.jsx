import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./About/About";
import { Blogs } from "./Blog/Blogs";
import { Layout } from "./Layout";
import { LuxApt } from "./PropertyServices/LuxuryApt";
import { ChooseService } from "./PropertyServices/ChooseService";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ChooseService" element={<ChooseService />} />
        <Route path="/Luxapt" element={<LuxApt />} />
      </Routes>
    </Layout>
  );
}

export default App;
