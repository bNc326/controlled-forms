import { FormControl, FormHelperText, InputLabel, MenuItem, Select, } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
const ControlledSelect = ({ name, control, fieldProps, menuItems, }) => {
    return (React.createElement(Controller, { name: name, control: control, render: ({ field, fieldState }) => {
            var _a, _b;
            return (React.createElement(FormControl, { sx: { flex: 1 }, error: !!fieldState.error },
                (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.label) && React.createElement(InputLabel, null, fieldProps.label),
                React.createElement(Select, Object.assign({}, field, { label: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.label }, fieldProps), menuItems.map((item, index) => (React.createElement(MenuItem, { key: index, value: item.value }, item.display)))),
                React.createElement(FormHelperText, null, (_a = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.helperText) !== null && _a !== void 0 ? _a : (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message)));
        } }));
};
export default ControlledSelect;
