/*import React, { Component } from 'react';
class Counter extends Component {
    state= {
        value: 0
    };
     handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }
       
    styles = {
        fontSize: ' 20px',
        fontWeight : 'bold'
    };
    render(){
            
       return(
   <div>
       <h1>Title</h1>
                <span  style = {{fontSize:40}}  className= "badge badge-primary m-2">{this.formatCount()}</span>
         
             <button  style = {this.styles} onClick={this.handleIncrement}>
               Increment</button>
        
         <button style = {this.styles} 
         onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
         </div>
       );
}
 formatCount()  {
     const {value}= this.state;
    return value === 0 ? 'Zero' : value;
}
}
export default Counter;
*/