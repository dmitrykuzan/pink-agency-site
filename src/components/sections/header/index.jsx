import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Burger, BurgerMenu, Container, Logo, Menu } from "@components/ui";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  //** Sticky header
  const [isSticky, setIsSticky] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sticky = isMobile ? 200 : 10;

    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //**Menu burger state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <header
        className={`header stack align-center ${
          isSticky ? "header--fixed" : ""
        }`}
      >
        <Container>
          <div className="header__wrapper stack align-center justify-space-between">
            {isHomePage && isHomePage ? (
              <div className={`logo ${isSticky ? "logo--pink" : ""}`}>
                <Link href="/">
                  <svg
                    width="153"
                    height="56"
                    viewBox="0 0 153 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.3354 12.0003C42.2185 12.0003 44.5543 16.3215 44.5543 19.8251V23.971C44.5543 27.3578 42.2185 31.7374 34.3354 31.7374H12.321V44H2.04377V12.0003H34.3354ZM12.321 24.263H31.8829C31.8829 24.263 34.2186 24.263 34.2186 21.8688C34.2186 19.4747 31.8829 19.4747 31.8829 19.4747H12.321V24.263Z" />
                    <path d="M95.7884 12.8926H106.182V44.8923H96.0219L74.0076 24.9801V44.8923H63.6135V12.8926H73.8324L95.7884 32.8048V12.8926ZM152.827 12.8926L132.974 28.8925L152.827 44.8923H138.229L123.28 32.6297H120.594V44.8923H110.317V12.8926H120.594V25.1553H123.28L138.229 12.8926H152.827Z" />
                    <rect x="49" y="26" width="9" height="19" />
                    <g clipPath="url(#clip0_1_169)">
                      <path d="M58.8656 14.0601C58.5068 13.717 58.0802 13.4447 57.6103 13.2587C57.1404 13.0728 56.6364 12.9768 56.1273 12.9764C55.1642 12.9761 54.2363 13.3197 53.5275 13.939C52.8188 13.3197 51.8909 12.9761 50.9278 12.9764C50.4181 12.9768 49.9135 13.073 49.4431 13.2594C48.9727 13.4458 48.5458 13.7188 48.1869 14.0625C46.6561 15.5225 46.6568 17.8061 48.1882 19.2599L53.5275 24.3307L58.8669 19.2599C60.3983 17.8061 60.399 15.5225 58.8656 14.0601Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_169">
                        <rect
                          width="14.5984"
                          height="14.5984"
                          transform="translate(45.4172 11.3543)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            ) : (
              <div className={`logo logo--pink`}>
                <Link href="/">
                  <svg
                    width="153"
                    height="56"
                    viewBox="0 0 153 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M34.3354 12.0003C42.2185 12.0003 44.5543 16.3215 44.5543 19.8251V23.971C44.5543 27.3578 42.2185 31.7374 34.3354 31.7374H12.321V44H2.04377V12.0003H34.3354ZM12.321 24.263H31.8829C31.8829 24.263 34.2186 24.263 34.2186 21.8688C34.2186 19.4747 31.8829 19.4747 31.8829 19.4747H12.321V24.263Z" />
                    <path d="M95.7884 12.8926H106.182V44.8923H96.0219L74.0076 24.9801V44.8923H63.6135V12.8926H73.8324L95.7884 32.8048V12.8926ZM152.827 12.8926L132.974 28.8925L152.827 44.8923H138.229L123.28 32.6297H120.594V44.8923H110.317V12.8926H120.594V25.1553H123.28L138.229 12.8926H152.827Z" />
                    <rect x="49" y="26" width="9" height="19" />
                    <g clipPath="url(#clip0_1_169)">
                      <path d="M58.8656 14.0601C58.5068 13.717 58.0802 13.4447 57.6103 13.2587C57.1404 13.0728 56.6364 12.9768 56.1273 12.9764C55.1642 12.9761 54.2363 13.3197 53.5275 13.939C52.8188 13.3197 51.8909 12.9761 50.9278 12.9764C50.4181 12.9768 49.9135 13.073 49.4431 13.2594C48.9727 13.4458 48.5458 13.7188 48.1869 14.0625C46.6561 15.5225 46.6568 17.8061 48.1882 19.2599L53.5275 24.3307L58.8669 19.2599C60.3983 17.8061 60.399 15.5225 58.8656 14.0601Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_169">
                        <rect
                          width="14.5984"
                          height="14.5984"
                          transform="translate(45.4172 11.3543)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            )}

            <div className="header__navigation stack align-center">
              <Menu className="header__menu" />
              <Link
                href="/form"
                className="header__button button-pink"
                aria-label="Go to form"
              >
                Apply
              </Link>
              <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
