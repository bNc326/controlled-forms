import { TextField, TextFieldProps } from "@mui/material";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { NumberFormatBase, NumberFormatBaseProps } from "react-number-format";
import { ControlledInputBase } from "../models/index";
import React from "react";

export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>>
  extends ControlledInputBase<
    TValues,
    TName,
    NumberFormatBaseProps<TextFieldProps>
  > {
  formatOptions?: Intl.NumberFormatOptions;
  suffix?: string;
}

const ControlledNumberFormatBase = <
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
>({
  control,
  name,
  fieldProps,
  formatOptions,
  suffix,
}: Props<TValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...field }, fieldState }) => {
        return (
          <NumberFormatBase
            variant="outlined"
            {...field}
            {...fieldProps}
            error={!!fieldState.error}
            helperText={fieldState.error?.message || fieldProps?.helperText}
            customInput={TextField}
            value={field.value || ""}
            onValueChange={(val) => {
              onChange(val.floatValue ?? null);
            }}
            InputLabelProps={{ shrink: true }}
            format={(val) => {
              if (val === "") return "";
              return `${new Intl.NumberFormat("hu-HU", {
                style: "currency",
                currency: "HUF",
                maximumFractionDigits: 0,
                ...formatOptions,
              }).format(Number(val))}${suffix ?? ""}`;
            }}
          />
        );
      }}
    />
  );
};

export default ControlledNumberFormatBase;
