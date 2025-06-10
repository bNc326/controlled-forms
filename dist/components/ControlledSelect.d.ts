import { SelectProps } from "@mui/material";
import React from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { ControlledInputBase } from "../models/index";
export interface Props<TValues extends FieldValues, TName extends FieldPath<TValues>> extends ControlledInputBase<TValues, TName, SelectProps & {
    helperText?: React.ReactNode;
}> {
    menuItems: {
        value: any;
        display: React.ReactNode;
    }[];
}
declare const ControlledSelect: <TValues extends FieldValues, TName extends FieldPath<TValues>>({ name, control, fieldProps, menuItems, }: Props<TValues, TName>) => React.JSX.Element;
export default ControlledSelect;
