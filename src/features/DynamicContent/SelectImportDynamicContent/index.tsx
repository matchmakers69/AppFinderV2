import React, { useState, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import FormGroup from "src/components/common/FormElements/FormGroup";
import SelectControlled, { Base } from "src/components/common/FormElements/RHFControlled/SelectControlled";
import useFetchDynamicContentConfigOptions from "../selectors/useFetchDynamicContentConfigOptions";
import { mappedDynamicConfigOptions } from "../service/mappedDynamicConfigOptions";

const SelectImportDynamicContent = () => {
  const [configOptionId, setConfigOptionId] = useState(0);
  const { configOptions, loading } = useFetchDynamicContentConfigOptions();
  const mappedConfigOptions = mappedDynamicConfigOptions(configOptions);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleDynamicConfigOptionsChange = (configName: Base) => {
    setConfigOptionId(Number(configName.value));
  };

  const mappedDynamicContentNames = useMemo(() => mappedConfigOptions, [mappedConfigOptions]);

  if (loading && !configOptions?.length) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {configOptions && (
        <div>
          <FormGroup>
            <SelectControlled
              id="configOption"
              control={control}
              name="configOption"
              label="Import config"
              value={configOptionId}
              defaultValue={0 || ""}
              onChange={handleDynamicConfigOptionsChange}
              options={mappedDynamicContentNames}
            />
          </FormGroup>
          <FormGroup>
            <button type="button">Import dynamic content</button>
          </FormGroup>
        </div>
      )}
    </>
  );
};

export default SelectImportDynamicContent;
