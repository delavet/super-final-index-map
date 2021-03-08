import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'

import HambugerContainer from './hambuger/HambugerContainer'
import SearchButton from './searchButton/SearchButton'
import HeatMapButton from './heatMapButton/HeapMapButton'
import CloseLocationPaneButton from './closeLocationPaneButton/CloseLocationPaneButton'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.defaultStyles = {
      position: 'relative',
      background: '#fff',
      borderRadius: '2px',
      boxSizing: 'border-box',
      width: '392px',
      height: '48px',
      borderBottom: '1px solid transparent',
      padding: '12px 104px 11px 64px'
    }
  }
  render () {
    return <div style={{ ...this.defaultStyles }}><SearchInput handleInput={ this.props.handleInput }/></div>
  }
}

class SearchInput extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{ position: 'relative' }}>
        <input style={{
          border: 'none',
          width: '100%',
          position: 'absolute',
          left: 0,
          color: 'inherit',
          fontSize: '15px',
          margin: 0,
          padding: 0,
          outline: 0,
          height: '24px',
          lineHeight: '24px',
          verticalAlign: 'top',
          font: 'inherit',
          background: 'transparent',
          listStyle: 'none',
          overflow: 'visible',
          borderRadius: 0,
          opacity: this.props.searchInput ? 0 : 1
        }} placeholder="搜索地点或主题" disabled/>
        <input style={{
          border: 'none',
          width: '100%',
          position: 'absolute',
          left: 0,
          color: 'inherit',
          fontSize: '15px',
          margin: 0,
          padding: 0,
          outline: 0,
          height: '24px',
          lineHeight: '24px',
          verticalAlign: 'top',
          font: 'inherit',
          background: 'transparent',
          listStyle: 'none',
          overflow: 'visible',
          borderRadius: 0
        }} value={ this.props.searchInput } onChange={ this.props.handleInput }/>
      </div>
    )
  }
}

SearchInput = connect(
  (state) => {
    return {
      searchInput: state.searchInput
    }
  },
  dispatch => {
    return {
      handleInput: e => {
        dispatch({
          type: 'input-search',
          payload: e.target.value
        })
        dispatch({
          type: 'search-undone'
        })
      }
    }
  }
)(SearchInput)

class SearchBox extends Component {
  render () {
    return (
      <div>
        <SearchBar handleInput={ this.props.handleInput }/>
        <HambugerContainer />
        <SearchButton />
        <Switch>
          <Route path='/locationdetail/:location' component={ CloseLocationPaneButton }/>
          <Route path='/' component={ HeatMapButton }/>
        </Switch>
      </div>
    )
  }
}

export default SearchBox