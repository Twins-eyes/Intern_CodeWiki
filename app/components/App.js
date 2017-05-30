import React, { Component } from 'react'
import Router from '../config/Router'

class App extends Component {
    render () {
        return (
            <div>
                <Router />
            </div>            
        )
    }
}
const styles = {
    headerTab: {
        backgroundColor: '#99D3DF',
        width: '100%',
        height: '75px',
        flex: 1
    }
}


export default App