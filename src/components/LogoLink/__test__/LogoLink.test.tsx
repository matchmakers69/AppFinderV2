import { render, fireEvent } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Link from "next/link";
import singletonRouter from "next/router";
import renderer from "react-test-renderer";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "src/themes/theme";
import LogoLink from "..";

// eslint-disable-next-line global-require
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("<LogoLink />", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("should create a snapshot for Home", () => {
    expect(renderer.create(<LogoLink />).toJSON()).toMatchSnapshot();
  });
  it("renders Logo link component without a crash", () => {
    const { getByTestId } = render(
      <StyledThemeProvider theme={theme}>
        <LogoLink />
      </StyledThemeProvider>
    );
    const logoLinkWrapper = getByTestId("logo-wrapper");
    expect(logoLinkWrapper).toBeInTheDocument();
  });

  it("redirects user to home page", () => {
    const { getByTestId } = render(
      <StyledThemeProvider theme={theme}>
        <LogoLink>
          <span>
            <Link passHref href="/">
              <a>
                <img alt="Orcha Digital Health" />
              </a>
            </Link>
          </span>
        </LogoLink>
      </StyledThemeProvider>
    );
    fireEvent.click(getByTestId("logo-link"));
    expect(singletonRouter).toMatchObject({ asPath: "/" });
  });
  it("includes img logo", () => {
    const { getByAltText } = render(
      <StyledThemeProvider theme={theme}>
        <LogoLink />
      </StyledThemeProvider>
    );
    const orchaSvgImage = getByAltText("Orcha Digital Health");
    expect(orchaSvgImage).toBeInTheDocument();
  });
});
