import "../styles/components/Footer.css";
import footerLogoDesktop from "../assets/images/desktop/logo-footer-desktop.png";
import { Text } from "@chakra-ui/react";
import instagramIcon from "../assets/images/desktop/instagram.svg";
import twitterIcon from "../assets/images/desktop/twitter.svg";
import facebookIcon from "../assets/images/desktop/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={footerLogoDesktop} alt="Footer logo" />
      </div>
      <section className="footer__contact__us">
        <Text className="footer__title">Contact Us</Text>
        <address className="footer__contact__us__address">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </address>
        <ul>
          <li className="footer__contact__us__email">
            <a href={`mailto:example2020@gmail.com`}>example2020@gmail.com</a>
          </li>
          <li className="footer__contact__us__phno">
            <a href={`tel:(904) 443-0343`}>(904) 443-0343</a>
          </li>
        </ul>
      </section>
      <section className="footer__more">
        <Text className="footer__title">More</Text>
        <ul>
          <li className="footer__more__links">
            <a href="/">About Us</a>
          </li>
          <li className="footer__more__links">
            <a href="/">Products</a>
          </li>
          <li className="footer__more__links">
            <a href="/">Career</a>
          </li>
          <li className="footer__more__links">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </section>
      <section className="footer__right">
        <section className="footer__social__links">
          <Text className="footer__title">Social Links</Text>
          <ul>
            <li className="footer__social__link">
              <a href="https://instagram.com">
                <img src={instagramIcon} alt="Instagram link" />
              </a>
            </li>
            <li className="footer__social__link">
              <a href="https://twitter.com">
                <img src={twitterIcon} alt="Twitter link" />
              </a>
            </li>
            <li className="footer__social__link">
              <a href="https://facebook.com">
                <img src={facebookIcon} alt="Facebook link" />
              </a>
            </li>
          </ul>
        </section>
        <p className="footer__copyright">&copy; 2022 Food Truck Example</p>
      </section>
      <section className="footer__right__mobile">
        <p className="footer__copyright">&copy; 2022 Food Truck Example</p>
        <ul>
          <li className="footer__social__link">
            <a href="https://instagram.com">
              <img src={instagramIcon} alt="Instagram link" />
            </a>
          </li>
          <li className="footer__social__link">
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="Twitter link" />
            </a>
          </li>
          <li className="footer__social__link">
            <a href="https://facebook.com">
              <img src={facebookIcon} alt="Facebook link" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
