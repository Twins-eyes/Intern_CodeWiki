import React, { Component } from 'react'
import FormInput from '../components/FormInput'

class SignInBox extends Component {
    render (){
        return(
            <div className={'signinBox'}>
                <FormInput type='text' label='Email or Username' autoFocus='true'/>  
                <FormInput type='password' label='Password'/>     
            </div>
        )
    }
}

export default SignInBox