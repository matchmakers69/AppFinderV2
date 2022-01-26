import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { errorMessages } from "src/utils/errors/errorMessages";
import SignInForm, { SignInType } from "..";

const signInMock = jest.fn((user: SignInType) => {
  return Promise.resolve(user);
});

const mockStore = configureStore();
afterEach(() => jest.resetAllMocks());

describe("<SignInForm />", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should create a snapshot for SignInForm", () => {
    const initialState = {
      isLoggedIn: false,
      user: null,
      loading: false,
    };
    const store = mockStore(initialState);
    expect(
      renderer
        .create(
          <Provider store={store}>
            <SignInForm login={signInMock} />
          </Provider>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("displays matching errors when the values are invalid", async () => {
    const initialState = {
      isLoggedIn: false,
      user: null,
      loading: false,
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <SignInForm login={signInMock} />
      </Provider>
    );

    const submitButton = screen.getByRole("button", { name: /Submit/ });
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const username = "test";
    const password = "test";

    userEvent.type(usernameInput, username);
    userEvent.type(passwordInput, password);
    userEvent.click(submitButton);

    const usernamePatternErrorMessage = await screen.findByText(errorMessages.username.pattern);
    const passwordPatternErrorMessage = await screen.findByText(errorMessages.password.pattern);

    expect(signInMock).not.toBeCalled();
    expect(usernamePatternErrorMessage).toBeInTheDocument();
    expect(passwordPatternErrorMessage).toBeInTheDocument();
  });
});
