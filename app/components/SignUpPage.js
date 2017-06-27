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

    handleCFPassword(e){
        if(this.state.password == e.target.value) {
            console.log(e.target.value)
            console.log('match!')
            this.setState({
                cfPassword: e.target.value
            })
        }
        else {
            console.log('yoyoyoyo')
        }
    }

    handlePassword(e){
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div className={'page'}>
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
                                        className={'formInput'}
                                        name='username'
                                        value={this.props.username}
                                        required
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