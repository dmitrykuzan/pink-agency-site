import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper stack">
          <div className="hero__info stack column">
            <div className="hero__text stack column">
              <Typography className="hero__title" weight="600" tag="h1">
                Empowering creators Building digital <br></br> Icons
                transforming presence
              </Typography>
              <Typography className="hero__description" tag="p">
                We help creators grow their brands, maximize revenue, and
                protect their digital presence
              </Typography>
            </div>
            <button className="hero__button button-pink">Apply now</button>
          </div>
          <div className="hero__image">
            <img src="img/hero/hero.png" width="665" height="957" alt="Girl" />
          </div>

          <div className="hero__image-mobile">
            <img
              src="img/hero/hero-mobile.png"
              width="440"
              height="794"
              alt="Girl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
