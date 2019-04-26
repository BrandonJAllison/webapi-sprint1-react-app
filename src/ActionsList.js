import React, { Component } from 'react';



const div ={
    display: 'flex',
    margin: '25px',
    flexDirection: 'column',
    textAlign: 'left',
    border: '1.5px solid black',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 2px 5px black',
    
}

class ActionsList extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
   
    render(){
        return(
            <div  >
                {this.props.data.map(action => (
                    <div  style={div} key={action.id}>
                        <div><span>id: {action.id}</span></div>
                        <div><span>Project Id: {action.project_id}</span></div>
                        <div><span>Description: {action.description}</span></div>
                        <div><span>Notes: {action.notes}</span></div>
                        
                    </div>
                ))}
            </div>
        )
    }

}

export default ActionsList;