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
import React, { useState } from "react";
const ControlledTextfield = ({ name, control, fieldProps, }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (React.createElement(Controller, { name: name, control: control, render: (_a) => {
            var _b = _a.field, { onBlur } = _b, field = __rest(_b, ["onBlur"]), { fieldState } = _a;
            const props = Object.assign(Object.assign(Object.assign({}, field), fieldProps), { ref: field.ref, error: !!fieldState.error, helperText: (!!fieldState.error && fieldState.error.message) ||
                    (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.helperText) ||
                    undefined, slotProps: Object.assign(Object.assign({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.slotProps), { inputLabel: {
                        shrink: !!field.value || isFocused,
                    } }), onFocus() {
                    setIsFocused(true);
                },
                onBlur() {
                    setIsFocused(false);
                    onBlur();
                } });
            return React.createElement(TextField, Object.assign({}, props));
        } }));
};
export default ControlledTextfield;
