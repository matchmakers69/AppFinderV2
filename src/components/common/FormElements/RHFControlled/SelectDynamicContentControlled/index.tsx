import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

type Base = {
  id: string | number;
  value: string;
};

type GenericSelectProps<T> = {
  id: string;
  control: any;
  options: T[];
  onChange?: (option: T) => void;
  name: string;
  label: string;
  defaultValue: string | number;
  error: object;
};

const SelectDynamicContentControlled = <T extends Base>({
  id,
  control,
  defaultValue,
  options,
  onChange: onChangeProps,
  name,
  label,
  error,
}: GenericSelectProps<T>) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Please select an option" }}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            label={label}
            {...field}
            onChange={(e) => {
              if (onChangeProps) onChangeProps(e.target.value);
              field.onChange(e);
            }}
          >
            {options.map((option) => {
              return (
                <MenuItem key={option.id} value={option.id}>
                  {option.value}
                </MenuItem>
              );
            })}
          </Select>
        )}
      />
      <div>{error && error[name]?.message}</div>
    </FormControl>
  );
};

export default SelectDynamicContentControlled;
