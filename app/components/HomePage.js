import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class HomePage extends Component {
    render () {
        return (
            <div style={styles.page}>
                <NavBar location={this.props.location}/>
                <h1>Home</h1>
            </div>
        )
    }
}

const styles={
    page:{
        backgroundColor: '#F5D773',
    },
}

export default HomePage