import {IReadonlyObservableValue} from 'azure-devops-ui/Core/Observable'

// Is a custom implementation of IFormItemProps from azure-devops-ui
export interface FormItemProps {
  /**
   * Optional aria label that can be supplied if is should be something different than label.
   */
  ariaLabel?: string
  /**
   * Optional className to include on the element that wraps the item's
   */
  className?: string
  /**
   * A label for the component. Will be wrapped in a <label /> element.
   */
  label?: React.ReactNode
  /**
   * A helper message to include with the component. Will be wrapped in a <span /> element.
   */
  message?: IReadonlyObservableValue<React.ReactNode> | React.ReactNode
}
