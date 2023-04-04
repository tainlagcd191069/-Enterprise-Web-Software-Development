import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <MainNavigation/>
      <Outlet />
      <Footer/>
    </div>
  );
}
