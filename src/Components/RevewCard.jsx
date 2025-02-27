/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import PropTypes from "prop-types";
const RevewCard = ({ content, name, imgSrc, company, classes }) => {
    return (
    <div className={classes}>
      <div className="review-card">
        <div className="review-card__img">
          <img src={imgSrc} alt="people" />
        </div>
        <div className="review-card__content">
          <p>{content}</p>
          <h4>{name}</h4>
          <span>{company}</span>
        </div>
      </div>
    </div>
  )
};

RevewCard.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  company: PropTypes.string,
  classes: PropTypes.string,
};
export default RevewCard;
