import { FC } from "react";
import Link, { LinkProps } from "next/link";

interface AppLinkProps extends LinkProps {
  label: string;
}

const AppLink: FC<AppLinkProps> = ({ href, label }) => {
  return (
    <Link passHref href={href}>
      {label}
    </Link>
  );
};

export default AppLink;
