import { TextField } from "@mui/material";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";
import { TextFieldProps } from "@mui/material";
import React from "react";
export interface Props<
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
> extends ControlledInputBase<TValues, TName, TextFieldProps> {}

const ControlledTextfield = <
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
>({
  name,
  control,
  fieldProps,
}: Props<TValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...fieldProps}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledTextfield;
