import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";
const ControlledTextfield = ({ name, control, fieldProps, }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field, fieldState }) => {
            var _a, _b;
            const props = Object.assign(Object.assign(Object.assign({}, field), fieldProps), { error: !!fieldState.error, helperText: ((_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message) || ((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message), slotProps: {
                    inputLabel: {
                        shrink: !!field.value || isFocused,
                    },
                } });
            return React.createElement(TextField, Object.assign({}, props));
        } }));
};
export default ControlledTextfield;
function useState(arg0) {
    throw new Error("Function not implemented.");
}
