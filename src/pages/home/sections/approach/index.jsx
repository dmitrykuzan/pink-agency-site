import { Container, Typography } from "@components/ui";

export const Approach = () => {
  return (
    <setion className="approach">
      <Container>
        <div className="approach__wrapper stack column">
          <Typography tag="h2" className="typography approach__title">
            Our Approach
          </Typography>

          <ul className="approach__list stack column">
            <li className="approach__item stack justify-space-between">
              <span className="approach__item-count">01</span>
              <h3 className="approach__item-title">Discovery and Planning</h3>
              <div className="approach__item-description">
                <p>
                  We conduct in-depth interviews, surveys, and market research
                  to gather valuable insights that will inform our marketing
                  decisions.
                </p>
              </div>
            </li>
            <li className="approach__item stack justify-space-between">
              <span className="approach__item-count">02</span>
              <h3 className="approach__item-title">Creative Exploration</h3>
              <div className="approach__item-description">
                <p>
                  We encourage open brainstorming and collaboration to generate
                  fresh ideas that align with your brand and vision.
                </p>
              </div>
            </li>
            <li className="approach__item stack justify-space-between">
              <span className="approach__item-count">03</span>
              <h3 className="approach__item-title">Iterative Design</h3>
              <div className="approach__item-description">
                <p>
                  We believe that design is an iterative process that requires
                  constant refinement.
                </p>
              </div>
            </li>
            <li className="approach__item stack justify-space-between">
              <span className="approach__item-count">04</span>
              <h3 className="approach__item-title">Open Communication</h3>
              <div className="approach__item-description">
                <p>
                  We value open and transparent communication throughout the
                  management process.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </setion>
  );
};
