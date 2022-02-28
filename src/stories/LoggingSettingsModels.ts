export enum LogLevel {
  Verbose = 'Verbose',
  Info = 'Info',
  Warning = 'Warning',
  Error = 'Error',
}

export interface ILoggingSettingsModel {
  loggingEnabled: boolean
  logLevel: LogLevel
  notes: string
}

export interface ILoggingSettingsFormModel {
  model?: ILoggingSettingsModel
}

export interface ILoggingSettingsFormProps {
  loadedData: ILoggingSettingsFormModel | null
}
