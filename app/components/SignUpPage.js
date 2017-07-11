import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Col, Row } from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            cfPassword: ''
        }
    }

    handleCFPassword(e) {
        if(this.state.password == e.target.value) {
            this.setState({
                cfPassword: e.target.value
            })
        }
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleUsername(e) {
        const usernameRegex = new RegExp('[a-zA-Z_0-9]{3,12}')
        const valid = usernameRegex.test(e.target.value)
        console.log(valid)
        if(valid) {
            this.setState({
                username: e.target.value
            })
        }
    }

    render() {
        return(
            <div>
                <NavBar location={this.props.location}/>
                <ReactCSSTransitionGroup
                    transitionName='sgnBox'
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <center><div className={'signupBox'}>
                        <form className={'form'}>
                            <Row>
                                <Col md={12}>
                                    <span>Email Address</span><br/>   
                                    <input type='email'
                                        className={'formInput'}
                                        name='email'
                                        value={this.props.email}
                                        autoFocus='true'
                                        required
                                    />
                                </Col>
                                <Col md={12}>
                                    <span>Username</span><br/>   
                                    <input type='text'
                                        className={ 'formInput' }
                                        name='username'
                                        value={this.props.username}
                                        required
                                        onChange={this.handleUsername.bind(this)}
                                        size={12}
                                        pattern={'[A-Za-z\d]{3,12}'}
                                    />
                                </Col>
                            </Row>  
                            <Row>
                                <Col md={12}>
                                    <span>Password</span><br/>   
                                    <input type='password'
                                        className={'formInput'}
                                        name='password'
                                        value={this.props.password}
                                        onChange={this.handlePassword.bind(this)}
                                        required
                                    />
                                </Col>
                                <Col md={12}>
                                    <span>Confirm Password</span><br/>   
                                    <input type='password'
                                        className={'formInput'}
                                        name='confirmPassword'
                                        onChange={this.handleCFPassword.bind(this)}
                                        value={this.props.cfPassword}
                                        required
                                    />
                                </Col>
                            </Row>  
                            <center><button className={'button'}>Sign up</button></center>
                        </form>
                    </div></center> 
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default SignUpPage