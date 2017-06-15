import React, { Component } from 'react'
import { Row, Col, Select } from 'antd'
import NavBar from '../components/NavBar'
import List from '../components/List'

class TopicList extends Component {
    constructor(props){
        super(props)
        this.state = {
            topics: [
                {
                    topicName:'1',
                    language:'C',
                    tags:['abc','cba'],
                    author:'sun'
                },
                {
                    topicName:'2',
                    language:'java',
                    tags:['sci','int'],
                    author:'sun' 
                }
            ]
        }
    }

    topicsList(topics){
        const topicList = this.state.topics.map((topic, index)=>
            <List 
                topicName={topic.topicName}
                language={topic.language}
                tags={topic.tags}
                author={topic.author}
            />
        )
        return topicList
    }

    render(){
        const Option = Select.Option
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
                <Select 
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select language"
                    optionFilterProp="children"
                    //onChange={handleChange}
                    //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}                >
                >  
                    <Option value='javascript'>javascript</Option>
                    <Option value='java'>java</Option>
                    <Option value='C'>C</Option>
                </Select>
                {this.topicsList(this.state.topics)}
            </div>
        )
    }
}

export default TopicList