/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */

// Node modules
import { useRef } from "react";
import PropTypes from "prop-types";

// main Navbar component
const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activebox = useRef(null);

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
        <a href={link} className={className} key={key} ref={ref}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activebox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
