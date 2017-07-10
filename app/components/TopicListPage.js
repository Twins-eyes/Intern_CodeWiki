import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavBar from '../components/NavBar'
import List from '../components/List'
import { MdKeyboardArrowDown } from 'react-icons/lib/md'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class TopicList extends Component {
    constructor(props){
        super(props)
        this.state = {
            topics: [
                {
                    topicName:'This is the topic name for testing codewiki',
                    language:'javascript',
                    tags:['abc','cba','java','javascript','hello','world'],
                    author:'authorizeby',
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
            languages:['java','javascript','angular','C','C++','C#','php'],
            value:'all'
        }
    }

    topicsFilter(e) {
        var search = this.state.topicsList[0].topicName.toLowerCase().search(e.target.value.toLowerCase())!= -1
        this.setState({topics: search})
    }

    topicsList(topics) {
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
            <p key={index}>{ lang }</p>
        )
        return langOption
    }

    render(){
        return(
            <div>
                <NavBar location={this.props.location} />
                <Row>
                    <Col xs={{span:10, offset:2}} md={{span:10, offset:2}}>
                        <div className="dropdown">
                            <button className="dropbtn">
                                Languages
                                <MdKeyboardArrowDown/>
                            </button>
                            <div className="dropdown-content">
                                { this.langOptions(this.state.languages) } 
                            </div>
                        </div>
                    </Col>
                    <Col xs={{span:20, offset:4}} md={{span:10, offset:2}}> 
                        <input 
                            type='text'
                            className={'search'}
                            value={this.props.value}
                            placeholder='search'
                            autoFocus
                            onChange={this.topicsFilter.bind(this)}
                        />
                    </Col>
                </Row>
                <div style={{marginTop:'20px', opacity:'0.98'}}>
                    {this.topicsList(this.state.topics)}
                </div>
            </div>
        )
    }
}

export default TopicList