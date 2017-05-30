import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class HomePage extends Component {
    render () {
        return (
            <div>
                <NavBar location={this.props.location}/>
                <h1>Home</h1>
            </div>
        )
    }
}

export default HomePage