import { Container, Typography } from "@components/ui";

export const ServicesList = (props) => {
  const { className } = props;

  return (
    <section className={`${className ? className : ""} services`}>
      <Container>
        <div className="services__wrapper stack column">
          <Typography tag="h1" className="services__title h1" weight="500">
            Services
          </Typography>

          <ul className="services__list">
            <li className="services__item stack column">
              <span className="services__item-icon">
                <img
                  src="img/services/full-service.svg"
                  width="76"
                  height="76"
                  alt="Service icon"
                />
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Full-Service Management
                </Typography>
                <Typography className="services__item-description" tag="p">
                  We handle all aspects of your brand and digital presence—from
                  social media management to PR
                </Typography>
              </div>
            </li>

            <li className="services__item stack column">
              <span className="services__item-icon">
                <img
                  src="img/services/monetization.svg"
                  width="76"
                  height="76"
                  alt="Service icon"
                />
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Content Monetization
                </Typography>
                <Typography className="services__item-description" tag="p">
                  Maximize revenue with strategies tailored to your content
                </Typography>
              </div>
            </li>

            <li className="services__item stack column">
              <span className="services__item-icon">
                <img
                  src="img/services/growth.svg"
                  width="76"
                  height="76"
                  alt="Service icon"
                />
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Growth & Awareness
                </Typography>
                <Typography className="services__item-description" tag="p">
                  Cultivate your image and align with top platforms to grow your
                  audience
                </Typography>
              </div>
            </li>

            <li className="services__item stack column">
              <span className="services__item-icon">
                <img
                  src="img/services/content.svg"
                  width="76"
                  height="76"
                  alt="Service icon"
                />
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Content Creation & Curation
                </Typography>
                <Typography className="services__item-description" tag="p">
                  Artistic direction, photography, videography, and editing to
                  showcase your best
                </Typography>
              </div>
            </li>

            <li className="services__item services__item--list stack column">
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Why Choose Us?
                </Typography>
                <Typography className="services__item-description" tag="p">
                  A visually engaging section highlighting your value
                  proposition
                </Typography>
              </div>

              <ul className="services__item-list stack column">
                <li>Personalized Management</li>
                <li>Maximizing Your Success</li>
                <li>Elevating Your Brand</li>
              </ul>
            </li>

            <li className="services__item stack column">
              <span className="services__item-icon">
                <img
                  src="img/services/brand-awareness.svg"
                  width="76"
                  height="76"
                  alt="Service icon"
                />
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Brand Awareness & Activation
                </Typography>
                <Typography className="services__item-description" tag="p">
                  We partner creators with leading brands for impactful
                  collaborations
                </Typography>
              </div>
            </li>

            <li className="services__item stack column">
              <span className="services__item-icon">
                <img
                  src="img/services/protection.svg"
                  width="76"
                  height="76"
                  alt="Service icon"
                />
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  DMCA & Reputation Protection
                </Typography>
                <Typography className="services__item-description" tag="p">
                  Cultivate your image and align with top platforms to grow your
                  audience
                </Typography>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
