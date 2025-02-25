import { Controller } from "react-hook-form";
import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
const ControlledSwitch = ({ control, name, fieldProps, }) => {
    return (React.createElement(Controller, { name: name, control: control, render: ({ field }) => (React.createElement(FormControlLabel, Object.assign({ control: React.createElement(Switch, Object.assign({}, field, { checked: field.value })), label: (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.label) || "", sx: {
                width: "max-content",
                userSelect: "none",
                "& .MuiTypography-root": { fontWeight: 600 },
            } }, fieldProps))) }));
};
export default ControlledSwitch;
