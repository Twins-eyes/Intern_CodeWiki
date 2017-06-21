import React, { Component } from 'react'
import { Row, Col } from 'antd'

class SignInBox extends Component {
    render (){
        return(
            <center><div className={'signinBox'}>
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
            </div></center>
        )
    }
}

export default SignInBox