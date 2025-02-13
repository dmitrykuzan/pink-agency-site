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
                <a className="stack center" href="#">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.0071 13.423L27.8167 1.9375H25.4917L16.9764 11.9098L10.1719 1.9375H2.32501L12.6131 17.019L2.32501 29.0625H4.65001L13.6439 18.5303L20.8301 29.0625H28.677L18.0071 13.423ZM14.8238 17.1508L13.7815 15.6492L5.48701 3.70062H9.05783L15.75 13.3436L16.7923 14.8451L25.4936 27.3808H21.9228L14.8238 17.1508Z" />
                  </svg>
                </a>
              </li>
              <li className="footer__social">
                <a className="stack center" href="#">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4375 16.5C3.4375 10.3427 3.4375 7.26275 5.35013 5.35013C7.26275 3.4375 10.3414 3.4375 16.5 3.4375C22.6573 3.4375 25.7372 3.4375 27.6499 5.35013C29.5625 7.26275 29.5625 10.3414 29.5625 16.5C29.5625 22.6573 29.5625 25.7372 27.6499 27.6499C25.7372 29.5625 22.6586 29.5625 16.5 29.5625C10.3427 29.5625 7.26275 29.5625 5.35013 27.6499C3.4375 25.7372 3.4375 22.6586 3.4375 16.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.0735 8.9375H24.0597M22.6875 16.5C22.6875 18.141 22.0356 19.7148 20.8752 20.8752C19.7148 22.0356 18.141 22.6875 16.5 22.6875C14.859 22.6875 13.2852 22.0356 12.1248 20.8752C10.9644 19.7148 10.3125 18.141 10.3125 16.5C10.3125 14.859 10.9644 13.2852 12.1248 12.1248C13.2852 10.9644 14.859 10.3125 16.5 10.3125C18.141 10.3125 19.7148 10.9644 20.8752 12.1248C22.0356 13.2852 22.6875 14.859 22.6875 16.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
