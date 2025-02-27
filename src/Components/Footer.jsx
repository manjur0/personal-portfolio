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
        <div className="">
          <h2 className="headline-1">Let&apos;s work together today!</h2>
          <ButtonPrimary
            classes={"btn btn-third"}
            href="mailto:mdpeeku@gmail.com"
            label="Let's talk"
            icon={<MdKeyboardArrowRight />}
          />
        </div>
        <div className="">
          <div>
            <p className="">Sitemap</p>
            <ul>
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} className="">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
