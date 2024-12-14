import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.component";
import Footer from "../components/Footer/Footer.component";

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout; 