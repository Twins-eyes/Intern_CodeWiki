import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Col, Row } from 'antd'

class SignUpPage extends Component {
    render() {
        return(
            <div className={'page'}>
                <NavBar location={this.props.location}/>
                <div className={'signupBox'}>
                    <form className={'form'}>
                        <Row>
                            <Col span={12}>
                                <span>Email Address</span>   
                                <input type='text'
                                    className={'formInput'}
                                    name='email'
                                    value={this.props.value}
                                    autoFocus='true'
                                />
                            </Col>
                            <Col span={12}>
                                <span>Username</span><br/>   
                                <input type='text'
                                    className={'formInput'}
                                    name='username'
                                    value={this.props.value}
                                />
                            </Col>
                        </Row>  
                        <Row>
                            <Col span={12}>
                                <span>Password</span><br/>   
                                <input type='password'
                                    className={'formInput'}
                                    name='password'
                                    value={this.props.value}
                                />
                            </Col>
                            <Col span={12}>
                                <span>Confirm Password</span><br/>   
                                <input type='password'
                                    className={'formInput'}
                                    name='confirmPassword'
                                    value={this.props.value}
                                />
                            </Col>
                        </Row>  
                        <center><button className={'button'}>Sign up</button></center>
                    </form>
                </div> 
            </div>
        )
    }
}

export default SignUpPage