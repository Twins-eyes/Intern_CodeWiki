import React, { Component } from 'react'

class SignInBox extends Component {
    render (){
        return(
            <div className={'signinBox'}>
                <form className={'form'}>
                    <span>Email or Username</span>   
                    <input type='text'
                    className={'formInput'}
                    name='email_username'
                    value={this.props.value}
                    autoFocus='true'
                    /><br/>
                    <span>Password</span><br/>   
                    <input type='password'
                    className={'formInput'}
                    name='password'
                    value={this.props.value}
                    /><br/>
                    <span>Forget password?</span>
                    <center><button className={'button'}>Sign in</button></center>
                </form>
            </div>
        )
    }
}

export default SignInBox