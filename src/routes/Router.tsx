import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.component";
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
        <Route path="/nauka" element={
          <ProtectedRoute>
            <Learning />
          </ProtectedRoute>
        } />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/platnosc" element={<PaymentPage />} />
          <Route path="/sukces" element={<PaymentSuccess />} />
          <Route path="/mojekonto" element={
            <ProtectedRoute>
              <Panel />
            </ProtectedRoute>
          } />
          <Route path="/mojekonto/dane" element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </>
  );
};

export default Router; 