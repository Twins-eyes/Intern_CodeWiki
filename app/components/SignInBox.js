import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux' 
import { signIn } from '../actions'
import { Redirect } from 'react-router-dom'

class SignInBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        }
    }

    onSignIn = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.signIn(username, password).then(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return(
            <ReactCSSTransitionGroup
                transitionName='sgnBox'
                transitionAppear={true}
                transitionAppearTimeout={700}
                transitionEnter={false}
                transitionLeave={false}
            >
                <Card className={'signinBox'} style={{backgroundColor:'#fafafa'}}>
                    <form className={'form'}>
                        <Row>
                            <Col md={24}>
                                <span>Email or Username</span><br/>   
                                <center>
                                    <input type='text'
                                        className={'formInput'}
                                        name='email_username'
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
                </Card>
            </ReactCSSTransitionGroup>
        )
    }
}

export default connect(null, {signIn})(SignInBox)