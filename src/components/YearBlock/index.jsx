import React from "react";
import '../YearBlock/style.css';

class YearBlock extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <section >
                   <span>{this.props.month}</span>
                   <span>{this.props.year}</span>
                </section>
    }
}

export default YearBlock;