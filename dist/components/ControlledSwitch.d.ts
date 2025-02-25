import { ControlledInputBase } from "../models/index";
import { FieldPath, FieldValues } from "react-hook-form";
import { FormControlLabelProps } from "@mui/material";
import React from "react";
export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>> extends ControlledInputBase<TValues, TName, Omit<FormControlLabelProps, "control"> & {
    control?: FormControlLabelProps["control"];
}> {
}
declare const ControlledSwitch: <TValues extends FieldValues, TName extends FieldPath<TValues>>({ control, name, fieldProps, }: Props<TValues, TName>) => React.JSX.Element;
export default ControlledSwitch;
