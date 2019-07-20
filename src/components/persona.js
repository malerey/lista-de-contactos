
import React, { Component } from 'react';

class Persona extends Component {
   constructor(props) {
       super(props)
       this.state = {
       }
   }

   render() {
       return (
           <div>
             <h1>{this.props.name}</h1>
            <h3>{this.props.email}</h3>
           </div>
       )
   }
}

export default Persona;