import React, { Component } from 'react'
import { Select } from 'antd'

class Test extends Component {
    render () {
        return (
            <Select
                style={{ width: 200 }}
                placeholder="Select a person"
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        )
    }
}

export default Test