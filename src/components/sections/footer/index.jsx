import { Container, Menu, Typography } from "@components/ui";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper stack column">
          <div className="footer__top stack align-center justify-space-between">
            <div className="footer__info stack column">
              <Link className="footer__info-logo" href="/">
                <img
                  src="img/ui/logo-footer.svg"
                  width="153"
                  height="80"
                  alt="Footer logo"
                />
              </Link>
              <Typography className="footer__info-text" tag="p">
                Empowering Creators. Building Icons
              </Typography>
            </div>

            <Menu className="footer__menu" />

            <div className="footer__policy stack">
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">Privacy Policy</Link>
            </div>

            <ul className="footer__socials stack align-center">
              <li className="footer__social">
                <a href="#">
                  <img src="img/ui/x.svg" width="33" height="33" alt="X" />
                </a>
              </li>
              <li className="footer__social">
                <a href="#">
                  <img
                    src="img/ui/instagram.svg"
                    width="33"
                    height="33"
                    alt="X"
                  />
                </a>
              </li>
            </ul>

            <form className="footer__form stack column">
              <h3 className="footer__form-title">
                Ready to transform your presence?
              </h3>
              <div className="footer__form-body stack align-center">
                <div className="input footer__form-input">
                  <input placeholder="Enter your e-mail" type="email" />
                </div>
                <button className="button-pink">Apply</button>
              </div>
            </form>
          </div>
          <span className="footer__designed">
            Design by <a href="#">triplexxx52</a>
          </span>

          <div className="footer__policy-mobile stack align-center justify-space-between">
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
