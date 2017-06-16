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
                    topicName:'topic',
                    language:'C',
                    tags:['abc','cba'],
                    author:'sun',
                    date: '16/8/2016'
                },
                {
                    topicName:'2',
                    language:'java',
                    tags:['sci','int'],
                    author:'sun',
                    date: '16/8/2016' 
                }
            ],
            languages:[]
        }
    }

    topicsList(topics){
        const topicList = this.state.topics.map((topic, index)=>
            <List
                key={index}
                topicName={topic.topicName}
                language={topic.language}
                tags={topic.tags}
                author={topic.author}
                date={topic.date}
            />
        )
        return topicList
    }

    langOptions(languages){
        const langOption = this.state.languages.map((lang, index)=>
            <Option value={lang}>{lang}</Option>
        )
        return langOption
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
                    className={'lang'}
                    placeholder="Select language"
                    optionFilterProp="children"
                    //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}                >
                >  
                    {this.langOptions(this.state.languages)}
                </Select>
                <div style={{marginTop:'20px', opacity:'0.9'}}>
                    {this.topicsList(this.state.topics)}
                </div>
            </div>
        )
    }
}

export default TopicList