import React, { Component } from 'react'
import { faCar, faHospital, faUtensils, faShoppingCart, faFutbol, faGraduationCap, faHome, faBriefcase, faGamepad, faBuilding, faMapSigns } from '@fortawesome/fontawesome-free-solid'
import CloseButton from './closeButton/CloseButton'
import Hambuger from './hambuger/HambugerContainer'
import './heatMap.css'
import TypeButton from './typeButton/TypeButton'
import suggestIcon from '../icons/suggest.png'

class HeatMapPaneContainer extends Component {
  render () {
    return (
      <div style={{
        position: 'absolute'
      }}><HeatMapPane /></div>
    )
  }
}

class HeatMapPane extends Component {
  constructor (props) {
    super(props)
    this.defaultStyles = {
      position: 'relative',
      background: '#ff9834',
      borderRadius: '2px',
      boxSizing: 'border-box',
      width: '392px',
      height: '96px',
      borderBottom: '1px solid transparent',
      padding: '0px 54px 0px 56px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)'
    }
  }
  render () {
    return (
      <div style={{ position: 'absolute', margin: '8px 0 8px 8px'}}>
        <div style={{ ...this.defaultStyles }}>
          <Hambuger />
          <IconContainer />
          <CloseButton />
        </div>
      </div>
    )
  }
}

class IconContainer extends Component {
  render () {
    return (
      <div style={{
        display: 'flex',
        height: '48px',
        flexWrap: 'wrap'
      }}>
        { /*<div style={{
          display: 'flex',
          position: 'relative',
          height: '24px',
          width: '24px',
          margin: '12px 9px',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }} onClick={ this.handleClick }>
          <div style={{
            height: '24px',
            width: '24px',
            opacity: 1,
            filter: 'brightness(300%)',
            background: `url(${ suggestIcon }) 0 -150px`,
            backgroundSize: '24px 649px'
          }}></div>
        </div> */}
        <TypeButton icon={ faUtensils } name="餐饮" type="6"/>
        <TypeButton icon={ faFutbol } name="运动" type="2"/>
        <TypeButton icon={ faCar } name="交通" type="3"/>
        <TypeButton icon={ faGraduationCap} name="学校" type="8"/>
        <TypeButton icon={ faHome } name="住宅" type="0"/>
        <TypeButton icon={ faBriefcase } name="办公" type="1"/>
        <TypeButton icon={ faGamepad } name="娱乐" type="5"/>
        <TypeButton icon={ faHospital } name="医院" type="7"/>
        <TypeButton icon={ faMapSigns } name="旅游" type="4"/>
      </div>
    )
  }
}

export default HeatMapPaneContainer