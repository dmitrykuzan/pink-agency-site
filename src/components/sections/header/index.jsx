import { useState } from "react";
import { Burger, BurgerMenu, Container, Logo, Menu } from "@components/ui";

export const Header = () => {
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
      <header className="header">
        <Container>
          <div className="header__wrapper stack align-center justify-space-between">
            <Logo src="img/ui/logo.svg" />
            <div className="header__navigation stack align-center">
              <Menu className="header__menu" />
              <a href="#form" className="header__button button-pink">
                Apply
              </a>
              <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
