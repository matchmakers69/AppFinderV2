export const mappedReviewToolsOptions = (options) => {
  if (options && options.length > 0) {
    return options.map((option) => {
      return {
        id: parseInt(option.value, 10),
        value: option.name,
      };
    });
  }
  return null;
};
