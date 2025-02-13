import { useEffect } from "react";

export const Burger = ({ openMenu, isMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isMenuOpen]);

  return (
    <button
      type="button"
      onClick={openMenu}
      className="burger"
      aria-label="Open burger menu"
    >
      <span></span>
    </button>
  );
};
