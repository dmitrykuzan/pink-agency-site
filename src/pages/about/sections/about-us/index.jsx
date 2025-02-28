import { Container, Typography } from "@components/ui";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <Container>
        <div className="about-us__wrapper stack column">
          <Typography
            className="about-us__title h1"
            weight="500"
            center
            tag="h1"
          >
            About Us
          </Typography>

          <Typography className="about-us__description" center tag="p">
            At <span>Pink Agency</span>, we specialize in transforming creators
            into iconic brands with a powerful digital presence. Our expertise
            lies in full-service management—handling everything from content
            strategy and engagement growth to OnlyFans monetization and brand
            partnerships. We help talented individuals scale their influence,
            maximize earnings, and build a legacy in the digital space. Whether
            you’re a rising star or an established creator, we provide the
            tools, strategy, and support to elevate your career to new heights.
          </Typography>
        </div>
      </Container>
    </section>
  );
};
