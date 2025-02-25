import { ControlledInputBase } from "../models/index";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { FormControlLabel, FormControlLabelProps, Switch } from "@mui/material";
import React from "react";

export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>>
  extends ControlledInputBase<
    TValues,
    TName,
    Omit<FormControlLabelProps, "control"> & {
      control?: FormControlLabelProps["control"];
    }
  > {}

const ControlledSwitch = <
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
>({
  control,
  name,
  fieldProps,
}: Props<TValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch {...field} checked={field.value} />}
          label={fieldProps?.label || ""}
          sx={{
            width: "max-content",
            userSelect: "none",
            "& .MuiTypography-root": { fontWeight: 600 },
          }}
          {...fieldProps}
        />
      )}
    />
  );
};

export default ControlledSwitch;
