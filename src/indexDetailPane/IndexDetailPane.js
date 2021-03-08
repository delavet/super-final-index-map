import React, {Component} from 'react'
import {Card} from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import ReactEcharts from 'echarts-for-react';
import { HorizontalBar } from 'react-chartjs-2'

class IndexDetailPane extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.getOption = this.getOption.bind(this)
        this.state.option = this.getOption(0,0,0,0)

    }

    getOption(p, m, a, q, af) {
        return {
            datasets: [{
              label: '地区消费健康指数',
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [
                p,
                m,
                a,
                q,
                af
            ]
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            /**
             * 0.32,
                0.23,
                0.05
             */
            labels: [
                '地区餐饮店家知名度指数',
                '地区餐饮决策便利度指数',
                '地区餐饮访问便利度指数',
                '地区餐饮服务质量指数',
                '地区餐饮售后服务质量指数'
          ]
          }
          /*
        return {
            title: {
                text: '地区消费健康指数'
            },
            series:[{
                name: '餐饮数字消费便利指数',
                type: 'bar',
                data: [
                    {value: this.props.popular_index, name: '地区餐饮店家知名度'},
                    {value: this.props.menu_index, name: '地区餐饮决策便利度'},
                    {value: this.props.access_index, name: '地区餐饮访问便利度'}
                ]
            }]
        }*/
    }

    componentWillMount() {
        console.log("componentWillMount")
        this.setState({
            option: this.getOption(this.props.popular_index, this.props.menu_index, this.props.access_index, this.props.quality_index, this.props.after_sale_index)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            option: this.getOption(nextProps.popular_index, nextProps.menu_index, nextProps.access_index, nextProps.quality_index, this.props.after_sale_index)
        })
    }

    render () {
        return (
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: 'auto',
                height: '508px',
                margin: 30,
                overflow: 'auto',
              }}>
                <Card
                    title = {this.props.title}
                    style = {
                        {
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                            borderRadius: '6px'
                        }
                    }
                >
                <p>latlng:</p>
                <p>{this.props.subtitle}</p>
                <HorizontalBar data={ this.state.option } width={ 300 } height={ 300 } options={{
                responsive: true,
                scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 0.1,
                                max: 1
                            }
                        }]
                },
                title: {
                    display: true,
                    text: '数字消费健康指数'
                }
            }} />
                </Card>
            </div>
        )
    }
}

IndexDetailPane = connect(state => {
    return {
      title: state.regionName,
      subtitle: state.latLng,
      popular_index: state.index.popularity,
      menu_index: state.index.menu,
      access_index: state.index.access,
      quality_index: state.index.quality,
      
      after_sale_index: state.index.after_sale
    }
})(IndexDetailPane)

export default IndexDetailPane