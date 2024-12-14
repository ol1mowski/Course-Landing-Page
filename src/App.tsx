import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./routes/Payment/Payment.component";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Panel from "./routes/Panel/Panel.component";

function App() {
  return (
    <BrowserRouter 
      future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/platnosc" element={<Payment />} />
          <Route path="/panel" element={<Panel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
