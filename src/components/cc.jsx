/*import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id :1,value:1}, 
            {id :2,value:1},
            {id :3,value:1}
        ]
     };
    handleDelete = (counterid) => {
        const counters =this.state.counters.filter(c=> c.id !== counterid);
        this.setState({counters});
       };
    
    

    render() { 
        return ( {this:state.counters.map(counter => <Counter key ={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}/>)}
             
                
          );
    }
}
 
export default Counters;
*/
