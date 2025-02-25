import { IconButton, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useState } from "react";
//import { Visibility, VisibilityOff, Lock } from "../../Icons";
import React from "react";
const ControlledPasswordInput = ({ name, control, fieldProps, }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field, fieldState }) => {
            var _a;
            return (React.createElement(TextField, Object.assign({}, field, fieldProps, { error: !!fieldState.error, helperText: (_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message, InputProps: {
                    type: showPassword ? "text" : "password",
                    /* startAdornment: <Lock sx={{ mr: "8px" }} />, */
                    endAdornment: (React.createElement(IconButton, { onClick: () => setShowPassword((prev) => !prev) })),
                } })));
        } }));
};
export default ControlledPasswordInput;
