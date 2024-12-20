import { Routes, Route } from "react-router-dom";
import PaymentPage from "./Payment/Payment.component";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Panel from "./Panel/Panel.component";
import Login from "./Login/Login.component";
import UserProfile from "./Panel/UserProfile/UserProfile.component";
import Learning from "./Learning/Learning.component";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.component";
import PaymentSuccess from "./PaymentSuccess/PaymentSuccess.component";

const Router = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/logowanie" element={<Login />} />
        <Route path="/nauka" element={<Learning />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/platnosc" element={<PaymentPage />} />
          <Route path="/sukces" element={<PaymentSuccess />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/panel/dane" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router; 