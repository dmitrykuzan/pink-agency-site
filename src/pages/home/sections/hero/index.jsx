import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@components/ui";
import Link from "next/link";

export const Hero = () => {
  //video loaded
  const [videoLoaded, setVideoLoaded] = useState(false);
  //video loaded

  //scroll anim
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y = useTransform(scrollY, [0, 300], [0, -150]);
  const xLeft = useTransform(scrollY, [0, 300], [0, -200]);
  const xRight = useTransform(scrollY, [0, 300], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  //scroll anim

  // title anim
  let titleAnim = {};
  let leftAnim = {};
  let rightAnim = {};

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 992;

    if (!isMobile) {
      titleAnim = {
        hidden: { x: -50, opacity: 0 },
        visible: (custom) => ({
          x: 0,
          opacity: 1,
          transition: {
            delay: custom * 0.3,
            duration: 1,
            ease: "easeOut",
          },
        }),
      };

      leftAnim = {
        hidden: { x: -30, opacity: 0 },
        visible: (custom) => ({
          x: 0,
          opacity: 1,
          transition: {
            delay: custom * 0.4,
            duration: 0.8,
            ease: "easeOut",
          },
        }),
      };

      rightAnim = {
        hidden: { x: 30, opacity: 0 },
        visible: (custom) => ({
          x: 0,
          opacity: 1,
          transition: {
            delay: custom * 0.4,
            duration: 0.8,
            ease: "easeOut",
          },
        }),
      };
    }
  }
  // title anim

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      suppressHydrationWarning={true}
    >
      <div className={`hero__video-fake ${videoLoaded ? "hide" : "show"}`}>
        <img src="img/hero/hero-fake.jpg" alt="" />
      </div>
      <video
        className="hero__video"
        key={videoLoaded}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="video/hero.webm" type="video/webm" />
      </video>
      <Container>
        <div className="hero__wrapper stack">
          <div className="hero__info stack column">
            <div className="hero__text stack column">
              <motion.h1
                className="hero__title"
                custom={1}
                variants={titleAnim}
                style={{ y, opacity }}
                suppressHydrationWarning={true}
              >
                Your All-Access Pass to Creative Excellence.
              </motion.h1>
            </div>

            <div className="hero__text-bottom stack align-center justify-space-between">
              <motion.div
                custom={2}
                variants={leftAnim}
                suppressHydrationWarning={true}
                style={isMobile ? { y, opacity } : { x: xLeft, opacity }}
                className="hero__link-wrapper"
              >
                <Link href="#services" className="hero__link-scroll">
                  Scroll down
                </Link>
              </motion.div>

              <motion.div
                custom={2}
                variants={rightAnim}
                suppressHydrationWarning={true}
                style={isMobile ? { y, opacity } : { x: xRight, opacity }}
                className="hero__text-description"
              >
                <p>
                  We help creators grow their brands, maximize revenue, and
                  protect their digital presence
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};
