import { TextFieldProps } from "@mui/material";
import { FieldPath, FieldValues } from "react-hook-form";
import { NumberFormatBaseProps } from "react-number-format";
import { ControlledInputBase } from "../models/index";
import React from "react";
export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>> extends ControlledInputBase<TValues, TName, NumberFormatBaseProps<TextFieldProps>> {
    formatOptions?: Intl.NumberFormatOptions;
    suffix?: string;
}
declare const ControlledNumberFormatBase: <TValues extends FieldValues, TName extends FieldPath<TValues>>({ control, name, fieldProps, formatOptions, suffix, }: Props<TValues, TName>) => React.JSX.Element;
export default ControlledNumberFormatBase;
