import { useRouter } from "next/router";
import { useEffect } from "react";

export const Burger = ({ openMenu, isMenuOpen, isSticky }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

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
      className={`burger ${isHomePage ? "home-burger" : ""} ${
        isSticky ? "fixed" : ""
      }`}
      aria-label="Open burger menu"
    >
      <span></span>
    </button>
  );
};
