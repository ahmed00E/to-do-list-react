 import React, { Component } from 'react'
 
 class Button extends Component {
    //  handelClick (){
    //      console.log("I just clicked");
    //  }
     render() {
         console.log(this.props );
        //  console.log(this);
         return (
             <button onClick={this.props.onClick}>
                 {this.props.label} 
            </button>
         )
     }
 }

 export default Button
 