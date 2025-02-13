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
            <a href="#form" className="hero__button button-pink">
              <span className="hero__button-text">Apply now</span>
              <span className="hero__button-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_34)">
                    <path
                      d="M8 0H16V8H15V1.71094L0.726562 15.9766L0.0234375 15.2734L14.2891 1H8V0Z"
                      fill="#563D41"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_34">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
          <div className="hero__image">
            <img
              src="img/hero/hero.webp"
              width="665"
              height="957"
              alt="Girl"
              loading="eager"
            />
          </div>

          <div className="hero__image-mobile">
            <img
              src="img/hero/hero-mobile.webp"
              width="440"
              height="794"
              loading="eager"
              alt="Girl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
