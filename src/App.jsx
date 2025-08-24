import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./About/About";
import { Blogs } from "./Blog/Blogs";
import { Layout } from "./Layout";
import { LuxApt } from "./PropertyServices/LuxuryApt";
import { ChooseService } from "./PropertyServices/ChooseService";
import { ScrollToTop } from "./ScrollToTop/ScrollTop";
import { Rentals } from "./PropertyServices/Rentals";
import { CommercialSpaces } from "./PropertyServices/CommercialSpaces";

function App() {
  return (
    <Layout>
     <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ChooseService" element={<ChooseService />} />
        <Route path="/Luxapt" element={<LuxApt />} />
        <Route path="/Rentals" element={<Rentals />} />
        <Route path="/CommercialSpaces" element={<CommercialSpaces />} />
      </Routes>
    </Layout>
  );
}

export default App;
