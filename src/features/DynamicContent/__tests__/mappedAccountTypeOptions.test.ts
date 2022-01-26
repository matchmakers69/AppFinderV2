import { mappedAccountTypeOptions } from "../service/mappedAccountTypeOptions";

const INPUT_ARRAY = [
  { id: 1, accountTypeName: "Member" },
  { id: 2, accountTypeName: "Professional" },
  { id: 3, accountTypeName: "Developer" },
  { id: 4, accountTypeName: "AppLibraryBuilder" },
  { id: 5, accountTypeName: "Unregistered" },
  { id: 6, accountTypeName: "Admin" },
  { id: 7, accountTypeName: "PartnerApi" },
  { id: 8, accountTypeName: "Student" },
  { id: 9, accountTypeName: "AcademyMember" },
  { id: 10, accountTypeName: "Teacher" },
];

const OUTPUT_ARRAY = [
  { id: 1, value: "Member" },
  { id: 2, value: "Professional" },
  { id: 3, value: "Developer" },
  { id: 4, value: "AppLibraryBuilder" },
  { id: 5, value: "Unregistered" },
  { id: 6, value: "Admin" },
  { id: 7, value: "PartnerApi" },
  { id: 8, value: "Student" },
  { id: 9, value: "AcademyMember" },
  { id: 10, value: "Teacher" },
];

describe("Expected result from map account type", () => {
  test("should INPUT_ARRAY have same length as OUTPUT_ARRAY", () => {
    const result = mappedAccountTypeOptions(INPUT_ARRAY);
    expect(result).toHaveLength(OUTPUT_ARRAY.length);
  });

  test("should have same ids", () => {
    const result = mappedAccountTypeOptions(INPUT_ARRAY);
    expect(result.map((obj) => obj.id)).toEqual(OUTPUT_ARRAY.map((obj) => obj.id));
  });
  test("should returned mappedArray of accountType with id and value as keys", () => {
    const result = mappedAccountTypeOptions(INPUT_ARRAY);
    expect(result).toEqual(OUTPUT_ARRAY);
  });
});
