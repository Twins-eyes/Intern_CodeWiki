import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class TestPage extends Component {
    render () {
        return (
            <div>
                <NavBar location={this.props.location}/>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default TestPage