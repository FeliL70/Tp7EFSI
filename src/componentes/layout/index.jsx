import { Outlet } from "react-router-dom";
import './layout.css'
import Navbar from "../navbar";
import Footer from "../footer";


const Layout = () => {
  return (
    <>
      <Navbar/>
        <div className="layout-margen">
          <Outlet />
        </div>
      <Footer/>
    </>
  );
};

export default Layout;