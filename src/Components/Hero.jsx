/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */

import avatar1 from "../assets/images/avatar-1.jpg";
import heroBanner from "../assets/images/hero-banner.png";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center  lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div>
          <div className="flex items-center gap-3  ">
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img
                src={avatar1}
                width={40}
                height={40}
                alt="manjur al jubayer portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-green-400">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1">
            Developing Next-Generation Scalable Websites.
          </h2>
          <div className="">buttonPrimary buttonOutline</div>
        </div>

        <div className="">
          <figure className="">
            <img
              src={heroBanner}
              alt="Manjur al jubayer"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
export default Hero;
