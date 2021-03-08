import React, { Component } from 'react'
import Settings from './settings/Settings'
import { Map } from './map/Map'
import IndexDetailPane from './indexDetailPane/IndexDetailPane'
//import Search from './search/Search'
import HeatMapPane from './heatMapPane/HeatMapPane'
import LocationDetailPane from './locationDetailPane/LocationDetailPane'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

import store from './store'
import SearchButtonContainer from './search/searchButton/SearchButton';

import history from './history'
import DistrictIndicator from './indexDetailPane/DistrictIndicator'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <Router history={ history }>
        <div id="content-container" style={{ position: 'absolute', width: '100%', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'white', overflow: 'none' }}>
          <Map />
          <IndexDetailPane/>
          <Route path='/indexdetail/:location' component={ DistrictIndicator }/>
          {/*
          <Route path='/locationdetail/:location' component={ LocationDetailPane }/>
          <Switch>
            <Route path='/heatpane' component={ HeatMapPane } />
            <Route path='/' component={ Search } />
          </Switch>
          <Settings />*/}

        </div>
      </Router>
    );
  }
}

App = connect((state) => {
  return {
    showHeatmapPane: state.showHeatmapPane
  }
})(App)

class Root extends Component {
  render () {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    )
  }
}

export default Root;
