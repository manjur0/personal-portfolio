/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import PropTypes from "prop-types";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3  ">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg transition-colors hover:bg-zinc-50/10 active:bg-zinc-50/20"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className=" w-11 h-11 rounded-lg grid place-items-center bg-green-400 text-zinc-950 shrink-0 cursor-pointer">
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className=" w-full h-full grid place-items-center hover:scale-125 transition-transform duration-100"
          >
            <MdArrowOutward className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};
export default ProjectCard;
