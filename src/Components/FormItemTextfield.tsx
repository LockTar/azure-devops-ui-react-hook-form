import 'azure-devops-ui/Core/override.css'

import * as React from 'react'

import {FieldValues, FieldPath, Control, useController, RegisterOptions} from 'react-hook-form'
import {FormItem} from 'azure-devops-ui/FormItem'
import {TextField, ITextFieldProps} from 'azure-devops-ui/TextField'
import {FormItemProps} from './FormItemProps'

interface TextFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends ITextFieldProps {
  control: Control<TFieldValues>
  name: TName
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  formItemProps?: FormItemProps
}

export const FormItemTextField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  rules,
  formItemProps,
  ...textFieldProps
}: TextFieldProps<TFieldValues, TName>) => {
  const {field, fieldState} = useController({control, name, rules})

  return (
    <FormItem {...formItemProps} message={fieldState.error?.message || formItemProps?.message} error={!!fieldState.error}>
      <TextField {...textFieldProps} {...field} />
    </FormItem>
  )
}
