import React from "react";
import '../CurrentDay/style.css'

class CurrentDay extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <section className="currentDayBlock">
                    <h1>{this.props.weekDay}</h1>
                    <p>{this.props.numberDay}</p>
             </section>
    }
}

export default CurrentDay ;