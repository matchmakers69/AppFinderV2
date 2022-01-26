export const mappedAccountTypeOptions = (options) => {
  if (options && options.length > 0) {
    return options.map((option) => {
      return {
        id: option.id,
        value: option.accountTypeName,
      };
    });
  }
  return null;
};
