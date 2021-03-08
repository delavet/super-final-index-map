import React, { Component } from 'react'
import SearchIcon from '../../icons/quantum_search_button-2x.png'

class SearchButtonContainer extends Component {

  render () {
    return <div style={{
      position: 'absolute',
      right: '54px',
      top: 0
    }}><SearchButton /></div>
  }
}

class SearchButton extends Component {
  render () {
    return (
      <div id="search-button" style={{
        padding: '12px 15px',
        height: '24px'
      }}>
        <div style={{
          display: 'block',
          width: '24px',
          height: '24px',
          background: `url(${SearchIcon})`,
          backgroundSize: '72px 24px'
        }}></div>
      </div>
    )
  }
}

export default SearchButtonContainer