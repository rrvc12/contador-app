import React from 'react';
import '../styles/Contador.css'

class Contador extends React.Component {
    render(){
        return(
            <div className='contador'>{this.props.numeroClics}</div>
        );
        
    }
}


export default Contador;