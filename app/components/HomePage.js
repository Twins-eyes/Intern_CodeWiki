import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'


class HomePage extends Component {
    render () {
        const random = (min, max) => Math.random() * (max - min) + min
        return (
            <div>
                <ReactCSSTransitionGroup
                   transitionName='synopsis'
                   transitionAppear={true}
                   transitionAppearTimeout={500}
                   transitionEnter={false}
                   transitionLeave={false}
                >
                    <img src={require('../img/coding-924920_960_720.jpg')} className={'homebg'} />
                    <NavBar location={this.props.location} />
                    <Row>
                        <Col xs={{span:20, offset:4}} sm={{span:8, offset:2}} md={{span:10, offset:2}}/>
                        <Col xs={{span:20, offset:4}} sm={{span:8, offset:2}} md={{span:10, offset:2}}>
                            <div className={'syno'}>
                                <ReactCSSTransitionGroup
                                    transitionName='synopsis'
                                    transitionAppear={true}
                                    transitionAppearTimeout={700}
                                    transitionEnter={false}
                                    transitionLeave={false}
                                >
                                    <center><h1 className={'h1'}>CodeWiki</h1><br/>
                                    <span>The new way to express your
                                        code and explanation with other people
                                        in the different ways from the traditional site.<br/><br/>
                                    </span></center>
                                    <p><h3>CodeWiki</h3> allow you to correspond between code
                                        and explanation within one screen, helping developers
                                        to easily write the explanation when sharing with other people.<br/> 
                                        <br/>
                                        <h3>CodeWiki</h3> not only provides the open space 
                                        to share your codes but also finds others' code to get more 
                                        understanding in coding ways.
                                    </p>
                                    <center><Link to={'/list'}><button className={'toListButt'}><span>TOPICS</span></button></Link></center>
                                </ReactCSSTransitionGroup>
                            </div>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.auth)
    return {}
}

export default connect(mapStateToProps)(HomePage)