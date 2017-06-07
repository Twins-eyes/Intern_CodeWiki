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
                    />
                    <span>Password</span>   
                    <input type='password'
                    className={'formInput'}
                    name='password'
                    value={this.props.value}
                    />
                    <center><button className={'button'}>Sign In</button></center>
                </form>
            </div>
        )
    }
}

export default SignInBox