import React, { Component } from 'react'
import CloseIcon from '../../icons/directions-2x.png'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class CloseButtonContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return(
      <div style={{
        display: 'block',
        position: 'absolute',
        right: 0,
        top: 0,
        opacity: 1
      }}
      >
        <CloseButton />
      </div>
    )
  }
}

class CloseButton extends Component {
  constructor (props) {
    super(props)
    this.closeLocationPane = this.closeLocationPane.bind(this)
  }
  closeLocationPane (e) {
    console.log('click')
    this.props.history.push('/')
  }
  render () {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        width: '54px'
      }}>
        <div style={{
          backgroundImage: `url(${ CloseIcon })`,
          filter: 'brightness(0.7)',
          backgroundSize: '96px 216px',
          width: '24px',
          height: '24px',
          cursor: 'pointer'
        }} onClick={ this.closeLocationPane }></div>
      </div>
    )
  }
}

CloseButton = withRouter(connect(
  void 0,
  void 0
)(CloseButton))

export default CloseButtonContainer