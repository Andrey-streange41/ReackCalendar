import React from "react";
import '../CalendarApp/style.css'
import CurrentDay from '../CurrentDay/index';
import UICalendar from "../UICalendar";

class CalendarApp extends React.Component{
    constructor(props){
        super(props);
        this.numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        this.weekDays = ['Sunday','Monday','Thursday','Wednesday','Thursday','Friday', 'Saturday'];
        this.month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        this.state ={
            currentNumberOfDay: this.numbers[30],
            currentDayOfWeek: this.weekDays[0],
            currentMonth:this.month[0],
            currentYear: 2022 
        }
    }
    render(){
        return <section className="backPlane"> 
                    <CurrentDay numberDay={this.state.currentNumberOfDay} weekDay={this.state.currentDayOfWeek} />
                    <UICalendar year={this.state.currentYear} month={this.state.currentMonth}/>
                </section>
    }
}

export default CalendarApp;