import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

const NavBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dash</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={()=>setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            Ivan
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => console.log("logout")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
