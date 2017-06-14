import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BlockEditor from './BlockEditor'
import '../assets/editor.css'

class AddBlogPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <BlockEditor />
                </ReactCSSTransitionGroup>
            </div>
        )
    }

}

export default AddBlogPage