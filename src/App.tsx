import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from "./routes/Payment/Payment.component";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Panel from "./routes/Panel/Panel.component";
import Login from "./routes/Login/Login.component";
import UserProfile from "./routes/Panel/UserProfile/UserProfile.component";

function App() {
  return (
    <BrowserRouter 
      future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}
    >
      <Routes>
        <Route path="/logowanie" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/platnosc" element={<PaymentPage />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/panel/dane" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
