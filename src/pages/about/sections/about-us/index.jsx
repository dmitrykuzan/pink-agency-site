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
            At <span>Pink Agency</span> , we specialize in helping creators
            establish a powerful digital presence. Our goal is to turn talented
            individuals into iconic brands by managing every aspect of their
            journey—from content to collaborations
          </Typography>
        </div>
      </Container>
    </section>
  );
};
