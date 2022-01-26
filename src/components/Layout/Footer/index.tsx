import { FC } from "react";
import { Paragraph } from "src/styles/typography";
import * as S from "./Footer.styled";

const Footer: FC = () => {
  return (
    <S.Footer className="main-footer">
      <S.FooterContent>
        <Paragraph>&copy; Orcha Digital Health {new Date().getFullYear()}</Paragraph>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
