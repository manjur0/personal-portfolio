/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
// all the image imported
import figma from "../assets/images/figma.svg";
import css3 from "../assets/images/css3.svg";
import javascript from "../assets/images/javascript.svg";
import nodejs from "../assets/images/nodejs.svg";
import expressjs from "../assets/images/expressjs.svg";
import mongodb from "../assets/images/mongodb.svg";
import react from "../assets/images/react.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";

import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: css3,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: nodejs,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: expressjs,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongodb,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: tailwindcss,
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="reveal-up">
          <h2 className="headline-2 "> Essential Tools I use</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-3 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
          {skillItem.map(({ imgSrc, lebel, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={lebel}
              desc={desc}
              key={key}
              classes={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
