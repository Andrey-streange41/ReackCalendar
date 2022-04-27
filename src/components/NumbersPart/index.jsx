import React from "react";
import '../NumbersPart/style.css';

class NumbersPart extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <section >
            <section className="row">
                   <div className="empty"></div>
                   <div className="empty"></div>
                   <div className="empty"></div>
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
                   <div>4</div>
            </section>
            <section className="row">
                   <div>5</div>
                   <div>6</div>
                   <div>7</div>
                   <div>8</div>
                   <div>9</div>
                   <div>10</div>
                   <div>11</div>
            </section>
            <section className="row">
                   <div>12</div>
                   <div>13</div>
                   <div>14</div>
                   <div>15</div>
                   <div>16</div>
                   <div>17</div>
                   <div>18</div>
            </section>
            <section className="row">
                   <div>19</div>
                   <div>20</div>
                   <div>21</div>
                   <div>22</div>
                   <div>23</div>
                   <div>25</div>
                   <div>26</div>
            </section>
            <section className="row">
                   <div>27</div>
                   <div>28</div>
                   <div>29</div>
                   <div>30</div>
                   <div>31</div>
                   <div></div>
                   <div></div>
            </section>

                </section>
    }
}

export default NumbersPart;