var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { NumberFormatBase } from "react-number-format";
import React from "react";
const ControlledNumberFormatBase = ({ control, name, fieldProps, formatOptions, suffix, }) => {
    return (React.createElement(Controller, { name: name, control: control, render: (_a) => {
            var _b;
            var _c = _a.field, { onChange } = _c, field = __rest(_c, ["onChange"]), { fieldState } = _a;
            return (React.createElement(NumberFormatBase, Object.assign({ variant: "outlined" }, field, fieldProps, { error: !!fieldState.error, helperText: ((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message) || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.helperText), customInput: TextField, value: field.value || "", onValueChange: (val) => {
                    var _a;
                    onChange((_a = val.floatValue) !== null && _a !== void 0 ? _a : null);
                }, InputLabelProps: { shrink: true }, format: (val) => {
                    if (val === "")
                        return "";
                    return `${new Intl.NumberFormat("hu-HU", Object.assign({ style: "currency", currency: "HUF", maximumFractionDigits: 0 }, formatOptions)).format(Number(val))}${suffix !== null && suffix !== void 0 ? suffix : ""}`;
                } })));
        } }));
};
export default ControlledNumberFormatBase;
