import React, { Component } from 'react'
import { Row, Col, Select } from 'antd'


class List extends Component {
    render(){
        return(
            <div className={'tpList'}>
                <span>{this.props.topic}</span>
                <span>{this.props.language}</span>
                <span>{this.props.tags}</span>
                <span>{this.props.author}</span>
            </div>
        )
    }
}

export default List