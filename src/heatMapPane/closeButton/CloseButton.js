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
    this.closeHeatmapPane = this.closeHeatmapPane.bind(this)
  }
  closeHeatmapPane (e) {
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
          backgroundSize: '96px 216px',
          width: '24px',
          height: '24px',
          cursor: 'pointer'
        }} onClick={ this.closeHeatmapPane }></div>
      </div>
    )
  }
}

CloseButton = withRouter(connect(
  void 0,
  (dispatch) => {
    return {
      closeHeatmapPane: () => {
        dispatch({
          type: 'close-heatmap-pane'
        })
      }
    }
  }
)(CloseButton))

export default CloseButtonContainer