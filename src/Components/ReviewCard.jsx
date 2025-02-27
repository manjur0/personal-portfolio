/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

const ratings = new Array(5);
ratings.fill({
  icon: <IoMdStar />,
  style: {
    fontVariationSettings: '"FILL" 1',
  },
});
const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            style={style}
            className="font-bold text-yellow-300 text-xl"
          >
            {icon}
          </span>
        ))}
      </div>
      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto ">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>
        <div className="">
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  company: PropTypes.string,
};
export default ReviewCard;
