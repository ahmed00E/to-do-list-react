import React from "react";
 
class Content extends React.Component{
  render(){
    //   console.log(this);
      return(
        <p>{this.props.value} </p>
      )
  }
}

export default Content