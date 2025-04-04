import { TextField } from "@mui/material";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";
import { TextFieldProps } from "@mui/material";
import React, { useState } from "react";
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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, ...field }, fieldState }) => {
        const props: TextFieldProps = {
          ...field,
          ...fieldProps,
          error: !!fieldState.error,
          helperText: fieldState.error?.message || fieldState.error?.message,
          slotProps: {
            inputLabel: {
              shrink: !!field.value || isFocused,
            },
          },
          onFocus() {
            setIsFocused(true);
          },
          onBlur() {
            setIsFocused(false);
            onBlur();
          },
        };
        return <TextField {...props} />;
      }}
    />
  );
};

export default ControlledTextfield;
