import "../styles/components/Footer.css";
import footerLogoDesktop from "../assets/images/desktop/logo-footer-desktop.png";
import { Text } from "@chakra-ui/react";
import instagramIcon from "../assets/images/desktop/instagram.svg";
import twitterIcon from "../assets/images/desktop/twitter.svg";
import facebookIcon from "../assets/images/desktop/facebook.svg";

function Footer() {
  return (
    <footer className="footer" aria-label="Footer of the page.">
      <div
        className="footer__logo"
        aria-label="Company logo added to the footer."
      >
        <img src={footerLogoDesktop} alt="Footer logo" />
      </div>
      <section
        className="footer__contact__us"
        aria-label="Contact us section in footer."
      >
        <Text className="footer__title">Contact Us</Text>
        <address
          className="footer__contact__us__address"
          aria-label="Address of the organization."
        >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </address>
        <ul>
          <li
            className="footer__contact__us__email"
            aria-label="Email id for contacting owner of website."
          >
            <a href={`mailto:example2020@gmail.com`}>example2020@gmail.com</a>
          </li>
          <li
            className="footer__contact__us__phno"
            aria-label="Phone number to contact owner of website."
          >
            <a href={`tel:(904) 443-0343`}>(904) 443-0343</a>
          </li>
        </ul>
      </section>
      <section className="footer__more" aria-label="Links in footer.">
        <Text className="footer__title">More</Text>
        <ul>
          <li
            className="footer__more__links"
            aria-label="Link to About us section."
          >
            <a href="#about">About Us</a>
          </li>
          <li
            className="footer__more__links"
            aria-label="Link to products page."
          >
            <a href="/">Products</a>
          </li>
          <li className="footer__more__links" aria-label="Link to career page.">
            <a href="/">Career</a>
          </li>
          <li
            className="footer__more__links"
            aria-label="Link to contact us section"
          >
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </section>
      <section className="footer__social__copyright">
        <section className="footer__social__links" aria-label="Social links.">
          <Text className="footer__title">Social Links</Text>
          <ul>
            <li className="footer__social__link" aria-label="Instagram link.">
              <a href="https://instagram.com">
                <img src={instagramIcon} alt="Instagram link" />
              </a>
            </li>
            <li className="footer__social__link" aria-label="Twitter link.">
              <a href="https://twitter.com">
                <img src={twitterIcon} alt="Twitter link" />
              </a>
            </li>
            <li className="footer__social__link" aria-label="Facebook link.">
              <a href="https://facebook.com">
                <img src={facebookIcon} alt="Facebook link" />
              </a>
            </li>
          </ul>
        </section>
        <p className="footer__copyright" aria-label="Copyright text.">
          &copy; 2022 Food Truck Example
        </p>
      </section>
      <section className="footer__social__copyright__mobile">
        <p className="footer__copyright" aria-label="Copyright text.">
          &copy; 2022 Food Truck Example
        </p>
        <ul>
          <li className="footer__social__link" aria-label="Instagram link.">
            <a href="https://instagram.com">
              <img src={instagramIcon} alt="Instagram link" />
            </a>
          </li>
          <li className="footer__social__link" aria-label="Twitter link.">
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="Twitter link" />
            </a>
          </li>
          <li className="footer__social__link" aria-label="Facebook link.">
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
