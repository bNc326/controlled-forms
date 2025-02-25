import { IconButton, TextField } from "@mui/material";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";
import { TextFieldProps } from "@mui/material";
import { useState } from "react";
//import { Visibility, VisibilityOff, Lock } from "../../Icons";
import React from "react";

export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>>
  extends ControlledInputBase<TValues, TName, TextFieldProps> {}

const ControlledPasswordInput = <
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
>({
  name,
  control,
  fieldProps,
}: Props<TValues, TName>) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...fieldProps}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          InputProps={{
            type: showPassword ? "text" : "password",
            /* startAdornment: <Lock sx={{ mr: "8px" }} />, */
            endAdornment: (
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
              </IconButton>
            ),
          }}
        />
      )}
    />
  );
};

export default ControlledPasswordInput;
