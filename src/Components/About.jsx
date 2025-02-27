/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */

import logo from "../assets/images/logo.svg";
//  About Details
const aboutItems = [
  {
    label: "Project done",
    number: "50+",
  },
  {
    label: "Years of experience",
    number: "02+",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w[60ch] ">
            Welcome! I&apos;m Henry, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl ">
                    {number}{" "}
                  </span>
                  <span className="text-green-400 font-semibold">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px]  md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
