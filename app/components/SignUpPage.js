import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class SignUpPage extends Component {
    render() {
        return(
             <div className={'page'}>
                <NavBar location={this.props.location}/>
            </div>

        )
    }
}

export default SignUpPage