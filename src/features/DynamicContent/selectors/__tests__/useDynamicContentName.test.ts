import * as redux from "react-redux";
import useFetchDynamicContentNames from "../useFetchDynamicContentNames";

// Mocking useSelector from react-redux
jest.mock("react-redux", () => ({
  ...(jest.requireActual("react-redux") as object),
  useSelector: jest.fn().mockImplementation(() => {
    return {
      dynamicContentConfigNames: null,
      loading: false,
    };
  }),
  useDispatch: () => true,
}));

describe("useDynamicContentName", () => {
  // test("dispatches action when hook is empty", () => {});
});
