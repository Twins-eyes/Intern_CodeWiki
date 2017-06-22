import React, { Component } from 'react'
import { Row, Col } from 'antd'
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
            languages:['java','javascript','angular']
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
            <option value={lang}>{lang}</option>
        )
        return langOption
    }

    render(){
        return(
            <div className={'page'}>
                <NavBar location={this.props.location} />
                <Row>
                    <Col md={6}>
                        <select 
                            className={'lang'}
                            //optionFilterProp="children"
                            //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}                >
                        >  
                            <option selected disabled>Choose language</option>
                            {this.langOptions(this.state.languages)}
                        </select>
                    </Col>
                    <Col md={6}> 
                        <input 
                            type='text'
                            className={'formInput'}
                            value={this.props.value}
                            style={
                                {
                                    width:'250px',
                                    height:'32px',
                                }
                            }
                            placeholder='search'
                            autoFocus
                        />
                    </Col>
                </Row>
                <div style={{marginTop:'20px', opacity:'0.9'}}>
                    {this.topicsList(this.state.topics)}
                </div>
            </div>
        )
    }
}

export default TopicList