import { NavLink } from "react-router-dom";
import links from "../utils/links";



const NavLinks = ({toggleSidebar}) => {
    const navigateLinks = links.map((link) => {
        const { id, text, path, icon } = link;
    
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({isActive})=>isActive ? 'nav-link active' :"nav-link"}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      });

  return (
    <div className="nav-links">{navigateLinks}</div>
  )
}

export default NavLinks