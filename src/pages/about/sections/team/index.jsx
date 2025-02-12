import { Container, Typography } from "@components/ui";

export const Team = () => {
  return (
    <section className="team">
      <Container>
        <div className="team__wrapper stack column">
          <div className="team__text stack column">
            <Typography tag="h2" center weight="500" className="team__title">
              Our Team
            </Typography>
            <Typography tag="p" center className="team__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Typography>
          </div>

          <ul className="team__list stack align-center">
            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/john.jpg"
                  width="276"
                  height="326"
                  alt="John - Product manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    John
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    Product manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/tiktok.svg"
                        width="30"
                        height="30"
                        alt="TikTok"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/linkedin.svg"
                        width="30"
                        height="30"
                        alt="Linkedin"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/instagram.svg"
                        width="30"
                        height="30"
                        alt="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/elsa.jpg"
                  width="276"
                  height="326"
                  alt="Elsa - CEO manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    Elsa
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    CEO manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/tiktok.svg"
                        width="30"
                        height="30"
                        alt="TikTok"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/linkedin.svg"
                        width="30"
                        height="30"
                        alt="Linkedin"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/instagram.svg"
                        width="30"
                        height="30"
                        alt="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/michael.jpg"
                  width="276"
                  height="326"
                  alt="Michael - Content manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    Michael
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    Content manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/tiktok.svg"
                        width="30"
                        height="30"
                        alt="TikTok"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/linkedin.svg"
                        width="30"
                        height="30"
                        alt="Linkedin"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/instagram.svg"
                        width="30"
                        height="30"
                        alt="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="team__item stack column">
              <div className="team__item-image">
                <img
                  src="img/team/nicky.jpg"
                  width="276"
                  height="326"
                  alt="Nicky - PR manager"
                />
              </div>
              <div className="team__item-info stack column">
                <div className="team__item-text stack column">
                  <Typography tag="p" className="team__item-name" weight="500">
                    Nicky
                  </Typography>
                  <Typography tag="p" className="team__item-position">
                    PR manager
                  </Typography>
                </div>

                <ul className="team__item-socials stack align-center">
                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/tiktok.svg"
                        width="30"
                        height="30"
                        alt="TikTok"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/linkedin.svg"
                        width="30"
                        height="30"
                        alt="Linkedin"
                      />
                    </a>
                  </li>

                  <li className="team__item-social">
                    <a href="#">
                      <img
                        src="img/team/instagram.svg"
                        width="30"
                        height="30"
                        alt="Instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
