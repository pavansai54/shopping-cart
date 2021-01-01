import React, { Component } from 'react';
const DataContext = React.Context();
class DataProvider extends Component {
    state = {  
        products:[
            {
                id:"1",
                title:"Iphone",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU",
                content:"Iphone 8TPro",
                price:"$256"
            },
            {
                id:"2",
                title:"Iphone",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU",
                content:"Iphone 8TPro",
                price:"$256"
            },
            {
                id:"3",
                title:"Iphone",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU",
                content:"Iphone 8TPro",
                price:"$256"
            }
        ]
    }
    render() { 
        const {products} = this.state;
        return ( <DataContext.Provider value={{products}}>
            {this.props.children}
        </DataContext.Provider> );
    }
}
 
export default DataProvider;