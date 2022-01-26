import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const Header = styled.header`
  width: 100%;
  background-color: transparent;

  @media ${device.tabletS} {
    position: relative;
  }
`;
