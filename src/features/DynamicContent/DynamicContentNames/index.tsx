import React, { useMemo } from "react";
import useFetchDynamicContentNames from "src/features/DynamicContent/selectors/useFetchDynamicContentNames";
import SelectDynamicContent from "../SelectDynamicContent";
import { mappedDynamicConfigOptions } from "../service/mappedDynamicConfigOptions";
import * as S from "./DynamicContentNames.styled";

const DynamicContentNames = () => {
  const { dynamicContentNames, loading } = useFetchDynamicContentNames(14); // TO DO update to dynamic value
  const mappedConfigOptions = mappedDynamicConfigOptions(dynamicContentNames);

  const mappedDynamicContentNames = useMemo(() => mappedConfigOptions, [mappedConfigOptions]);
  if (loading && !dynamicContentNames) {
    return <span>Loading...</span>;
  }

  if (dynamicContentNames) {
    return (
      <S.DynamicContentNamesWrapper>
        <SelectDynamicContent options={mappedDynamicContentNames} />
      </S.DynamicContentNamesWrapper>
    );
  }

  return null;
};

export default DynamicContentNames;
