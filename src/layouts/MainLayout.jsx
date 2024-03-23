import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
