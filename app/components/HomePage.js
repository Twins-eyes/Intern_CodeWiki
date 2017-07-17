import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
//import ParallaxComponent from 'react-parallax-component'

class HomePage extends Component {
    render () {
        const random = (min, max) => Math.random() * (max - min) + min
        return (
            <div>
                <NavBar location={this.props.location} />
                <Row>
                    <Col xs={{span:20, offset:4}} sm={{span:8, offset:2}} md={{span:10, offset:2}}>
                        <div className={'syno'} style={{height: 1000}}>
                            <ReactCSSTransitionGroup
                                transitionName='synopsis'
                                transitionAppear={true}
                                transitionAppearTimeout={500}
                                transitionEnter={false}
                                transitionLeave={false}
                            >
                                <h1 className={'h1'}>CodeWiki</h1><br/>
                                <span>The new way to express your
                                    code and explanation with other people
                                    in the different ways from the traditional site.<br/><br/>
                                </span>
                                <p><span>CodeWiki</span>allow you to correspond between code
                                    and explanation within one screen, helping developers
                                    to easily write the explanation when sharing with other people.<br/> 
                                    <br/>
                                    <span>CodeWiki</span>not only provides the open space 
                                    to share your codes but also finds others' code to get more 
                                    understanding in coding ways.
                                </p>
                            </ReactCSSTransitionGroup>
                        </div>
                    </Col>
                    {localStorage.getItem('key')?'':
                        <Col xs={{span:20, offset:4}} sm={{span:12, offset:2}} md={{span:10, offset:2}}>
                            <br/><SignInBox/>
                        </Col>
                    }
                </Row>
                {/* <ParallaxComponent
                    speed={-0.5}
                    top="40%"
                    left={(1) * 80}                        
                >
                    <img src='../img/bg_layer4_3.png'/>
                </ParallaxComponent> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.auth)
    return {}
}

export default connect(mapStateToProps)(HomePage)