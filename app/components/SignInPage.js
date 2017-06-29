import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'
import { Row, Col } from 'antd'

class SignInPage extends Component {
    render() {
        return(
             <div>
                <NavBar location={this.props.location}/>
                <center><div style={{width:'550px', marginTop:'50px'}}>
                    <SignInBox/>
                </div></center>
            </div>
        )
    }
}

export default SignInPage