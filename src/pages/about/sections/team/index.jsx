import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer";
import { Container, Typography } from "@components/ui";
import Link from "next/link";

export const Team = () => {
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
    <section className="team" ref={ref}>
      <div className="team__bg">
        <img src="img/team/bg.jpg" alt="" />
      </div>

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
          <Link href="/contact">Contact</Link>
        </motion.div>
      </div>
    </section>
  );
};
