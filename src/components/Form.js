import React from 'react';
 
 class Form extends React.Component {
    render() {
        this.state = {
            task: ""
        }
        return (
            
            <div>
                <button 
                    className="btn btn-outline-primary"
                    onClick={this.props.onClick}
                    name={this.props.children}
                    >                    
                    {this.props.children}
                </button>
            </div>
         )
     }
 }
 export default Form

  

 





 