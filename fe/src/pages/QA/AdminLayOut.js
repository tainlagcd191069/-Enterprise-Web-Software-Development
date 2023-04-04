import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import "./admin.css"

const ProtectedRoute = ({ user, redirectPath = '/403' }) => {
  // if (user?.isLoggedIn == false) {
  //   return <Navigate to={redirectPath} replace />;
  // }

  return (
    <div className="">
<div>
    <NavBar/>
  {/* SIDEBAR */}
  {/* NAVBAR */}
  <section id="content">
<Header/>
    <Outlet/>
  </section>
</div>


    </div>
  );
};

export default ProtectedRoute