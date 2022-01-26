import React, { useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup } from "src/components/common/FormElements/FormGroup/FormGroup.styled";
import SelectControlled, { Base } from "src/components/common/FormElements/RHFControlled/SelectControlled";
import { RootState } from "src/store";
import { fetchDynamicContentConfig } from "../thunks/fetchDynamicContentConfigByIdThunk";

type DynamicContantNamesInput = {
  dynamicContentConfigId: number;
};

type IPropsOptions = {
  options: { label: string; value: number | string }[];
};

const SelectDynamicContent = ({ options }: IPropsOptions) => {
  const [dynamicContentNameId, setDynamicContentNameId] = useState(0);
  const { loading } = useSelector((state: RootState) => state.dynamicContentConfig);
  const dispatch = useDispatch();
  const methods = useForm<DynamicContantNamesInput>({
    reValidateMode: "onChange",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const handleLoadDynamicContentConfigSubmit = async (data: DynamicContantNamesInput) => {
    await dispatch(fetchDynamicContentConfig(data.dynamicContentConfigId));
  };

  const handleDynamicContentNamesChange = (dynamicContentNameObj: Base) => {
    setDynamicContentNameId(Number(dynamicContentNameObj?.value));
  };

  if (loading) {
    return <span>Loading dynamic content</span>;
  }

  return (
    <>
      <FormGroup>
        <SelectControlled
          id="dynamicContentConfigId"
          control={control}
          name="dynamicContentConfigId"
          label="Select dynamic content"
          value={dynamicContentNameId}
          defaultValue={0 || ""}
          onChange={handleDynamicContentNamesChange}
          options={options}
        />
      </FormGroup>
      <FormGroup>
        <Button onClick={handleSubmit(handleLoadDynamicContentConfigSubmit)} variant="contained">
          {" "}
          Load dynamic content{" "}
        </Button>
      </FormGroup>
    </>
  );
};

export default SelectDynamicContent;
