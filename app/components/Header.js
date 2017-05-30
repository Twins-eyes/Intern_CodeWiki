import React, {Component, View, Text} from 'react'

class Header extends Component{
    
    render(){
        return(
            <div style={styles.headerTab}>
                <p>test</p>
            </div>
        )
    }
}

const styles = {
    headerTab: {
        backgroundColor: '#99D3DF',
        width: '100%',
        height: '200px'
    }
}

export default headerTab