import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hambuger from './Hambuger'

class HambugerContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return <div style={{ position: 'absolute', left: '0', top: '0', cursor: 'pointer' }} onClick={ this.props.handleClick }><Hambuger opacity='1'/></div>
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