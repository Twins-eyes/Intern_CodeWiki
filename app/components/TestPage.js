import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Select } from 'antd'
import '../assets/editor.css'

class TestPage extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            </div>
        )
    }

}

export default TestPage