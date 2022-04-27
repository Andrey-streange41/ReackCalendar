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
        this.state = {
            currentNumberOfDay: 0,
            currentDayOfWeek: 2,
            currentMonth:0,
            currentYear: 2022 
        }
       this.IdChangeDate = setInterval(this.changeDate,1000);
    }

     changeDate= () =>{
         if(this.state.currentNumberOfDay < 31)
             this.setState({...this.state,currentNumberOfDay:this.state.currentNumberOfDay+1,currentDayOfWeek:this.state.currentDayOfWeek+1})
         if(this.state.currentNumberOfDay === 31)
            this.setState({...this.state, currentNumberOfDay:0, currentDayOfWeek:this.state.currentDayOfWeek+1,currentMonth:this.state.currentMonth+1})
         if(this.state.currentDayOfWeek === 6)
            this.setState({...this.state, currentDayOfWeek:0,currentNumberOfDay:this.state.currentNumberOfDay+1})
        if(this.state.currentMonth === 11)
            this.setState({...this.state,currentMonth:0,currentYear:this.state.currentYear+1})
     }
    
     

    render(){
        return <section className="backPlane"> 
                    <CurrentDay numberDay={this.numbers[this.state.currentNumberOfDay]} weekDay={this.weekDays[this.state.currentDayOfWeek]} />
                    <UICalendar year={this.state.currentYear} month={this.month[this.state.currentMonth]}/>
                </section>
    }
}

export default CalendarApp;