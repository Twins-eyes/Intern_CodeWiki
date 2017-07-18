import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Col, Row, Card } from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { signUp } from '../actions'

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
        console.log(e)
        const usernameRegex = new RegExp('[a-zA-Z_0-9]{3,12}')
        const valid = usernameRegex.test(e.target.value)
        console.log(valid)
        if(valid) {
            this.setState({
                username: e.target.value
            })
        }
    }

    onSignUpHandler = e => {
        e.preventDefault()
        const { username, email, password } = this.state
        this.props.signUp(username, email, password)
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <ReactCSSTransitionGroup
                    transitionName='sgnBox'
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <NavBar location={this.props.location}/>
                        <center><Card className={'signupBox'} style={{backgroundColor:'#fafafa'}}>
                            <form className={'form'}>
                                <Row>
                                    <Col md={12}>
                                        <span style={{paddingLeft:0}}>Email Address</span><br/>   
                                        <input type='email'
                                            className={'formInput'}
                                            name='email'
                                            value={this.props.email}
                                            autoFocus='true'
                                            onChange={e => this.setState({ email: e.target.value })}
                                            required
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <span style={{paddingLeft:0}}>Username</span><br/>   
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
                                        <span style={{paddingLeft:0}}>Password</span><br/>   
                                        <input type='password'
                                            className={'formInput'}
                                            name='password'
                                            value={this.props.password}
                                            onChange={this.handlePassword.bind(this)}
                                            required
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <span style={{paddingLeft:0}}>Confirm Password</span><br/>   
                                        <input type='password'
                                            className={'formInput'}
                                            name='confirmPassword'
                                            onChange={this.handleCFPassword.bind(this)}
                                            value={this.props.cfPassword}
                                            required
                                        />
                                    </Col>
                                </Row>  
                                <center><button className={'button'} onClick={this.onSignUpHandler}>Sign up</button></center>
                            </form>
                        </Card></center> 
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default connect(null, {signUp})(SignUpPage)