import React from "react";
import { useFormContext } from "react-hook-form";
import FormGroup from "src/components/common/FormElements/FormGroup";
import SelectDynamicContentControlled from "src/components/common/FormElements/RHFControlled/SelectDynamicContentControlled";
import useFetchDynamichContentReviewTools from "../selectors/useFetchDynamicContentReviewTools";
import { mappedReviewToolsOptions } from "../service/mappedReviewToolsOptions";

const SelectReviewToolDynamicContent = () => {
  const { reviewTools, loading } = useFetchDynamichContentReviewTools();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleReviewToolIdChange = (reviewToolId) => {
    console.log(reviewToolId);
  };

  if (loading && !reviewTools) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {reviewTools && (
        <FormGroup>
          <SelectDynamicContentControlled
            name="reviewTool"
            id="reviewTool"
            control={control}
            label="Select review tool"
            onChange={handleReviewToolIdChange}
            options={mappedReviewToolsOptions(reviewTools)}
            defaultValue={"reviewTool" || ""}
            error={errors}
          />
        </FormGroup>
      )}
    </>
  );
};

export default SelectReviewToolDynamicContent;
