import 'azure-devops-ui/Core/override.css'

import * as React from 'react'

import {FieldValues, FieldPath, Control, useController, RegisterOptions} from 'react-hook-form'
import {FormItem} from 'azure-devops-ui/FormItem'
import {Checkbox, ICheckboxProps} from 'azure-devops-ui/Checkbox'
import {FormItemProps} from './FormItemProps'

interface CheckboxProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends ICheckboxProps {
  control: Control<TFieldValues>
  name: TName
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  formItemProps?: FormItemProps
}

export const FormItemCheckbox = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  rules,
  formItemProps,
  ...checkboxProps
}: CheckboxProps<TFieldValues, TName>) => {
  const {
    field: {value, onChange, ...fieldProps},
    fieldState,
  } = useController({control, name, rules})

  return (
    <FormItem {...formItemProps} message={fieldState.error?.message || formItemProps?.message} error={!!fieldState.error}>
      <Checkbox {...checkboxProps} {...fieldProps} onChange={(event, checked) => onChange(checked)} checked={value} />
    </FormItem>
  )
}
