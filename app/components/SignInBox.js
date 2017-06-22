import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SignInBox extends Component {
    render (){
        return(
            <ReactCSSTransitionGroup
                transitionName='sgnBox'
                transitionAppear={true}
                transitionAppearTimeout={700}
                transitionEnter={false}
                transitionLeave={false}
            >
                <div className={'signinBox'}>
                    <form className={'form'}>
                        <Row>
                            <Col md={24}>
                                <span>Email or Username</span><br/>   
                                <center><input type='text'
                                    className={'formInput'}
                                    name='email_username'
                                    value={this.props.value}
                                    autoFocus='true'
                                    required
                                /></center>  
                            </Col>
                        </Row>
                        <Row>
                            <Col md={24}>
                                <span>Password</span><br/>                                   
                                <center><input type='password'
                                    className={'formInput'}
                                    name='password'
                                    value={this.props.value}
                                    required
                                /></center>
                            </Col>
                        </Row>
                        <center>
                            <button className={'button'}>Sign in</button>
                        </center>
                    </form>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default SignInBox