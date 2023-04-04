import DashBoardICon from "../../../../src/assets/dashboard.svg";
import PersonICon from "../../../../src/assets/person.svg";
import PersonChecker from "../../../../src/assets/person-check-svgrepo-com.svg";
import Booker from "../../../../src/assets/booker.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/auth";
import { useContext } from "react";



const NavBar = () => {
  const location = useLocation();
  const data = useContext(AuthContext);
  let menuBar = []

  if (data?.currentUser?.role === 'qa') {
    menuBar = [
      {
          name: 'Trang Chủ',
          path: '/dashboard', 
          icon: <i className="bx bxs-smile icon" />
      },
      {
        name: 'Danh Sách Câu Hỏi',
        path: '/list-qa',  
        icon: <i className="bx bx-table icon" />
    },
  ]
      
  }

  if (data?.currentUser?.role === 'admin') {
    menuBar = [
      {
          name: 'Trang Chủ',
          path: '/dashboard', 
          icon: <i className="bx bxs-smile icon" />
      },
      {
        name: 'Danh Sách Câu Hỏi',
        path: '/list-qa',  
        icon: <i className="bx bx-table icon" />
      },
      {
        name: 'Danh Sách Nhân Viên',
        path: '/list-staff',  
        icon: <i className="bx bx-user icon" />
    },
  ]
      
  }

    return (
        <section id="sidebar">
        <a href="#" className="brand"><i className="bx bxs-smile icon" /> AdminSite</a>
        <ul className="side-menu">
          {/* <li><a href="#" className="active"><i className="bx bxs-dashboard icon" /> Dashboard</a></li>       */}
          {
            menuBar?.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={location.pathname === item.path ? 'active': ''}>{item.icon} {item.name}</Link>
              </li>
            ))
          }
        </ul>
        <div className="ads">
          <div className="wrapper">
            <p>Become a <span>PRO</span> member and enjoy <span>All Features</span></p>
          </div>
        </div>
      </section>
    )
}

export default NavBar