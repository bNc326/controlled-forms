import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";

export interface Props<
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
> extends ControlledInputBase<
    TValues,
    TName,
    SelectProps & { helperText?: React.ReactNode }
  > {
  menuItems: { value: any; display: React.ReactNode }[];
}

const ControlledSelect = <
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
>({
  name,
  control,
  fieldProps,
  menuItems,
}: Props<TValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl sx={{ flex: 1 }} error={!!fieldState.error}>
          {fieldProps?.label && <InputLabel>{fieldProps.label}</InputLabel>}
          <Select {...field} label={fieldProps?.label} {...fieldProps}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.display}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {fieldProps?.helperText ?? fieldState.error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default ControlledSelect;
