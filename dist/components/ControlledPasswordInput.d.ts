import { FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";
import { TextFieldProps } from "@mui/material";
import React from "react";
export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>> extends ControlledInputBase<TValues, TName, TextFieldProps> {
}
declare const ControlledPasswordInput: <TValues extends FieldValues, TName extends FieldPath<TValues>>({ name, control, fieldProps, }: Props<TValues, TName>) => React.JSX.Element;
export default ControlledPasswordInput;
