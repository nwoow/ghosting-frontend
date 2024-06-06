import React, { useState } from "react";
import { NavLink,  } from "react-router-dom";
import { FaQuestion,  FaUsers, FaShoppingBag, } from "react-icons/fa";
// import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { useGlobalContext } from "../../Context/MyContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const {logout}=useGlobalContext();

  // const handleNavItemClick = (navItem) => {
  //   setActiveNavItem(navItem);
  // };

  // const handleDropdownToggle = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  const handleLogOut = () => {
    logout();
    navigate("/");
  }

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0"
        style={{ width: "4.5rem" }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="mb-5 mela" title="Profile">
            <NavLink
              to="/profile"
              className={`nav-link py-3 border border-warning  rounded-circle ${activeNavItem === "Profile" ? "active" : ""
                }`}
             
            >
              <FaUsers />
            </NavLink>
          </li>
          <li className="mb-5 mela" title="Purchase History">
            <NavLink
              to="/mypurchase"
              className={`nav-link py-3  border border-warning  rounded-circle ${activeNavItem === "Orders" ? "active" : ""
                }`}
           
            >
              <FaShoppingBag />
            </NavLink>
          </li>
          {/* <li className="mb-5 mela" title="Others">
            <NavLink
              to="/product"
              className={`nav-link py-3 border border-warning  rounded-circle ${activeNavItem === "Products" ? "active" : ""
                }`}
              
            >
              <FaTh />
            </NavLink>
          </li> */}
          <li className="mb-5 mela" title="Help Center">
            <NavLink
              to="/help"
              className={`nav-link py-3 border border-warning  rounded-circle  ${activeNavItem === "Customers" ? "active" : ""
                }`}
             
            >
              <FaQuestion />
            </NavLink>
          </li>
          <li className="mb-5 mela" title="Log Out">
            <div
              className={`nav-link py-3 border border-warning  rounded-circle  ${activeNavItem === "Customers" ? "active" : ""
                }`}
              onClick={ handleLogOut}
            >
              < IoMdLogOut />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
