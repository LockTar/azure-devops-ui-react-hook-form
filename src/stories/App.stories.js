import React from 'react'
import { storiesOf, ComponentStory, ComponentMeta } from '@storybook/react'

import { LoggingSettingsForm } from './LoggingSettingsForm'

const stories = storiesOf('App Test', module)

stories.add('Logging settings form', () => {
  return <LoggingSettingsForm loadedData={{ model: undefined }} />
})
