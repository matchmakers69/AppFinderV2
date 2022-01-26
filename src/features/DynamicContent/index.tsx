import { FC } from "react";
import { ContainerNarrow } from "src/styles/grid";
import { H2 } from "src/styles/typography";
import DynamicContentNames from "./DynamicContentNames";
import FormDynamicContentConfig from "./FormDynamicContentConfig";

const DynamicContent: FC = () => {
  return (
    <ContainerNarrow>
      <H2 className="m-15-bottom">Dynamic content names</H2>
      <DynamicContentNames />
      <FormDynamicContentConfig />
    </ContainerNarrow>
  );
};

export default DynamicContent;
