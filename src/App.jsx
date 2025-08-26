import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./About/AboutPage";
import { Blogs } from "./Blog/Blogs";
import { Layout } from "./Layout";
import { LuxApt } from "./PropertyServices/LuxuryApt";
import { ChooseService } from "./PropertyServices/ChooseService";
import { ScrollToTop } from "./ScrollToTop/ScrollTop";
import { Rentals } from "./PropertyServices/Rentals";
import { CommercialSpaces } from "./PropertyServices/CommercialSpaces";
import { BeachHouse } from "./PropertyServices/BeachHouse";
import { PayingGuests } from "./PropertyServices/PayingGuests";
import { FarmHouse } from "./PropertyServices/FarmHouse";
import { PropertyDetails } from "./PropertyServices/PropertyDetails";
import { ContactPage } from "./Contact/ContactMain";
import LoginForm from "./LoginPageComponents/LoginForm";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ChooseService" element={<ChooseService />} />
          <Route path="/Luxapt" element={<LuxApt />} />
          <Route path="/Rentals" element={<Rentals />} />
          <Route path="/CommercialSpaces" element={<CommercialSpaces />} />
          <Route path="/BeachHouse" element={<BeachHouse />} />
          <Route path="/PayingGuests" element={<PayingGuests />} />
          <Route path="/FarmHouse" element={<FarmHouse />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
