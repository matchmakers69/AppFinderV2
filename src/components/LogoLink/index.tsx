import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./LogoLink.styled";

const LogoLink: FC = () => {
  return (
    <span data-testid="logo-wrapper">
      <Link passHref href="/">
        <Logo data-testid="logo-link">
          <Image src="/assets/svg/logo-orcha.svg" height={90} width={80} alt="Orcha Digital Health" />
        </Logo>
      </Link>
    </span>
  );
};

export default LogoLink;
