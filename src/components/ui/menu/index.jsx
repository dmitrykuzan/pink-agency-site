import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = (props) => {
  const { className, onClose } = props;

  const router = useRouter();

  return (
    <nav className={`${className ? className : ""} menu`}>
      <ul className="menu__list stack align-center">
        <li className={`menu__item ${router.pathname === "/" ? "active" : ""}`}>
          <Link
            className={`menu__item-link stack center `}
            href="/"
            onClick={onClose}
          >
            Home
          </Link>
        </li>
        <li
          className={`menu__item ${
            router.pathname === "/about" ? "active" : ""
          }`}
        >
          <Link
            className={`menu__item-link stack center `}
            href="/about"
            onClick={onClose}
          >
            About Us
          </Link>
        </li>
        <li
          className={`menu__item ${
            router.pathname === "/services" ? "active" : ""
          }`}
        >
          <Link
            className={`menu__item-link stack center `}
            href="/services"
            onClick={onClose}
          >
            Services
          </Link>
        </li>
        <li
          className={`menu__item ${
            router.pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link
            className={`menu__item-link stack center `}
            href="/contact"
            onClick={onClose}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
