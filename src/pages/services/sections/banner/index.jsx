import { Container, Typography } from "@components/ui";

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <div className="banner__wrapper stack">
          <div className="banner__info stack column">
            <div className="banner__info-text stack column">
              <Typography className="banner__info-title" tag="h3">
                Ready to transform your presence?
              </Typography>
              <Typography className="banner__info-description" tag="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Typography>
            </div>
            <form className="banner__info-form stack align-center">
              <div className="input banner__info-input">
                <input placeholder="Enter your e-mail" type="email" />
              </div>
              <button className="banner__info-button">Apply now</button>
            </form>
          </div>

          <div className="banner__image">
            <img
              src="img/banner/banner.jpg"
              width="637"
              height="352"
              alt="Girl"
            />
          </div>

          <div className="banner__image-mobile">
            <img
              src="img/banner/banner-mobile.jpg"
              width="440"
              height="352"
              alt="Girl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
