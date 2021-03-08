import React, { Component } from 'react'
import WidgetSettingsPane from './WidgetSettingsPane'
import WidgetSettingsShim from './WidgetSettingShim'

class Settings extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <WidgetSettingsShim/>
        <WidgetSettingsPane/>
      </div>
    )
  }
}

export default Settings
