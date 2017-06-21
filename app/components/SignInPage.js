import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'

class SignInPage extends Component {
    render() {
        return(
             <div className={'page'}>
                <NavBar location={this.props.location}/>
                <div>
                    <center><SignInBox/></center>
                </div>
            </div>

        )
    }
}

export default SignInPage