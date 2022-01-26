import { FC } from "react";
import LogoLink from "src/components/LogoLink";
import * as S from "./Header.styled";

const Header: FC = () => {
  return (
    <S.Header data-testid="header">
      <LogoLink />
    </S.Header>
  );
};

export default Header;
