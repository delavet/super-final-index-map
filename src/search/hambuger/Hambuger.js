import React, { Component } from 'react'

import quantomMenu from '../../icons/quantum_menu-v2-2x.png'

class Hambuger extends Component {
  render () {
    return (
      <div style={{ padding: '12px 16px' }}>
        <div style={{
            content: '',
            display: 'block',
            backgroundImage: `url(${quantomMenu})`,
            backgroundSize: '48px 24px',
            backgroundPosition: '0 0',
            height: '24px',
            width: '24px',
            opacity: this.props.opacity,
        }}>
        </div>
      </div>
    )
  }
}

export default Hambuger