import axios from "axios";
import { fetchUserRolesByAccountType } from "../dynamicContent.api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("calls fetching usersRole", async () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: [
          {
            id: 1,
            accountTypeName: "Member",
          },
          {
            id: 2,
            accountTypeName: "Professional",
          },
        ],
      },
    })
  );
  const usersByRole = await fetchUserRolesByAccountType();

  expect(usersByRole).toEqual({
    result: [
      { id: 1, accountTypeName: "Member" },
      { id: 2, accountTypeName: "Professional" },
    ],
  });
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});
