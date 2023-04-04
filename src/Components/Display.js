import React, { Component } from 'react';

 class Display extends Component {
  
  render() {
    return (
      <div>
        <h1 className="title">EMPLOYEE DATA FORM</h1>
        <div className='card'>
            <div className='row'> 
            {
        this.props.value.map((info,ind)=>{
                    return(
                        <div key={ind}  >
                          <div className='column'>
                            <div className='infocard'>
                            Name:  {info.username}| Department: {info.userdpt}| Rating: {info.userrating}</div>
                            </div>
                        </div>  
                    )
                }
             )}
            </div>
        </div>
        <button onClick={this.props.toggleFunc}>Go Back</button>
        
      </div>
    )
  }
}
export default Display;