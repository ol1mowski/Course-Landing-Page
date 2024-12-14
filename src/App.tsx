import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./routes/Payment/Payment.component";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/platnosc" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
