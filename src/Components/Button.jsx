/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */

import PropTypes from "prop-types";

// Primary Button
export const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {" "}
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

// Prop types validation
ButtonPrimary.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  classes: PropTypes.string,
};

// Button Outline
export const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {" "}
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

// Prop types validation
ButtonOutline.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  classes: PropTypes.string,
};
