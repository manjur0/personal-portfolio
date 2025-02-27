/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import { ButtonPrimary } from "./Button";
import { MdKeyboardArrowRight } from "react-icons/md";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];
const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/manjur0",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manjur00",
  },
  {
    label: "Twitter X",
    href: "https://x.com/manjur00",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manjur.me",
  },
  {
    label: "Facebook",
    href: "https://wwww.facebook.com/manjur.me",
  },
];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className=" lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              classes={"btn btn-third reveal-up"}
              href="mailto:mdpeeku@gmail.com"
              label="Let's talk"
              icon={<MdKeyboardArrowRight />}
            />
          </div>
          <div className=" grid grid-cols-2 gap-4 lg:pl-20">
            {/* SiteMap */}
            <div className="">
              <div>
                <p className="mb-2 reveal-up">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              {/* Social */}
              <div>
                <p className="mb-2 reveal-up">Social</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8  ">
          <a href="/" className="logo reveal-up">
            <img
              src="/src/assets/images/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025{" "}
            <span className="text-zinc-200 reveal-up"> Manjur Al Jubayer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
