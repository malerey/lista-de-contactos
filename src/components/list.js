
import React, { Component } from 'react';
import Persona from './persona';

class List extends Component {
   constructor(props) {
       super(props)
       this.state = {
           received: false,
       }
   }

   componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(json => this.setState({
               userData: json,
               received: true
           })
           )
   }

   mensajeEnConsola = () => {
       console.log('hiciste click')
   }

   render() {
       console.log(this.state.userData)
       return (
           <div
           onClick={this.mensajeEnConsola}>
               {
               this.state.received &&
               this.state.userData.map(u =>
                   <Persona
                   name={u.name}
                   email={u.email}
                   />
               )
               }

           </div>
       )
   }
}

export default List;