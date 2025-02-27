/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import PropTypes from "prop-types";
const SkillCard = ({ imgSrc, lebel, desc, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <figure className=" bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} height={32} width={32} alt={lebel} />
      </figure>
      <div className="">
        <h3>{lebel}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

// props validation
SkillCard.propTypes = {
  imgSrc: PropTypes.string,
  lebel: PropTypes.string,
  desc: PropTypes.string,
  classes: PropTypes.string,
};
export default SkillCard;
