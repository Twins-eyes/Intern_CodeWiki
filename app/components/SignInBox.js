import React, { Component } from 'react'
import { Row, Col } from 'antd'

class SignInBox extends Component {
    render (){
        return(
            <div className={'signinBox'}>
                <form className={'form'}>
                    <Row align='middle'>
                        <Col>
                            <span>Email or Username</span><br/>   
                            <input type='text'
                                className={'formInput'}
                                name='email_username'
                                value={this.props.value}
                                autoFocus='true'
                                required
                            />  
                        </Col>
                    </Row>
                    <Row align='middle'>
                        <Col>
                            <span>Password</span><br/>                                   
                            <input type='password'
                                className={'formInput'}
                                name='password'
                                value={this.props.value}
                                required
                            />
                        </Col>
                    </Row>
                    <center>
                        <button className={'button'}>Sign in</button>
                    </center>
                </form>
            </div>
        )
    }
}

export default SignInBox