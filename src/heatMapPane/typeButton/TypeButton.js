import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './tooltip.css'

class TypeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    if (this.props.selectedType !== null) {
      this.props.removeLayer('weibo-heat')
      this.props.removeLayer('weibo-point')
      this.props.removeSource('weibos')
    }
    this.props.addHeatmapLayer(this.props.type)
    // this.props.history.push(`/heatpane/${this.props.type}`)
    // this.props.removeHeatLayer(this.props.heatLayerId)
  }
  render () {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          position: 'relative',
          height: '24px',
          width: '24px',
          margin: '12px 9px',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }} className={ (this.props.selectedType === this.props.type ? 'selected' : '') + ' typeButton' } onClick={ this.handleClick }>
          <FontAwesomeIcon icon={ this.props.icon } color="white" transform="grow-2" style={{ zIndex: '1'}}/>
        </div>
        
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
        }}>{ this.props.name }</span>
      </div>
    )
  }
}

TypeButton = withRouter(connect(state => {
  return {
    heatLayerId: state.map.heatLayerId,
    selectedType: state.map.type
  }
}, (dispatch, ownProps) => {
  return {
    removeLayer: (id) => {
      console.log(ownProps)
      dispatch({
        type: 'REMOVE_MAP_LAYER',
        payload: {
          id
        }
      })
    },
    addHeatmapLayer: (type) => {
      dispatch({
        type: 'ADD_HEATMAP_LAYER',
        payload: {
          type
        }
      })
    },
    removeSource: id => {
      dispatch({
        type: 'REMOVE_MAP_SOURCE',
        payload: {
          id
        }
      })
    }
  }
})(TypeButton))

export default TypeButton