import { Container, Typography } from "@components/ui";

export const ContactForm = () => {
  return (
    <section className="contact-form">
      <Container>
        <div className="contact-form__wrapper stack justify-space-between">
          <div className="contact-form__info stack column">
            <Typography className="contact-form__title" weight="500" tag="h1">
              Contact
            </Typography>

            <div className="contact-form__info-body stack column">
              <ul className="contact-form__links stack column">
                <li className="contact-form__link">
                  <a
                    href="mailto:talent@PINK.AGENCY"
                    className="stack align-center"
                    aria-label="Send email"
                  >
                    <span className="contact-form__link-icon stack center">
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 30.25C14.5979 30.25 12.8104 29.8888 11.1375 29.1665C9.46459 28.4442 8.00938 27.4647 6.77188 26.2281C5.53438 24.9915 4.55492 23.5363 3.8335 21.8625C3.11209 20.1887 2.75092 18.4012 2.75 16.5C2.74909 14.5988 3.11025 12.8113 3.8335 11.1375C4.55675 9.46367 5.53621 8.00846 6.77188 6.77188C8.00754 5.53529 9.46275 4.55583 11.1375 3.8335C12.8123 3.11117 14.5998 2.75 16.5 2.75C18.4003 2.75 20.1877 3.11117 21.8625 3.8335C23.5373 4.55583 24.9925 5.53529 26.2281 6.77188C27.4638 8.00846 28.4437 9.46367 29.1679 11.1375C29.892 12.8113 30.2528 14.5988 30.25 16.5V18.4937C30.25 19.8458 29.7862 20.9976 28.8585 21.9491C27.9308 22.9006 26.7905 23.3759 25.4375 23.375C24.6354 23.375 23.8792 23.2031 23.1688 22.8594C22.4583 22.5156 21.8625 22.0229 21.3813 21.3813C20.7167 22.0458 19.9659 22.5445 19.129 22.8773C18.2921 23.21 17.4158 23.3759 16.5 23.375C14.5979 23.375 12.9768 22.7045 11.6366 21.3634C10.2965 20.0223 9.62592 18.4012 9.625 16.5C9.62409 14.5988 10.2946 12.9777 11.6366 11.6366C12.9786 10.2955 14.5998 9.625 16.5 9.625C18.4003 9.625 20.0218 10.2955 21.3648 11.6366C22.7077 12.9777 23.3778 14.5988 23.375 16.5V18.4937C23.375 19.0896 23.5698 19.5938 23.9594 20.0063C24.349 20.4188 24.8417 20.625 25.4375 20.625C26.0333 20.625 26.526 20.4188 26.9156 20.0063C27.3052 19.5938 27.5 19.0896 27.5 18.4937V16.5C27.5 13.4292 26.4344 10.8281 24.3031 8.69687C22.1719 6.56562 19.5708 5.5 16.5 5.5C13.4292 5.5 10.8281 6.56562 8.69688 8.69687C6.56563 10.8281 5.5 13.4292 5.5 16.5C5.5 19.5708 6.56563 22.1719 8.69688 24.3031C10.8281 26.4344 13.4292 27.5 16.5 27.5H22C22.3896 27.5 22.7164 27.632 22.9804 27.896C23.2444 28.16 23.3759 28.4863 23.375 28.875C23.3741 29.2637 23.2421 29.5905 22.979 29.8554C22.7159 30.1203 22.3896 30.2518 22 30.25H16.5ZM16.5 20.625C17.6458 20.625 18.6198 20.224 19.4219 19.4219C20.224 18.6198 20.625 17.6458 20.625 16.5C20.625 15.3542 20.224 14.3802 19.4219 13.5781C18.6198 12.776 17.6458 12.375 16.5 12.375C15.3542 12.375 14.3802 12.776 13.5781 13.5781C12.776 14.3802 12.375 15.3542 12.375 16.5C12.375 17.6458 12.776 18.6198 13.5781 19.4219C14.3802 20.224 15.3542 20.625 16.5 20.625Z"
                          fill="#FFADBC"
                        />
                      </svg>
                    </span>
                    talent@PINK.AGENCY
                  </a>
                </li>
                <li className="contact-form__link">
                  <a href="#" className="stack align-center">
                    <span className="contact-form__link-icon stack center">
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.625 19.25L16.5 16.5V9.625M4.125 16.5C4.125 18.1251 4.44509 19.7343 5.06699 21.2357C5.68889 22.7371 6.60043 24.1013 7.74955 25.2504C8.89868 26.3996 10.2629 27.3111 11.7643 27.933C13.2657 28.5549 14.8749 28.875 16.5 28.875C18.1251 28.875 19.7343 28.5549 21.2357 27.933C22.7371 27.3111 24.1013 26.3996 25.2504 25.2504C26.3996 24.1013 27.3111 22.7371 27.933 21.2357C28.5549 19.7343 28.875 18.1251 28.875 16.5C28.875 14.8749 28.5549 13.2657 27.933 11.7643C27.3111 10.2629 26.3996 8.89868 25.2504 7.74955C24.1013 6.60043 22.7371 5.68889 21.2357 5.06699C19.7343 4.44509 18.1251 4.125 16.5 4.125C14.8749 4.125 13.2657 4.44509 11.7643 5.06699C10.2629 5.68889 8.89868 6.60043 7.74955 7.74955C6.60043 8.89868 5.68889 10.2629 5.06699 11.7643C4.44509 13.2657 4.125 14.8749 4.125 16.5Z"
                          stroke="#FFADBC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    10:00 AM - 06:00 PM
                  </a>
                </li>
              </ul>

              <ul className="contact-form__socials stack align-center">
                <li className="contact-form__social">
                  <a
                    className="contact-form__social-icon stack center"
                    href="https://x.com/managedbypink"
                    aria-label="Go to LinkedIn"
                    target="_blank"
                  >
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="#FFADBC"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.0071 13.423L27.8167 1.9375H25.4917L16.9764 11.9098L10.1719 1.9375H2.32501L12.6131 17.019L2.32501 29.0625H4.65001L13.6439 18.5303L20.8301 29.0625H28.677L18.0071 13.423ZM14.8238 17.1508L13.7815 15.6492L5.48701 3.70062H9.05783L15.75 13.3436L16.7923 14.8451L25.4936 27.3808H21.9228L14.8238 17.1508Z" />
                    </svg>
                  </a>
                </li>

                <li className="contact-form__social">
                  <a
                    className="contact-form__social-icon stack center"
                    href="https://www.instagram.com/managedbypink/"
                    aria-label="Go to Instagram"
                    target="_blank"
                  >
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.4375 16.5C3.4375 10.3427 3.4375 7.26275 5.35013 5.35013C7.26275 3.4375 10.3414 3.4375 16.5 3.4375C22.6573 3.4375 25.7372 3.4375 27.6499 5.35013C29.5625 7.26275 29.5625 10.3414 29.5625 16.5C29.5625 22.6573 29.5625 25.7372 27.6499 27.6499C25.7372 29.5625 22.6586 29.5625 16.5 29.5625C10.3427 29.5625 7.26275 29.5625 5.35013 27.6499C3.4375 25.7372 3.4375 22.6586 3.4375 16.5Z"
                        stroke="#FFADBC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.0735 8.9375H24.0597M22.6875 16.5C22.6875 18.141 22.0356 19.7148 20.8752 20.8752C19.7148 22.0356 18.141 22.6875 16.5 22.6875C14.859 22.6875 13.2852 22.0356 12.1248 20.8752C10.9644 19.7148 10.3125 18.141 10.3125 16.5C10.3125 14.859 10.9644 13.2852 12.1248 12.1248C13.2852 10.9644 14.859 10.3125 16.5 10.3125C18.141 10.3125 19.7148 10.9644 20.8752 12.1248C22.0356 13.2852 22.6875 14.859 22.6875 16.5Z"
                        stroke="#FFADBC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form__body">
            <div className="contact-form__body-wrapper stack column">
              <Typography
                className="contact-form__body-title"
                weight="700"
                tag="h3"
              >
                We’d Love to Hear from You
              </Typography>
              <form className="contact-form__form stack column">
                <div className="contact-form__body-fields stack column">
                  <div className="form__input stack column">
                    <Typography
                      tag="span"
                      upperCase
                      className="form__input-label"
                      weight="600"
                    >
                      Full legal name
                    </Typography>
                    <div className="form__input-wrapper">
                      <input placeholder="Full name" type="text" />
                    </div>
                  </div>

                  <div className="form__input stack column">
                    <Typography
                      tag="span"
                      upperCase
                      className="form__input-label"
                      weight="600"
                    >
                      E-Mail
                    </Typography>
                    <div className="form__input-wrapper">
                      <input placeholder="E-Mail" type="email" />
                    </div>
                  </div>

                  <div className="form__textarea stack column">
                    <Typography
                      tag="span"
                      upperCase
                      className="form__input-label"
                      weight="600"
                    >
                      Message
                    </Typography>
                    <div className="form__textarea-wrapper">
                      <textarea
                        placeholder="enter your message"
                        name="contact-form-textarea"
                        id="contact-form-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="contact-form__bottom stack column">
                  <button
                    className="contact-form__submit button-pink"
                    aria-label="Contact form submit"
                  >
                    Apply now
                  </button>

                  <Typography
                    className="contact-form__bottom-text"
                    center
                    tag="span"
                  >
                    Approximate response time - 30 minutes
                  </Typography>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
