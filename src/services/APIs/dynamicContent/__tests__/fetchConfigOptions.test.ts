import axios from "axios";
import { fetchConfigOptions } from "../dynamicContent.api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("calls fetching configOptions", async () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: [{ id: 157, dynamicContentConfigName: "V6 Pro" }],
      },
    })
  );

  const configOptions = await fetchConfigOptions();

  expect(configOptions).toEqual({
    result: [{ id: 157, dynamicContentConfigName: "V6 Pro" }],
  });
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});
