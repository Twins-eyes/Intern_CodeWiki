import React, { Component } from 'react'
import { Row, Col } from 'antd'

class SignInBox extends Component {
    render (){
        return(
            <div className={'signinBox'}>
                <form className={'form'}>
                    <Col>
                            <Row>
                                <span>Email or Username</span>   
                                 <input type='text'
                                    className={'formInput'}
                                    name='email_username'
                                    value={this.props.value}
                                    autoFocus='true'
                                    required
                                />  
                            </Row>
                            <Row>
                                <span>Password</span><br/>   
                                <input type='password'
                                    className={'formInput'}
                                    name='password'
                                    value={this.props.value}
                                    required
                                />
                            </Row>
                        </Col>  
                    <span>Forget password?</span>
                    <center>
                        <button className={'button'}>Sign in</button>
                    </center>
                </form>
            </div>
        )
    }
}

export default SignInBox