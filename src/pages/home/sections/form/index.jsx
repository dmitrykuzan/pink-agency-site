import { Container, Typography } from "@components/ui";
import { motion } from "framer-motion";

export const Form = () => {
  // title anim
  let titleAnim = {};
  let buttonAnim = {};

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 992;

    if (!isMobile) {
      titleAnim = {
        hidden: { x: -20, opacity: 0 },
        visible: (custom) => ({
          x: 0,
          opacity: 1,
          transition: {
            delay: custom * 0.3,
            duration: 0.8,
            ease: "easeOut",
          },
        }),
      };

      buttonAnim = {
        hidden: {
          opacity: 0,
        },
        visible: (custom) => ({
          opacity: 1,

          transition: {
            delay: custom * 0.3,
            duration: 0.8,
          },
        }),
      };
    }
  }

  return (
    <motion.section
      className="form"
      id="form"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      suppressHydrationWarning={true}
    >
      <Container>
        <div className="form__wrapper stack">
          <div className="form__content stack column">
            <div className="form__info stack column">
              <div className="form__text stack column">
                <motion.h2
                  className="form__title"
                  custom={1}
                  variants={titleAnim}
                  suppressHydrationWarning={true}
                >
                  WANT TO JOIN THE PINK TEAM?
                </motion.h2>
                <motion.p
                  className="form__description"
                  custom={2}
                  variants={titleAnim}
                  suppressHydrationWarning={true}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </motion.p>
              </div>
              <motion.div
                className="form__buttons stack align-center"
                variants={buttonAnim}
                custom={3}
                suppressHydrationWarning={true}
              >
                <button className="form__button active">Models</button>
                <button className="form__button">Brands</button>
              </motion.div>
            </div>

            <form className="form__body stack column">
              <div className="form__body-wrapper stack column">
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

                <div className="form__input stack column">
                  <Typography
                    tag="span"
                    upperCase
                    className="form__input-label"
                    weight="600"
                  >
                    Phone number
                  </Typography>
                  <div className="form__input-wrapper">
                    <input placeholder="000-000-000" type="text" />
                  </div>
                </div>

                <div className="form__textarea stack column">
                  <Typography
                    tag="span"
                    upperCase
                    className="form__input-label"
                    weight="600"
                  >
                    Links to major followings
                  </Typography>
                  <div className="form__textarea-wrapper">
                    <textarea
                      placeholder="Intagram, SnapChat, TikTok"
                      name="form__textarea"
                      id="form__textarea"
                    ></textarea>
                  </div>
                </div>

                <div className="form__input stack column">
                  <Typography
                    tag="span"
                    upperCase
                    className="form__input-label"
                    weight="600"
                  >
                    Location
                  </Typography>
                  <div className="form__input-wrapper">
                    <input placeholder="City, State" type="text" />
                  </div>
                </div>
              </div>

              <button className="form__submit">APPLY</button>
            </form>
          </div>

          <div className="form__image">
            <img
              src="img/form/form.webp"
              width="762"
              height="1084"
              loading="lazy"
              alt="Girl"
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};
