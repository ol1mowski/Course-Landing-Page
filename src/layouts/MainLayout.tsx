import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer.component";
import Header from "../components/Header/Header.component";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader.component";

const MainLayout = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/platnosc';
  const isDashboard = location.pathname.startsWith('/mojekonto');

  return (
    <>
      {!hideHeader && (isDashboard ? <DashboardHeader /> : <Header />)}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout; 