import { TextField, TextFieldProps } from "@mui/material";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";
import {
  getCountryCallingCode,
  parsePhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import React from "react";
export interface Props<
  TValues extends FieldValues,
  TName extends FieldPath<TValues>
> extends ControlledInputBase<TValues, TName, TextFieldProps> {}

const ControlledPhoneInput = <
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
      render={({ field: { onChange, ...field }, fieldState }) => (
        <TextField
          {...field}
          {...fieldProps}
          onChange={(e) => {
            const val = e.target.value;

            const phoneNumber = parsePhoneNumber(val, {
              defaultCountry: "HU",
            });

            const formatNumber = formatPhoneNumberIntl(
              phoneNumber?.number || ""
            );

            if (formatNumber.length === 0) {
              onChange(val);
            } else {
              onChange(
                formatNumber.replace(`+${phoneNumber?.countryCallingCode} `, "")
              );
            }
          }}
          error={!!fieldState.error}
          helperText={
            (!!fieldState.error && fieldState.error.message) ||
            fieldProps?.helperText ||
            undefined
          }
          slotProps={{
            input: {
              startAdornment: (
                <span className="mr-[6px] font-semibold">
                  {`+${getCountryCallingCode("HU")}`}
                </span>
              ),
            },
            htmlInput: {
              inputMode: "tel",
            },
          }}
          /* inputProps={{
            input: {
              startAdornment: code && (
                
              ),
            },
            htmlInput: {
              inputMode: "tel",
            },
          }} */
          label="Telefonszám"
          placeholder="30 123 4567"
        />
      )}
    />
  );
};

export default ControlledPhoneInput;
