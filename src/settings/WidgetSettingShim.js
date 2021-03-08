import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import { connect } from 'react-redux'

class WidgetSettingsShim extends Component {
  constructor (props) {
    super(props)
    this.defaultStyles = {
      transition: `opacity 300ms`,
      position: 'fixed',
      top: '0',
      left: '0',
      width: '0',
      height: '100%',
      backgroundColor: 'black',
      opacity: '0.3'
    }
    this.transitionStyles = {
      entering: {
        opacity: 0,
        width: 0
      },
      entered: {
        opacity: 0.3,
        width: '100%'
      },
      exiting: {
        opacity: 0.3,
        width: '100%'
      },
      exited: {
        opacity: 0,
        width: '0'
      }
    }
    this.pState = {
      entering: false,
      closing: false
    }
    this.handleShimEntering = this.handleShimEntering.bind(this)
    this.handleShimEntered = this.handleShimEntered.bind(this)
    this.handleShimExited = this.handleShimExited.bind(this)
    this.handleShimExiting = this.handleShimExiting.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    this.transitionStyles.exited = {
      opacity: 0,
      width: '100%'
    }
  }
  handleShimEntering () {
    console.log('entering')
    this.pState = {
      entering: true,
      closing: false
    }
  }
  handleShimEntered () {
    setTimeout(() => {
      console.log('entered')
      this.pState = {
        entering: false,
        closing: false
      }
    }, 300)
  }
  handleShimExiting () {
    this.pState = {
      entering: false,
      closing: true
    }
    console.log('exiting')
  }
  handleShimExited (node) {
    setTimeout(() => {
      console.log('exited')
      this.pState = {
        entering: false,
        closing: false
      }
      node.style.width = 0
    }, 300)
  }
  handleClick () {
    console.log(this.pState)
    if (!this.pState.entering && !this.pState.closing) {
      this.props.dispatch({
        type:'toggle-menu'
      })
    }
  }
  render () {
    return (
      <Transition in={ !this.props.collapse } timeout={ 0 } onEntering={ this.handleShimEntering } onEntered={ this.handleShimEntered } onExiting={ this.handleShimExiting } onExited={ this.handleShimExited }>
        {
          state => <div style={{ ...this.defaultStyles, ...this.transitionStyles[state] }} onClick={ this.handleClick }></div>
        }
      </Transition>
    )
  }
}

WidgetSettingsShim = connect((state) => {
  return {
    collapse: state.collapse
  }
})(WidgetSettingsShim)

export default WidgetSettingsShim