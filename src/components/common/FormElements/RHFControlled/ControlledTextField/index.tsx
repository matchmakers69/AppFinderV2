import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormGroup } from "../../FormGroup/FormGroup.styled";

type IControlledTextFieldProps = {
  control: any;
  name: string;
  error: any;
  id: string;
  label: string;
};

const ControlledTextField = ({ control, name, error, id, label }: IControlledTextFieldProps) => {
  return (
    <FormGroup>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "This field cannot be empty",
          minLength: {
            value: 3,
            message: "Minimum number of character for this field is 2",
          },
          maxLength: {
            value: 20,
            message: "Max number of character for this field is 20",
          },
          pattern: {
            value: /^[^\s]+(?:$|.*[^\s]+$)/,
            message: "Entered value cannot start/end or contain only white spacing",
          },
        }}
        render={({ field }) => <TextField {...field} id={id} label={label} fullWidth />}
      />
      <div>{error && error[name]?.message}</div>
    </FormGroup>
  );
};

export default ControlledTextField;
