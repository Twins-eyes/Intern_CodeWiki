import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import SignInBox from '../components/SignInBox'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'

class SignInPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
             <div>
                <NavBar location={this.props.location}/>
                <center>
                    <div className={'sip'} style={{width:'550px', marginTop:'50px'}}>
                        <SignInBox location={this.props.location}/>
                    </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth.get('user') }
}

export default connect(mapStateToProps)(SignInPage)