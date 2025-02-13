import Link from "next/link";
import { useTransition } from "react";

export const Logo = (props) => {
  //props
  const { src, className } = props;

  const t = useTransition();

  const logoClassName = className ? `logo ${className}` : "logo";

  return (
    <div className={logoClassName}>
      <Link href="/" aria-label="Go Home Page">
        <img src={src} width="152" height="56" alt="" loading="eager" />
      </Link>
    </div>
  );
};
