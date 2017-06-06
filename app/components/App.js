import React, { Component } from 'react'
import Router from '../config/Router'
import '../assets/editor.css'

class App extends Component {
    render () {
        return (
            <div>
                <Router />
            </div>            
        )
    }
}

export default App