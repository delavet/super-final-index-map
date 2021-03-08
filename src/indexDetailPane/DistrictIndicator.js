import React, {Component} from 'react'
import {Card} from 'antd';
import { withRouter } from 'react-router'
import 'antd/dist/antd.css';


class DistrictIndicator extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (<Card
            style = {
                {
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
                    borderRadius: '6px',
                    width: 'auto',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    margin: 30
                }
            }>
            <b>{this.props.match.params.location}</b>
        </Card>)
    }
}

DistrictIndicator = withRouter(DistrictIndicator)

export default DistrictIndicator