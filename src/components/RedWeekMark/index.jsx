import React from "react";
import '../RedWeekMark/style.css';

class RedWeekMark extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <section className="daysMarkContainer">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                </section>
    }
}

export default RedWeekMark;