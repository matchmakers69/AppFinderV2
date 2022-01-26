import { VFC, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import FormGroup from "src/components/common/FormElements/FormGroup";
import ControlledTextField from "src/components/common/FormElements/RHFControlled/ControlledTextField";
import { RootState } from "src/store";
import SelectAccountTypeDynamicContent from "../SelectAccountTypeDynamicContent";
import SelectImportDynamicContent from "../SelectImportDynamicContent";
import SelectReviewToolDynamicContent from "../SelectReviewToolDynamicContent";
import * as S from "./FormDynamicContentConfig.styled";

const FormDynamicContentConfig: VFC = () => {
  const { config } = useSelector((state: RootState) => state.dynamicContentConfig);
  const methods = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      dynamicContentConfigName: config?.dynamicContentConfigName ?? "",
      accountType: config?.accountTypeId ?? "",
      reviewTool: config?.reviewToolId ?? "",
      configOption: "",
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const updateDynamicContentInputNameWithDefaultValue = () => {
      if (config) {
        reset({
          dynamicContentConfigName: config?.dynamicContentConfigName ?? "",
          accountType: config?.accountTypeId ?? "",
          reviewTool: config?.reviewToolId ?? "",
        });
      }
    };
    updateDynamicContentInputNameWithDefaultValue();
  }, [config, reset]);

  // const onSubmit: SubmitHandler<IShippingBillingInfo> = (data: IShippingBillingInfo) => {
  //   console.log('data', data);
  //   checkoutContext.dispatch({ type: 'updateShippingInfo', payload: data });
  // };

  const handleUpdateDynamicConfig = (data) => {
    console.log(data);
  };

  return (
    <S.DynamicContent>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleUpdateDynamicConfig)}>
          <ControlledTextField
            id="dynamicContentConfigName"
            label="Enter config name"
            control={control}
            name="dynamicContentConfigName"
            error={errors}
          />

          <SelectAccountTypeDynamicContent />
          <SelectReviewToolDynamicContent />
          <FormGroup>
            <SelectImportDynamicContent />
          </FormGroup>

          <FormGroup>
            <button type="submit">Load dynamic content</button>
          </FormGroup>
        </form>
      </FormProvider>
    </S.DynamicContent>
  );
};

export default FormDynamicContentConfig;
