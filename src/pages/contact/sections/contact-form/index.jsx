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
                    href="mailto:info@pinkagency.com"
                    className="stack align-center"
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
                    info@pinkagency.com
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
                    href="#"
                  >
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.59988 30.7313C6.0405 30.7315 5.48655 30.6216 4.96969 30.4076C4.45283 30.1937 3.98321 29.88 3.58767 29.4844C3.19212 29.0889 2.87841 28.6193 2.66447 28.1024C2.45053 27.5855 2.34055 27.0316 2.34082 26.4722V6.67221C2.34055 6.11283 2.45053 5.55887 2.66447 5.04202C2.87841 4.52516 3.19212 4.05554 3.58767 3.65999C3.98321 3.26445 4.45283 2.95074 4.96969 2.7368C5.48655 2.52286 6.0405 2.41288 6.59988 2.41315H26.3999C26.9593 2.41288 27.5132 2.52286 28.0301 2.7368C28.5469 2.95074 29.0166 3.26445 29.4121 3.65999C29.8076 4.05554 30.1214 4.52516 30.3353 5.04202C30.5492 5.55887 30.6592 6.11283 30.6589 6.67221V26.4722C30.6592 27.0316 30.5492 27.5855 30.3353 28.1024C30.1214 28.6193 29.8076 29.0889 29.4121 29.4844C29.0166 29.88 28.5469 30.1937 28.0301 30.4076C27.5132 30.6216 26.9593 30.7315 26.3999 30.7313H6.59988ZM23.9043 18.7688H20.9136V28.6688H26.4205C26.7092 28.6688 26.9951 28.6119 27.2619 28.5014C27.5286 28.3909 27.771 28.229 27.9752 28.0248C28.1793 27.8206 28.3413 27.5783 28.4518 27.3115C28.5623 27.0448 28.6191 26.7589 28.6191 26.4701V6.67015C28.6191 6.08704 28.3875 5.52781 27.9752 5.11548C27.5629 4.70316 27.0036 4.47152 26.4205 4.47152H6.62051C6.0374 4.47152 5.47817 4.70316 5.06585 5.11548C4.65352 5.52781 4.42188 6.08704 4.42188 6.67015V26.4701C4.42188 27.0533 4.65352 27.6125 5.06585 28.0248C5.47817 28.4371 6.0374 28.6688 6.62051 28.6688H17.6136V18.7688H14.3136V15.4688H17.6136V13.6971C17.6136 10.3352 19.2492 8.87084 22.0274 8.87084C23.3371 8.87084 24.0404 8.96571 24.3786 9.01315H24.3993V12.1688H22.4976C21.5386 12.1688 21.0848 12.5813 20.9487 13.4063C20.9156 13.6226 20.8997 13.8412 20.9013 14.0601V15.4688H24.3663L23.896 18.7688H23.9043Z"
                        fill="#FFADBC"
                      />
                    </svg>
                  </a>
                </li>

                <li className="contact-form__social">
                  <a
                    className="contact-form__social-icon stack center"
                    href="#"
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
                        d="M14.4868 15.136C13.3593 14.9765 10.7881 15.2391 9.5286 17.5698C8.2691 19.9004 9.53822 22.3259 10.3316 23.2471C11.114 24.1093 13.6013 25.7414 16.24 24.1478C16.8945 23.7531 17.7098 23.4575 18.6338 20.3706L18.5266 8.22388C18.3478 9.56175 19.826 12.6995 24.0321 13.0708"
                        stroke="#FFADBC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>

                <li className="contact-form__social">
                  <a
                    className="contact-form__social-icon stack center"
                    href="#"
                  >
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.875 1.71875C5.87215 1.71875 4.91037 2.11713 4.20125 2.82625C3.49213 3.53537 3.09375 4.49715 3.09375 5.5C3.09375 6.50285 3.49213 7.46463 4.20125 8.17375C4.91037 8.88287 5.87215 9.28125 6.875 9.28125C7.87785 9.28125 8.83963 8.88287 9.54875 8.17375C10.2579 7.46463 10.6562 6.50285 10.6562 5.5C10.6562 4.49715 10.2579 3.53537 9.54875 2.82625C8.83963 2.11713 7.87785 1.71875 6.875 1.71875ZM5.15625 5.5C5.15625 5.04416 5.33733 4.60699 5.65966 4.28466C5.98199 3.96233 6.41916 3.78125 6.875 3.78125C7.33084 3.78125 7.76801 3.96233 8.09034 4.28466C8.41267 4.60699 8.59375 5.04416 8.59375 5.5C8.59375 5.95584 8.41267 6.39301 8.09034 6.71534C7.76801 7.03767 7.33084 7.21875 6.875 7.21875C6.41916 7.21875 5.98199 7.03767 5.65966 6.71534C5.33733 6.39301 5.15625 5.95584 5.15625 5.5ZM3.09375 11C3.09375 10.7265 3.2024 10.4642 3.3958 10.2708C3.58919 10.0774 3.8515 9.96875 4.125 9.96875H9.625C9.8985 9.96875 10.1608 10.0774 10.3542 10.2708C10.5476 10.4642 10.6562 10.7265 10.6562 11V28.875C10.6562 29.1485 10.5476 29.4108 10.3542 29.6042C10.1608 29.7976 9.8985 29.9062 9.625 29.9062H4.125C3.8515 29.9062 3.58919 29.7976 3.3958 29.6042C3.2024 29.4108 3.09375 29.1485 3.09375 28.875V11ZM5.15625 12.0312V27.8438H8.59375V12.0312H5.15625ZM12.7188 11C12.7188 10.7265 12.8274 10.4642 13.0208 10.2708C13.2142 10.0774 13.4765 9.96875 13.75 9.96875H19.25C19.5235 9.96875 19.7858 10.0774 19.9792 10.2708C20.1726 10.4642 20.2812 10.7265 20.2812 11V11.5968L20.8794 11.3396C21.9107 10.8991 23.0047 10.623 24.1216 10.5215C27.9372 10.175 31.2812 13.1725 31.2812 17.0225V28.875C31.2812 29.1485 31.1726 29.4108 30.9792 29.6042C30.7858 29.7976 30.5235 29.9062 30.25 29.9062H24.75C24.4765 29.9062 24.2142 29.7976 24.0208 29.6042C23.8274 29.4108 23.7188 29.1485 23.7188 28.875V19.25C23.7188 18.7942 23.5377 18.357 23.2153 18.0347C22.893 17.7123 22.4558 17.5312 22 17.5312C21.5442 17.5312 21.107 17.7123 20.7847 18.0347C20.4623 18.357 20.2812 18.7942 20.2812 19.25V28.875C20.2812 29.1485 20.1726 29.4108 19.9792 29.6042C19.7858 29.7976 19.5235 29.9062 19.25 29.9062H13.75C13.4765 29.9062 13.2142 29.7976 13.0208 29.6042C12.8274 29.4108 12.7188 29.1485 12.7188 28.875V11ZM14.7812 12.0312V27.8438H18.2188V19.25C18.2188 18.2472 18.6171 17.2854 19.3263 16.5763C20.0354 15.8671 20.9972 15.4688 22 15.4688C23.0028 15.4688 23.9646 15.8671 24.6737 16.5763C25.3829 17.2854 25.7812 18.2472 25.7812 19.25V27.8438H29.2188V17.0225C29.2188 14.4045 26.9349 12.3365 24.31 12.5758C23.4082 12.6576 22.5248 12.8803 21.692 13.2358L19.657 14.1089C19.5 14.1763 19.3288 14.2037 19.1586 14.1885C18.9885 14.1734 18.8247 14.1162 18.6821 14.0222C18.5396 13.9281 18.4226 13.8001 18.3417 13.6496C18.2608 13.4992 18.2185 13.331 18.2188 13.1601V12.0312H14.7812Z"
                        fill="#FFADBC"
                      />
                    </svg>
                  </a>
                </li>

                <li className="contact-form__social">
                  <a
                    className="contact-form__social-icon stack center"
                    href="#"
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
              <Typography className="contact-form__body-title" weight="700">
                Ready to transform your presence?
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
                        id=""
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="contact-form__bottom stack column">
                  <button className="contact-form__submit button-pink">
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
