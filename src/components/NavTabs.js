import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavTabs.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs montserratFont">
      <li className="nav-item">
        <NavLink to="/" end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="aboutme"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="contactme" 
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
}


export default NavTabs;
