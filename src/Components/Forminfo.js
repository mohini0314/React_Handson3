import React, { Component } from 'react';
import Display from './Display';


class Forminfo extends Component {

  state={
    username:'',
    userdpt:'',
    userrating:'',
    array:[],
    clicked: true
  }
HandleNameChange=(e)=>{this.setState({username:e.target.value})
}
HandleDptChange=(e)=>{this.setState({userdpt:e.target.value})
}
HandleRattingChange=(e)=>{this.setState({userrating:e.target.value})
}

HandleSubmit=()=>{
  const ObjNew={
    username :this.state.username,
    userdpt:this.state.userdpt,
    userrating:this.state.userrating
  }
  this.state.array.push(ObjNew);
  this.setState({
    array:this.state.array,
    clicked : false
  })
  this.setState({
    username:'',
    userdpt:'',
    userrating:''

  })
}
toggleFunction=()=>{
  this.setState({clicked : !this.state.clicked})
}

  render() {
    return (
      <>
      {this.state.clicked?
      <div>
        <h1 className="title">EMPLOYEE FEEDBACK FORM</h1>
        <label>NAME :</label>
        <input type="text" value={this.state.username} onChange={this.HandleNameChange} /><br /><br />
        <label>DEPARTMENT :</label>
        <input type="text" value={this.state.userdpt} onChange={this.HandleDptChange} /><br /><br />
        <label>RATTING :</label>
        <input type="text" value={this.state.userrating} onChange={this.HandleRattingChange} /><br /><br />
        <button type='submit' onClick={this.HandleSubmit} >SUBMIT</button>
      </div>:
      <Display value={this.state.array} toggleFunc={this.toggleFunction}/>
  }
      </>

    )
  }
}
export default Forminfo;