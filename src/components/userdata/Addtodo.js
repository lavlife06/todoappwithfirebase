import React, { Component } from 'react';
 class Addtodo extends Component {
     state = {
         content: ''
     }
     handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
     }
     submitHandler = (e) => {
         e.preventDefault();
         this.props.propHandler(this.state);
         this.setState({
             content: ''
         })
     }
     render(){
         return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Add todo:</label>
                    <input type='text'  onChange={this.handleChange} value={this.state.content} />
                    <button>Submit</button>
                </form>
            </div>
         )
     }
 } 
 export default Addtodo;