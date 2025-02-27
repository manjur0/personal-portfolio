/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/src/assets/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/src/assets/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/src/assets/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/src/assets/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/src/assets/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/src/assets/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/src/assets/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/src/assets/images/tailwindcss.svg",
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
