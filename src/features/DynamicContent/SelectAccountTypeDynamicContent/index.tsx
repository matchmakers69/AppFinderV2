import React from "react";
import { useFormContext } from "react-hook-form";
import FormGroup from "src/components/common/FormElements/FormGroup";
import SelectDynamicContentControlled from "src/components/common/FormElements/RHFControlled/SelectDynamicContentControlled";
import useFetchDynamichContentAccountType from "../selectors/useFetchDynamichContentAccountType";
import { mappedAccountTypeOptions } from "../service/mappedAccountTypeOptions";

const SelectAccountTypeDynamicContent = () => {
  const { accountTypes, loading } = useFetchDynamichContentAccountType();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleAccountTypeChange = (accountTypeId) => {
    console.log(accountTypeId);
  };

  if (loading && !accountTypes) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {accountTypes && (
        <FormGroup>
          <SelectDynamicContentControlled
            name="accountType"
            id="accountType"
            control={control}
            label="Select Account type"
            options={mappedAccountTypeOptions(accountTypes)}
            defaultValue={0 || ""}
            error={errors}
            // onChange={handleAccountTypeChange}
          />
        </FormGroup>
      )}
    </>
  );
};

export default SelectAccountTypeDynamicContent;
