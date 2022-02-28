import 'azure-devops-ui/Core/override.css'

import * as React from 'react'

import {FieldValues, FieldPath, Control, useController, RegisterOptions} from 'react-hook-form'
import {FormItem} from 'azure-devops-ui/FormItem'
import {Dropdown, IDropdownProps} from 'azure-devops-ui/Dropdown'
import {ListSelection} from 'azure-devops-ui/List'
import {FormItemProps} from './FormItemProps'

interface DropdownProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends IDropdownProps {
  control: Control<TFieldValues>
  name: TName
  rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
  formItemProps?: FormItemProps
}

export const FormItemDropdown = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  rules,
  items,
  formItemProps,
  ...dropdownProps
}: DropdownProps<TFieldValues, TName>) => {
  const {
    field: {value, onChange, ...fieldProps},
    fieldState,
  } = useController({control, name, rules})
  const listSelection = new ListSelection()

  React.useEffect(() => {
    if (Array.isArray(items)) {
      const index = items.findIndex((item: any) => item.id === value)

      if (index >= 0) {
        // Set the selected value
        listSelection.select(index)
      } else {
        // Clear the selected value otherwise placeholder is not showing on field
        listSelection.clear()
      }
    }
  }, [value, items])

  return (
    <FormItem {...formItemProps} message={fieldState.error?.message || formItemProps?.message} error={!!fieldState.error}>
      <Dropdown
        {...dropdownProps}
        {...fieldProps}
        items={items}
        selection={listSelection}
        onSelect={(event, selectedItem) => onChange(selectedItem.id)}
      />
    </FormItem>
  )
}
