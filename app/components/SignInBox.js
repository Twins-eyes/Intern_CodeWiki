import React, { Component } from 'react'
import FormInput from '../components/FormInput'

class SignInBox extends Component {
    render (){
        return(
            <div className={'signinBox'}>
                <FormInput label={'Email or Username'}/>  
                <FormInput label={'Password'}/>           
            </div>
        )
    }
}

export default SignInBox