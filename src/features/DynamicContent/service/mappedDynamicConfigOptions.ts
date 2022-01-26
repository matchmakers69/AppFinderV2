export const mappedDynamicConfigOptions = (options) => {
  if (options && options.length > 0) {
    return (
      options.map((option) => {
        return {
          value: option.id,
          label: option.dynamicContentConfigName,
        };
      }) ?? []
    );
  }
  return null;
};
