import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import { connect } from 'react-redux'
import cityIllustration from '../icons/city.png'
import { withRouter } from 'react-router'
import { HorizontalBar } from 'react-chartjs-2'
import axios from 'axios'


class LocationDetailPane extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '408px',
        height: '100%',
        background: 'white',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        overflow: 'auto'
      }}>
        <ListBoxRoot />
      </div>
    )
  }
}

class ListBoxRoot extends Component {
  constructor (props) {
    super(props)
    this.typeLabels = [
      '住宅',
      '办公',
      '运动',
      '交通',
      '旅游',
      '娱乐',
      '餐饮',
      '医院',
      '学校'
  ]
  }
  render () {
    return (
      <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <HeaderDescription />
        { this.typeLabels.indexOf(this.props.match.params.location) !== -1 ? <PlaceSuggestion /> :
          <Statistics name={ Math.random() }/>
        }
      </div>
    )
  }
}

class PlaceSuggestion extends Component {
  render () {
    return (
      <div>
        建议的地点：XXX
      </div>
    )
  }
}

class Statistics extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.buildData = this.buildData.bind(this)
    this.state.data = this.buildData()
    this.state.similarPlaces = []
  }
  buildData (data = []) {
    return {
      datasets: [{
        label: '地理语义数据',
        data: data
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        '住宅',
        '办公',
        '运动',
        '交通',
        '旅游',
        '娱乐',
        '餐饮',
        '医院',
        '学校'
    ]
    }
  }
  componentWillMount () {
    axios
      .get('/data/placeInfo.json')
      .then(res => {
        let data = res.data[this.props.match.params.location].vec
        this.setState({
          data: this.buildData(data)
        })
        function calcDis (oriVec, vec) {
          let ret = 0
          for (let i = 0; i < oriVec.length; ++i) {
            ret += (oriVec[i] - vec[i]) * (oriVec[i] - vec[i])
          }
          return Math.sqrt(ret)
        }
        let placeDis = []
        for (let place of Object.keys(res.data)) {
          if (place == 'null' || place == this.props.match.params.location) continue
          placeDis.push([place, calcDis(data, res.data[place].vec)])
        }
        placeDis.sort((v1, v2) => v1[1] - v2[1])
        this.setState({
          similarPlaces: placeDis
        })
        // console.log(JSON.stringify(placeDis))
      })
  }
  componentWillReceiveProps () {
    axios
      .get('/data/placeInfo.json')
      .then(res => {
        let data = res.data[this.props.match.params.location].vec
        this.setState({
          data: this.buildData(data)
        })
        function calcDis (oriVec, vec) {
          let ret = 0
          for (let i = 0; i < oriVec.length; ++i) {
            ret += (oriVec[i] - vec[i]) * (oriVec[i] - vec[i])
          }
          return Math.sqrt(ret)
        }
        let placeDis = []
        for (let place of Object.keys(res.data)) {
          if (place == 'null' || place == this.props.match.params.location || res.data[place].validWeiboCount < 2000) continue
          placeDis.push([place, calcDis(data, res.data[place].vec)])
        }
        placeDis.sort((v1, v2) => v1[1] - v2[1])
        this.setState({
          similarPlaces: placeDis
        })
        // console.log(JSON.stringify(placeDis))
      })
  }
  render () {
    return (
      <div>
        <div style={{ margin: "0 14px" }}>
          <HorizontalBar data={ this.state.data } width={ 300 } height={ 300 } options={{ maintainAspectRatio: false }}/>
        </div>
        <div style={{ display: 'none' }}>{ this.props.name }</div>
        <div style={{ margin: "0 14px" }}>
          为你推荐的相似地点:{
            <ul>
              {
                this.state.similarPlaces.slice(0, 5).map(v => <li>{v[0]}</li>)
              }
            </ul>
          }
        </div>
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <div style={{
          display: 'block',
          width: '408px',
          paddingTop: '30px',
          height: '170px',
          background: '#498fcb'
        }}>
        <div style={{
          width: '408px',
          height: '170px',
          background: `url(${ cityIllustration })`,
          backgroundSize: '408px 300px'
        }}></div>
        </div>
      </div>
    )
  }
}

class HeaderDescription extends Component {
  render () {
    return (
      <div style={{
        padding: '16px 24px 16px',
        background: 'rgb(66, 133, 244)'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '18px',
          padding: 0,
          margin: 0,
          fontWeight: 'normal'
        }}>{ this.props.match.params.location }</h1>
      </div>
    )
  }
}

ListBoxRoot = withRouter(ListBoxRoot)
HeaderDescription = withRouter(HeaderDescription)
Statistics = withRouter(Statistics)

export default LocationDetailPane