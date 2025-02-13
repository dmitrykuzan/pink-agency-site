import { Container, Typography } from "@components/ui";

export const Form = () => {
  return (
    <section className="form">
      <Container>
        <div className="form__wrapper stack">
          <div className="form__content stack column">
            <div className="form__info stack column">
              <div className="form__text stack column">
                <Typography className="form__title" weight="700" tag="h2">
                  WANT TO JOIN THE PINK TEAM?
                </Typography>
                <Typography className="form__description" tag="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Typography>
              </div>
              <div className="form__buttons stack align-center">
                <button className="form__button active">Models</button>
                <button className="form__button">Brands</button>
              </div>
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
            <img src="img/form/form.jpg" width="762" height="1084" alt="Girl" />
          </div>
        </div>
      </Container>
    </section>
  );
};
