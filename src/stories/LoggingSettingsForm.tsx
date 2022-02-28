//import 'azure-devops-ui/Core/override.css'

import * as React from 'react'

import { Button } from 'azure-devops-ui/Button'
import { TextFieldWidth } from 'azure-devops-ui/TextField'
import {
  ILoggingSettingsFormProps,
  ILoggingSettingsModel,
  LogLevel,
} from './LoggingSettingsModels'
import { FormItemTextField } from '../Components/FormItemTextfield'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { FormItemCheckbox } from '../Components/FormItemCheckbox'
import { FormItemDropdown } from '../Components/FormItemDropdown'

const logLevelOptions = [
  { id: LogLevel.Verbose, text: LogLevel.Verbose },
  { id: LogLevel.Info, text: LogLevel.Info },
  { id: LogLevel.Warning, text: LogLevel.Warning },
  { id: LogLevel.Error, text: LogLevel.Error },
]

export const LoggingSettingsForm: React.FC<ILoggingSettingsFormProps> = ({
  loadedData,
}): JSX.Element | null => {
  const defaultValues: DefaultValues<ILoggingSettingsModel> = {
    notes: loadedData?.model?.notes ?? '',
    logLevel: loadedData?.model?.logLevel,
    loggingEnabled: loadedData?.model?.loggingEnabled ?? false,
  }

  const { control, handleSubmit, formState } = useForm<ILoggingSettingsModel>({
    defaultValues,
  })

  const onSaveClick: SubmitHandler<ILoggingSettingsModel> = async (data) => {
    const formData = data

    alert(formData)
  }

  if (loadedData == null) {
    return null
  }

  return (
    <form>
      <FormItemCheckbox
        control={control}
        name="loggingEnabled"
        label="Enable logging"
        checked={false}
        formItemProps={{
          message: 'Enable or disable console logging for debugging',
        }}
      />

      <FormItemDropdown
        control={control}
        name="logLevel"
        items={logLevelOptions}
        placeholder="Select log level"
        formItemProps={{
          label: 'Log level',
          message: 'The minimal level of messages logged',
          className: 'margin-top-16',
        }}
        rules={{
          required: 'Field is mandatory',
        }}
      />

      <FormItemTextField
        control={control}
        name="notes"
        formItemProps={{
          label: 'Notes',
          message: 'Optional notes',
          className: 'margin-top-16',
        }}
        rules={{
          minLength: {
            value: 10,
            message: 'Minimum length is 10',
          },
        }}
        multiline
        rows={10}
        width={TextFieldWidth.standard}
      />

      <div className="margin-top-16">
        <Button
          text="Save"
          primary
          onClick={() => handleSubmit(onSaveClick)()}
          iconProps={{ iconName: 'Save' }}
          disabled={!formState.isDirty}
        />
      </div>
    </form>
  )
}
