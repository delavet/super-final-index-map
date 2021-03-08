import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import { connect } from 'react-redux'

class SettingItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'rgb(119, 119, 119)'
    }
    this.handleHover = this.handleHover.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }
  handleHover () {
    this.setState({
      color: '#4285F4'
    })
  }
  handleMouseOut () {
    this.setState({
      color: 'rgb(119, 119, 119)'
    })
  }
  render () {
    /*onMouseEnter={ this.handleHover } onMouseLeave={ this.handleMouseOut }*/
    return (
    <div style={{ padding: '8px 0', fontSize: '13px', color: this.state.color, cursor: 'pointer' }}>
      使用帮助<br/>
      你可以在搜索栏搜索以下地点之一，获取地点位置语义信息: <br/>
      CBD, 万寿寺, 万寿路, 万柳, 万泉河, 三元桥, 三里屯, 三里河, 上地, 世界公园, 世纪城, 东单, 东四, 东坝, 东大桥, 东直门, 东铁匠营, 东高地, 中关村, 丰台体育馆, 丽泽桥, 二里庄, 五棵松, 五道口, 亚运村, 交通大学, 交道口, 亦庄, 京广桥, 亮马桥, 亮马桥燕莎, 人民大学, 什刹海, 体育馆路, 健翔桥, 光明楼, 八大处, 八宝山, 八角, 八里庄, 公主坟, 六里桥, 六铺炕, 军博, 刘家窑, 前门, 动物园, 劲松, 北下关, 北京大学, 北京站, 北大地, 北太平庄, 北新桥, 北沙滩, 北洼路, 北航, 北苑, 十八里店, 十里堡, 南磨房, 南礼士路, 南苑, 南菜园, 卢沟桥, 双井, 双安, 双榆树, 古城, 右安门, 同兴园, 后海, 呼家楼, 和平街, 和平里, 和平门, 嘉园, 四季青, 四惠, 团结湖, 国展, 国贸, 地安门, 垡头, 复兴门, 大屯, 大山子, 大望路, 大栅栏, 大红门, 大观园, 大钟寺, 天坛, 天宁寺, 天安门, 天桥, 太阳宫, 奥运村, 姚家园, 学院路, 安华, 安定门, 安慧桥, 安贞, 宋家庄, 官园, 定慧寺, 定福庄, 宣武门, 对外经贸, 将台路, 小关, 小红门, 小营, 小西天, 展览路, 岳各庄, 崇文门, 工体, 左家庄, 广内大街, 广外大街, 广安门, 广渠门, 建国门, 建外大街, 开阳里, 德胜门, 惠新里, 成寿寺, 新世界, 新发地, 新街口, 方庄, 旧宫, 景山, 月坛, 望京, 朝外, 朝阳公园, 朝阳门, 木樨园, 木樨地, 来广营, 杨庄, 柳芳, 水碓子, 永乐, 永定路, 永定门, 沙子口, 沙滩, 洋桥, 海淀八里庄, 海运仓, 清华大学, 清河, 潘家园, 灯市口, 牛街, 牡丹园, 玉泉营, 王府井, 珠市口, 甘家口, 甘露园, 甜水园, 田村, 白广路, 白石桥, 白纸坊, 百子湾, 皂君庙, 看丹桥, 知春路, 石佛营, 磁器口, 科技园区, 积水潭, 管庄, 紫竹桥, 红庙, 红莲, 美术馆, 老山, 航天桥, 芍药居, 花乡, 花园桥, 花家地, 花市, 苏州桥, 苏州街, 苹果园, 草桥, 菜市口, 菜户营, 蒲黄榆, 蓟门桥, 虎坊桥, 衙门口, 西便门, 西单, 西四, 西坝河, 西客站, 西山, 西直门, 西红门, 西罗园, 西苑, 角门, 豆各庄, 赵公口, 车公庄, 远大路, 酒仙桥, 金融街, 长椿街, 阜成门, 陶然亭, 雍和宫, 青塔, 颐和园, 香山, 马家堡, 马甸, 马连道, 高碑店, 魏公村, 鲁谷, 麦子店, 鼓楼, 龙潭湖<br/><br/>
      你可以在搜索栏搜索下列主题之一，获取相关的地点:<br/>
      餐饮, 运动, 购物, 学校, 住宅, 办公, 娱乐, 酒店, 旅游<br/><br/>
      你可以点击热图按钮，查看不同主题在城市内的空间分布。<br/>
    </div>
    )
  }
}

class SettingList extends Component {
  render () {
    return (
      <div style={{ padding: '6px 22px'}}>
        <SettingItem />
      </div>
    )
  }
}

class WidgetSettingsPane extends Component {
  constructor (props) {
    super(props)
    this.defaultStyles = {
      transition: `transform 300ms`,
      position: 'absolute',
      width: '320px',
      backgroundColor: 'white',
      height: '100%',
      left: '-340px',
      boxShadow: '0 -1px 24px rgba(0,0,0,0.4)',
      zIndex: '3',
      overflowY: 'auto'
    }
    this.transitionStyles = {
      entering: {
        transform: 'translateX(340px)'
      },
      exited: {
        transform: 'translateX(340px)'
      }
    }
  }
  render () {
    return (
      <Transition in={ this.props.collapse } timeout={ 0 }>
        {
          (state) => {
            return <div style={{ ...this.defaultStyles ,...this.transitionStyles[state] }} ><SettingList /></div>
          }
        }
      </Transition>
    )
  }
}

WidgetSettingsPane = connect(
  state => {
    return {
      collapse: state.collapse
    }
  }
)(WidgetSettingsPane)

export default  WidgetSettingsPane