import React from "react";
import '../CurrentDay/style.css'

class CurrentDay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentDayOfWeek: this.props.weekDay,
            numberDay:this.props.numberDay
        }
    }
    render(){
        return <section className="currentDayBlock">
                    <h1>{this.state.currentDayOfWeek}</h1>
                    <p>{this.state.numberDay}</p>
             </section>
    }
}

export default CurrentDay ;