import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hambuger from './Hambuger'

class HambugerContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        opacity: '0.62'
      }
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }
  handleMouseOver (e) {
    if (this.state.style.opacity === '0.62') {
      this.setState({
        style: {
          opacity: '0.80'
        }
      })
    }
  }
  handleMouseOut (e) {
    this.setState({
      style: {
        opacity: '0.62'
      }
    })
  }
  render () {
    return <div onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut } style={{ position: 'absolute', left: '0', top: '0', cursor: 'pointer' }} onClick={ this.props.handleClick }><Hambuger opacity={ this.state.style.opacity }/></div>
  }
}

HambugerContainer = connect(
  undefined,
  (dispatch, ownProps) => {
    return {
      handleClick: () => {
        dispatch({
          type: 'toggle-menu'
        })
      }
    }
  }
)(HambugerContainer)

export default HambugerContainer