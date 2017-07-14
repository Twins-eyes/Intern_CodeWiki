import React from 'react'
import { Link } from 'react-router-dom'
import { Tag } from 'antd'

const TagList = props => (
    <Link to={'/tag'}>
        <Tag color='#FBBB69' style={{marginRight: 5, marginTop: 5}}>
            #{props.tag}
        </Tag>
    </Link>
)

export {
    TagList
}