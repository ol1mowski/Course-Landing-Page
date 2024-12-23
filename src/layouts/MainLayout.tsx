import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer.component";
import Header from "../components/Header/Header.component";

const MainLayout = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/platnosc';

  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout; 