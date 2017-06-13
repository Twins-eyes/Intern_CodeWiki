import React, { Component } from 'react'
import { Row, Col, Select } from 'antd'
import NavBar from '../components/NavBar'

class TopicList extends Component {
    render(){
        return(
            <div className={'page'}>
                <NavBar location={this.props.location} />
                <input 
                    type='text'
                    className={'formInput'}
                    value={this.props.value}
                    style={
                        {
                            width:'300px',
                            height:'32px',
                            float:'right'
                        }
                    }
                    placeholder={'search'}
                    autoFocus
                />
                <Select defaultValue='Select Language'>
                    <option value=''></option>
                </Select>
            </div>
        )
    }
}

export default TopicList