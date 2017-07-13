import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { text } from '../actions'

class SignInPage extends Component {
    constructor(props) {
        super(props)
        this.props.text()
    }
    render() {
        console.log(this.props)
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

const mapStateToProps = state => {
    console.log(state)
    return { user: state.auth.get('user') }
}

export default connect(mapStateToProps, {text})(SignInPage)