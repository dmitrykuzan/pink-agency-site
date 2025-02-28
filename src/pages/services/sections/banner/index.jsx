import { useEffect, useRef, useState } from "react";
import { Container, Typography } from "@components/ui";
import { motion, useScroll, useTransform } from "framer";
import Link from "next/link";

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //anim
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="banner">
      <Container>
        <div className="banner__wrapper stack">
          {/* <div className="banner__info stack column">
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
              <button className="banner__info-button" aria-label="Apply submit">
                Apply now
              </button>
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
          </div> */}

          <div className="team__wrapper stack align-end justify-space-between">
            <motion.div
              style={isMobile ? {} : { scale }}
              className="team__item stack column justify-space-between"
            >
              <h3> Personalized management and marketing.</h3>
              <Link href="/services">Services</Link>
            </motion.div>
            <motion.div
              style={isMobile ? {} : { scale }}
              className="team__item stack column justify-space-between"
            >
              <h3>Leave a request and we will contact you</h3>
              <Link href="/form">Join Us</Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
