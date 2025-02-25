import { Control, FieldPath, FieldValues } from "react-hook-form";

export type ControlledInputBase<
  TValues extends FieldValues,
  TName extends FieldPath<TValues>,
  TFieldProps extends {}
> = {
  name: TName;
  control: Control<TValues>;
  fieldProps?: TFieldProps;
};
