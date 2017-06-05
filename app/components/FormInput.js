import React, { Compoment } from 'react'

class FormInput extends Component{
  render(){
    return(
      <form>
        <p>{this.props.label}</p>   
        <input type='text'
          name={this.props.label} 
          value={this.props.value}
          style={styles.inputStyle}
        />
      </form>
    )
  }
}

const styles = {
  label:{
      
  },
  inputStyle:{
    borderRadius: 10
  }
}

export default FormInput 