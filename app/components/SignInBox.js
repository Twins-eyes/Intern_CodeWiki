import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux' 
import { signIn } from '../actions'

class SignInBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    onSignIn = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.signIn(username, password)
    }

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
                                <center>
                                    <input type='text'
                                        className={'formInput'}
                                        name='email_username'
                                        value={this.props.value}
                                        autoFocus='true'
                                        onChange={e => this.setState({ username: e.target.value })}
                                        required
                                    />
                                </center>  
                            </Col>
                        </Row>
                        <Row>
                            <Col md={24}>
                                <span>Password</span><br/>                                   
                                <center>
                                    <input type='password'
                                        className={'formInput'}
                                        name='password'
                                        value={this.props.value}
                                        onChange={e => this.setState({ password: e.target.value })}
                                        required
                                    />
                                </center>
                            </Col>
                        </Row>
                        <center>
                            <button className={'button'} onClick={this.onSignIn}>Sign in</button>
                        </center>
                    </form>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default connect(null, {signIn})(SignInBox)