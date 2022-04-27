import React from "react";
import RedWeekMark from "../RedWeekMark";
import '../UICalendar/style.css';
import YearBlock from "../YearBlock";
import NumbersPart from "../NumbersPart";

class UICalendar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <section className="ui-calendar">
                    <YearBlock month={this.props.month} year={this.props.year}/>
                    <RedWeekMark/>
                    <NumbersPart/>
                </section>
    }
}

export default UICalendar;