/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */

// Node modules
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// main Navbar component
const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  // initActiveBox function to set the active box position and size based on the last active link
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  // Use effect to call initActiveBox function on component mount and window resize
  useEffect(initActiveBox, []);

  window.addEventListener("resize", initActiveBox);

  // active current link function
  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
    initActiveBox();
  };

  // navItems
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          onClick={activeCurrentLink}
          href={link}
          className={className}
          key={key}
          ref={ref}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

// prop types validation
Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
