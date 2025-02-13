import { useRef } from "react";

import { Logo, Menu } from "@components/ui";
import { useOnClickOutside } from "@hooks";

export const BurgerMenu = (props) => {
  const { isMenuOpen, onClose } = props;

  //useClickOutside
  const ref = useRef();

  useOnClickOutside(ref, onClose);

  const handleCloseMenu = () => {
    setModalLoginActive(true);
    onClose();
  };

  return (
    <div
      ref={ref}
      className={
        isMenuOpen ? "burger__menu burger__menu--active" : "burger__menu"
      }
    >
      <div className="burger__menu-wrapper stack column">
        <div className="burger__menu-header stack column">
          <button
            className="burger__menu-close"
            onClick={onClose}
            aria-label="Close burger menu"
          ></button>
          <Logo className="burger__menu-logo" src="/img/ui/logo.svg" />
        </div>
        <div className="burger__menu-list">
          <Menu onClose={onClose} className="burger--menu" />
        </div>
      </div>
    </div>
  );
};
