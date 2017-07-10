import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { 
    CompositeDecorator, 
    convertToRaw, 
    Editor, 
    EditorState, 
    RichUtils, 
    ContentState 
} from 'draft-js'
import NavBar from '../components/NavBar'
import '../assets/editor.scss'

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