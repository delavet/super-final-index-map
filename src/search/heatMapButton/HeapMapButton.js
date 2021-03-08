import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './tooltip.css'

class HeapMapButtonContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        opacity: '0.8'
      }
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.openHeatPane = this.openHeatPane.bind(this)
  }
  handleMouseOver (e) {
    if (this.state.style.opacity === '0.8') {
      this.setState({
        style: {
          opacity: '1'
        }
      })
    }
  }
  handleMouseOut (e) {
    this.setState({
      style: {
        opacity: '0.8'
      }
    })
  }
  openHeatPane (e) {
    this.props.history.push('/heatpane')
  }
  render () {
    return(
      <div style={{
        display: 'block',
        position: 'absolute',
        right: 0,
        top: 0,
        opacity: this.state.style.opacity
      }}
        onMouseOut={ this.handleMouseOut }
        onMouseOver={ this.handleMouseOver }
        onClick={ this.openHeatPane }
      >
        <HeatMapButton/>
        <span className="tooltip" style={{
          position: 'absolute',
          left: '50%',
          top: '95%',
          transform: 'translateX(-50%)',
          padding: '4px 8px',
          fontSize: '11px',
          lineHeight: '19px',
          background: '#494949',
          color: '#fff',
          borderRadius: '2px',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          whiteSpace: 'nowrap',
          zIndex: '2'
        }}>分类热图</span>
      </div>
    )
  }
}

class HeatMapButton extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        width: '54px',
        cursor: 'pointer'
      }} className="typeButton">
        <FontAwesomeIcon icon={ faFire } color='#ef6c00' transform="grow-2"/>
      </div>
    )
  }
}

HeapMapButtonContainer = withRouter(connect(
  undefined,
  (dispatch) => {
    return {
      openHeatPane: () => {
        dispatch({
          type: 'open-heatmap-pane'
        })
      }
    }
  }
)(HeapMapButtonContainer))

export default HeapMapButtonContainer