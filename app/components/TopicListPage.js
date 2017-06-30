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
        this.onChange = this.onChange.bind(this)
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

    onChange(v){
        console.log(v)
        return this.setState({value: v})
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
                    <Col xs={{span:20, offset:4}} md={{span:20, offset:4}}> 
                        <input 
                            type='text'
                            className={'formInput'}
                            value={this.props.value}
                            style={
                                {
                                    width:'250px',
                                    height:'32px',
                                    float:'right',
                                    margin: '0px 45px 5px 0px',
                                }
                            }
                            placeholder='search'
                            autoFocus
                        />
                    </Col>
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
                </Row>
                <div style={{marginTop:'20px', opacity:'0.98'}}>
                    {this.topicsList(this.state.topics)}
                </div>
                <div className={'footer'}/>
            </div>
        )
    }
}

export default TopicList