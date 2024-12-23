import { Outlet, Link, useLocation } from "react-router-dom";
import { useLogout } from '../hooks/useLogout.hook';
import Footer from "../components/Footer/Footer.component";
import Header from "../components/Header/Header.component";

const MainLayout = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout; 