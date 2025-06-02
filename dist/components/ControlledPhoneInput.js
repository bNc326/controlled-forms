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
import { getCountryCallingCode, parsePhoneNumber, formatPhoneNumberIntl, } from "react-phone-number-input";
import React from "react";
const ControlledPhoneInput = ({ name, control, fieldProps, }) => {
    return (React.createElement(Controller, { name: name, control: control, render: (_a) => {
            var _b = _a.field, { onChange } = _b, field = __rest(_b, ["onChange"]), { fieldState } = _a;
            return (React.createElement(TextField, Object.assign({}, field, fieldProps, { onChange: (e) => {
                    const val = e.target.value;
                    const phoneNumber = parsePhoneNumber(val, {
                        defaultCountry: "HU",
                    });
                    const formatNumber = formatPhoneNumberIntl((phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.number) || "");
                    if (formatNumber.length === 0) {
                        onChange(val);
                    }
                    else {
                        onChange(formatNumber.replace(`+${phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.countryCallingCode} `, ""));
                    }
                }, error: !!fieldState.error, helperText: (!!fieldState.error && fieldState.error.message) ||
                    (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.helperText) ||
                    undefined, slotProps: {
                    input: {
                        startAdornment: (React.createElement("span", { className: "mr-[6px] font-semibold" }, `+${getCountryCallingCode("HU")}`)),
                    },
                    htmlInput: {
                        inputMode: "tel",
                    },
                }, 
                /* inputProps={{
                  input: {
                    startAdornment: code && (
                      
                    ),
                  },
                  htmlInput: {
                    inputMode: "tel",
                  },
                }} */
                label: "Telefonsz\u00E1m", placeholder: "30 123 4567" })));
        } }));
};
export default ControlledPhoneInput;
