import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";
const ControlledTextfield = ({ name, control, fieldProps, }) => {
    return (React.createElement(Controller, { name: name, control: control, render: ({ field, fieldState }) => {
            var _a, _b;
            return (React.createElement(TextField, Object.assign({}, field, fieldProps, { error: !!fieldState.error, helperText: ((_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message) || ((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message) })));
        } }));
};
export default ControlledTextfield;
