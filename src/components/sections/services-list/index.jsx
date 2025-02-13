import { Container, Typography } from "@components/ui";
import { motion } from "framer-motion";

export const ServicesList = (props) => {
  const { className } = props;
  let cardVariants = {};

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 992;

    if (!isMobile) {
      cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: custom * 0.2,
            duration: 0.5,
            ease: "easeOut",
          },
        }),
      };
    }
  }

  return (
    <section className={`${className ? className : ""} services`}>
      <Container>
        <div className="services__wrapper stack column">
          <Typography
            tag={`${className && className === "home-services" ? "h2" : "h1"}`}
            className="services__title h1"
            weight="500"
          >
            Services
          </Typography>

          <ul className="services__list">
            <motion.li
              className="services__item stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1, once: true }}
              custom={0}
              suppressHydrationWarning={true}
            >
              <span className="services__item-icon">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.4873 49.7578C73.9988 33.8928 70.6199 18.1608 61.6329 12.6477C53.1399 7.43849 45.7268 9.53799 41.2744 12.882L38.0001 15.333M61.4873 49.7578C58.4853 53.5673 54.5681 57.38 49.5901 61.0628C44.6976 64.6887 42.2498 66.5 38.0001 66.5C33.7504 66.5 31.3058 64.6887 26.4101 61.0628C0.703103 42.0375 3.22377 19.4845 14.3673 12.6477C22.8603 7.43849 30.2734 9.53799 34.7258 12.882L38.0001 15.333M61.4873 49.7578L43.9914 29.9092C43.644 29.5164 43.1687 29.2595 42.6498 29.1842C42.1309 29.1088 41.602 29.2198 41.1573 29.4975L34.2349 33.8232C32.8774 34.682 31.2404 34.9825 29.6664 34.6619C28.0923 34.3414 26.7032 33.4245 25.7898 32.1031C24.8763 30.7818 24.5092 29.1584 24.7653 27.5726C25.0214 25.9868 25.8808 24.5615 27.1638 23.5948L38.0001 15.333"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            </motion.li>

            <motion.li
              className="services__item stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1, once: true }}
              custom={1}
              suppressHydrationWarning={true}
            >
              <span className="services__item-icon">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.6668 38C69.6668 55.4895 55.4897 69.6667 38.0002 69.6667C20.5107 69.6667 6.3335 55.4895 6.3335 38C6.3335 20.5105 20.5107 6.33334 38.0002 6.33334C55.4897 6.33334 69.6668 20.5105 69.6668 38Z"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.5817 31.8598C46.2682 29.4437 43.4942 25.5423 38.5067 25.5423C32.7149 25.5423 30.2766 28.7502 29.7826 30.3557C29.0099 32.5027 29.1651 36.9138 35.9576 37.3952C44.4442 37.9968 47.8452 38.9975 47.4145 44.194C46.9839 49.3905 42.2497 50.5115 38.5099 50.3912C34.7701 50.2708 28.6521 48.5545 28.4146 43.9312M37.9146 22.1603V25.555M37.9146 50.3595V53.827"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="services__item-text stack column">
                <Typography className="services__item-title" tag="h3">
                  Content Monetization
                </Typography>
                <Typography className="services__item-description" tag="p">
                  Maximize revenue with strategies tailored to your content
                </Typography>
              </div>
            </motion.li>

            <motion.li
              className="services__item stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1, once: true }}
              custom={2}
              suppressHydrationWarning={true}
            >
              <span className="services__item-icon">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.0384 6.33334H67.4594L67.7761 6.37768L68.0896 6.46634L68.2796 6.54868C68.5329 6.65845 68.7641 6.81679 68.9731 7.02368L69.0998 7.16301L69.2391 7.34351L69.4101 7.62851L69.5336 7.91351L69.5938 8.11618L69.6381 8.31884L69.6666 8.61968V22.971C69.6664 23.5728 69.4378 24.152 69.027 24.5917C68.6162 25.0314 68.0538 25.2987 67.4535 25.3398C66.8531 25.3808 66.2596 25.1924 65.7928 24.8126C65.326 24.4329 65.0208 23.8901 64.9388 23.294L64.9166 22.971V14.4368L44.5233 34.8302C44.1211 35.2324 43.588 35.477 43.0208 35.5194C42.4537 35.5618 41.8901 35.3993 41.4326 35.0613L41.1666 34.8333L31.5716 25.6183L13.5533 43.6335C13.1295 44.0585 12.5605 44.3072 11.9608 44.3298C11.3611 44.3523 10.7751 44.147 10.3206 43.7551C9.86611 43.3632 9.57684 42.8137 9.51095 42.2172C9.44506 41.6207 9.60744 41.0213 9.96544 40.5397L10.1966 40.2737L29.8933 20.577C30.2958 20.1753 30.8291 19.9313 31.3963 19.8894C31.9635 19.8476 32.5268 20.0107 32.9839 20.349L33.2499 20.577L42.8449 29.792L61.5536 11.0833H53.0353C52.4619 11.0826 51.9082 10.8744 51.4763 10.4972C51.0444 10.1201 50.7636 9.59939 50.6856 9.03134L50.6634 8.70834C50.6635 8.13442 50.8713 7.57993 51.2485 7.1474C51.6258 6.71487 52.1469 6.43356 52.7154 6.35551L53.0384 6.33334ZM11.8749 53.8333C12.5048 53.8333 13.1089 54.0836 13.5543 54.529C13.9997 54.9744 14.2499 55.5785 14.2499 56.2083V67.2917C14.2499 67.9216 13.9997 68.5257 13.5543 68.9711C13.1089 69.4165 12.5048 69.6667 11.8749 69.6667C11.245 69.6667 10.641 69.4165 10.1956 68.9711C9.75016 68.5257 9.49994 67.9216 9.49994 67.2917V56.2083C9.49994 55.5785 9.75016 54.9744 10.1956 54.529C10.641 54.0836 11.245 53.8333 11.8749 53.8333ZM30.0833 43.5417C30.0833 42.9118 29.833 42.3077 29.3876 41.8623C28.9422 41.4169 28.3382 41.1667 27.7083 41.1667C27.0784 41.1667 26.4743 41.4169 26.0289 41.8623C25.5835 42.3077 25.3333 42.9118 25.3333 43.5417V67.2917C25.3333 67.9216 25.5835 68.5257 26.0289 68.9711C26.4743 69.4165 27.0784 69.6667 27.7083 69.6667C28.3382 69.6667 28.9422 69.4165 29.3876 68.9711C29.833 68.5257 30.0833 67.9216 30.0833 67.2917V43.5417ZM43.5416 47.5C44.1715 47.5 44.7756 47.7502 45.221 48.1956C45.6664 48.641 45.9166 49.2451 45.9166 49.875V67.2917C45.9166 67.9216 45.6664 68.5257 45.221 68.9711C44.7756 69.4165 44.1715 69.6667 43.5416 69.6667C42.9117 69.6667 42.3076 69.4165 41.8622 68.9711C41.4168 68.5257 41.1666 67.9216 41.1666 67.2917V49.875C41.1666 49.2451 41.4168 48.641 41.8622 48.1956C42.3076 47.7502 42.9117 47.5 43.5416 47.5ZM61.7499 34.0417C61.7499 33.4118 61.4997 32.8077 61.0543 32.3623C60.6089 31.9169 60.0048 31.6667 59.3749 31.6667C58.745 31.6667 58.141 31.9169 57.6956 32.3623C57.2502 32.8077 56.9999 33.4118 56.9999 34.0417V67.2917C56.9999 67.9216 57.2502 68.5257 57.6956 68.9711C58.141 69.4165 58.745 69.6667 59.3749 69.6667C60.0048 69.6667 60.6089 69.4165 61.0543 68.9711C61.4997 68.5257 61.7499 67.9216 61.7499 67.2917V34.0417Z"
                    fill="#FFBFCB"
                  />
                </svg>
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
            </motion.li>

            <motion.li
              className="services__item stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 1, once: true }}
              custom={3}
              suppressHydrationWarning={true}
            >
              <span className="services__item-icon">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.8335 28.2023L54.2325 27.873C60.9332 22.344 64.2835 19.5795 66.9752 20.9158C69.6668 22.249 69.6668 26.676 69.6668 35.5237V40.4763C69.6668 49.324 69.6668 53.751 66.9752 55.0842C64.2835 56.4173 60.9332 53.656 54.2325 48.127L53.8335 47.7977M6.3335 34.8333C6.3335 24.3833 6.3335 19.1583 9.57933 15.9125C12.8252 12.6667 18.0502 12.6667 28.5002 12.6667H31.6668C42.1168 12.6667 47.3418 12.6667 50.5877 15.9125C53.8335 19.1583 53.8335 24.3833 53.8335 34.8333V41.1667C53.8335 51.6167 53.8335 56.8417 50.5877 60.0875C47.3418 63.3333 42.1168 63.3333 31.6668 63.3333H28.5002C18.0502 63.3333 12.8252 63.3333 9.57933 60.0875C6.3335 56.8417 6.3335 51.6167 6.3335 41.1667V34.8333Z"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.417 34.8333C39.0403 34.8333 41.167 32.7067 41.167 30.0833C41.167 27.46 39.0403 25.3333 36.417 25.3333C33.7936 25.3333 31.667 27.46 31.667 30.0833C31.667 32.7067 33.7936 34.8333 36.417 34.8333Z"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            </motion.li>

            <motion.li
              className="services__item services__item--list stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              custom={4}
              suppressHydrationWarning={true}
            >
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
            </motion.li>

            <motion.li
              className="services__item stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              custom={5}
              suppressHydrationWarning={true}
            >
              <span className="services__item-icon">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.5 66.5H28.5M47.5 66.5V39.9C47.5 39.3961 47.2998 38.9128 46.9435 38.5565C46.5872 38.2002 46.1039 38 45.6 38H30.4C29.8961 38 29.4128 38.2002 29.0565 38.5565C28.7002 38.9128 28.5 39.3961 28.5 39.9V66.5M47.5 66.5H64.6C65.1039 66.5 65.5872 66.2998 65.9435 65.9435C66.2998 65.5872 66.5 65.1039 66.5 64.6V57.3167C66.5 56.8128 66.2998 56.3295 65.9435 55.9732C65.5872 55.6169 65.1039 55.4167 64.6 55.4167H49.4C48.8961 55.4167 48.4128 55.6169 48.0565 55.9732C47.7002 56.3295 47.5 56.8128 47.5 57.3167V66.5ZM28.5 66.5V50.9833C28.5 50.4794 28.2998 49.9962 27.9435 49.6398C27.5872 49.2835 27.1039 49.0833 26.6 49.0833H11.4C10.8961 49.0833 10.4128 49.2835 10.0565 49.6398C9.70018 49.9962 9.5 50.4794 9.5 50.9833V64.6C9.5 65.1039 9.70018 65.5872 10.0565 65.9435C10.4128 66.2998 10.8961 66.5 11.4 66.5H28.5ZM34.219 16.1912L37.0975 10.089C37.1752 9.91457 37.3018 9.76638 37.462 9.66239C37.6222 9.5584 37.809 9.50305 38 9.50305C38.191 9.50305 38.3778 9.5584 38.538 9.66239C38.6982 9.76638 38.8248 9.91457 38.9025 10.089L41.7842 16.1912L48.2188 17.176C49.0453 17.3027 49.3747 18.3667 48.7762 18.9747L44.1212 23.7247L45.22 30.4317C45.3593 31.293 44.498 31.9517 43.757 31.5432L38 28.3765L32.243 31.5432C31.5052 31.9485 30.6407 31.293 30.78 30.4317L31.8788 23.7247L27.2238 18.9747C26.6222 18.3667 26.9547 17.3027 27.778 17.176L34.219 16.1912Z"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            </motion.li>

            <motion.li
              className="services__item stack column"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              custom={6}
              suppressHydrationWarning={true}
            >
              <span className="services__item-icon">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.8333 69.6666H33.9688C23.6455 69.6666 18.4775 69.6666 14.8928 67.1396C13.8727 66.4242 12.9608 65.5657 12.1853 64.5905C9.5 61.2148 9.5 56.3571 9.5 46.6355V38.5763C9.5 29.1935 9.5 24.5005 10.9852 20.7543C13.3728 14.7281 18.4205 9.97815 24.8235 7.72981C28.8008 6.33331 33.782 6.33331 43.757 6.33331C49.4507 6.33331 52.3007 6.33331 54.5743 7.13131C58.2318 8.41698 61.1167 11.1308 62.4815 14.573C63.3333 16.7136 63.3333 19.3958 63.3333 24.757V34.8333"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 38C9.5 35.2008 10.612 32.5162 12.5913 30.5368C14.5707 28.5575 17.2553 27.4455 20.0545 27.4455C22.1635 27.4455 24.6493 27.8128 26.6982 27.265C27.5934 27.024 28.4096 26.552 29.0649 25.8962C29.7201 25.2403 30.1915 24.4238 30.4317 23.5283C30.9795 21.4795 30.6122 18.9936 30.6122 16.8846C30.613 14.086 31.7254 11.4022 33.7046 9.42353C35.6839 7.44487 38.368 6.33331 41.1667 6.33331M52.25 41.1666C47.7343 41.1666 44.8083 44.0451 41.3503 45.0933C39.9443 45.5176 39.2413 45.733 38.9563 46.0338C38.6713 46.3346 38.589 46.7716 38.4212 47.6488C36.6383 57.0506 40.5365 65.74 49.837 69.1188C50.8345 69.4861 51.3348 69.6666 52.2532 69.6666C53.1715 69.6666 53.6687 69.4861 54.6693 69.122C63.9667 65.74 67.8617 57.0506 66.0788 47.652C65.911 46.7716 65.8255 46.3315 65.5437 46.0338C65.2618 45.7361 64.5557 45.5176 63.1497 45.0933C59.6885 44.0451 56.7625 41.1666 52.25 41.1666Z"
                    stroke="#FFBFCB"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            </motion.li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
