import React, { Component } from 'react'
 import Title from './components/Title'
 import Content from './components/Content'
 import Button from './components/Button'

 class App extends Component {


          handleClick () {
            console.log("just clicked"); 
      }
     handleChange (event ) {
       console.log(event.target.value);
     }  

    render() {
        return (
            <>
            <Title value="Home" color="#0000FF" />                
            <Content value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />                <Button label= "Change title" onClick={this.handleClick} />
            <input
            placeholder="type text"
            type="range"
            onChange={this.handleChange}
            main={100}
            max={999}
            />
            </>
         
        )
    }
}

export default App













 
 