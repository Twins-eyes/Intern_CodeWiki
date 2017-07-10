import React, { Component } from 'react'
<<<<<<< HEAD
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
=======
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Select } from 'antd'
import '../assets/editor.css'
>>>>>>> 769fdfdd65b03c9759880cbf958bb70abe7ee693

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