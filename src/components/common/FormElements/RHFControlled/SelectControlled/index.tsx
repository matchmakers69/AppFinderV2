import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useController } from "react-hook-form";

export type Base = {
  value: number | string;
  label: string;
};

// <T extends Record<string, unknown>> Ograniczenie typu generycznego do obiektu, (zebym nie przekazac np prymitywa boolen)
type GenericSelectProps<T extends Record<string, unknown>> = {
  id?: string;
  options: T[];
  onChange: (value: T) => void;
  label: string;
  name: string;
  control: any;
  value: string | number;
  defaultValue: string | number;
};

const SelectControlled = ({
  label,
  id,
  options,
  control,
  name,
  defaultValue,
  value: propsValue,
  onChange: onChangeProps,
}: GenericSelectProps<Base>) => {
  const onSelectChange = (e) => {
    const val = options.find((item) => item.value === e.target.value);
    if (val) onChangeProps(val);
  };
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: { defaultValue },
  });

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        id={id}
        label={label}
        {...field}
        value={propsValue}
        onChange={(e) => {
          field.onChange(e);
          onSelectChange(e);
        }}
      >
        <MenuItem value="">
          <em>Please select</em>
        </MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectControlled;
