import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import styles from "../styles/components/Layout.module.css";

const Navbar = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${open ? styles.show : ""}`}
      style={{ background: location.pathname !== "/" && "#333333" }}
    >
      <NavLink to="/">
        <img src="/ignite-logo.png" alt="ignite-logo" />
      </NavLink>

      {open ? (
        <AiOutlineClose
          className={styles.close}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <MdMenu className={styles.close} onClick={() => setOpen(!open)} />
      )}

      <ul>
        <li onClick={() => setOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["active-link"] : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["active-link"] : undefined
            }
            to="/about"
          >
            About us
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["active-link"] : undefined
            }
            to="/events"
          >
            Events
          </NavLink>
        </li>
        {/* <li onClick={() => setOpen(false)}>
          <NavLink to="/sponsors">Sponsors</NavLink>
        </li> */}
        <li onClick={() => setOpen(false)}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["active-link"] : undefined
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
