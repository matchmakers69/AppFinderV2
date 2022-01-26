import axios from "axios";
import { fetchReviewsTool } from "../dynamicContent.api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("calls fetching usersRole", async () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: [
          { name: "OBR V5.5", value: "2" },
          { name: "OBR V5.0", value: "4" },
          { name: "OBR V5.5 WEB", value: "11" },
          { name: "Prefill Test", value: "16" },
          { name: "Tim test", value: "18" },
        ],
      },
    })
  );
  const reviewsTool = await fetchReviewsTool();

  expect(reviewsTool).toEqual({
    result: [
      { name: "OBR V5.5", value: "2" },
      { name: "OBR V5.0", value: "4" },
      { name: "OBR V5.5 WEB", value: "11" },
      { name: "Prefill Test", value: "16" },
      { name: "Tim test", value: "18" },
    ],
  });
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});
