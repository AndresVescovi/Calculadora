import React from "react"
import './Calculator.css'
import { Component} from "react"

class Calculator extends Component {
    constructor() {
        super();
        this.setState = { chain: ''}
    }

        one = () =>{
            this.selector("1");
        }
        two = () =>{
            this.selector("2");
        }
        three = () =>{
            this.selector("3");
        }
        four = () =>{
            this.selector("4");
        }
        five = () =>{
            this.selector("5");
        }
        six = () =>{
            this.selector("6");
        }
        seven = () =>{
            this.selector("7");
        }
        eigth = () =>{
            this.selector("8");
        }
        nine = () =>{
            this.selector("9");
        }
        zero= () =>{
            this.selector("0");
        }
        clear = () =>{
            this.selector("clear");
        }
        equal = () =>{
            this.selector("equal");
        }
        add = () =>{
            this.selector("+");
        }
        
        subtract = () =>{
            this.selector("-");
        }
        divide= () =>{
            this.selector("/");
        }
        multiply= () =>{
            this.selector("*");
        }
        


selector = () => {
        
    }
    calculate = () => {
            // eslint-disable-next-line no-eval
            const result = eval(this.state.data);
            this.setState({data: result});
      
    }

        render() {
    return(
        <div className="conteiner">
           <div className="dispaly"><p>{this.props.chain}</p></div> 
            
            
            <div className="buttom">
                <button onClick={this.seven} className="number" value="7" >7</button>
                 <button onClick={this.eigth} className="number">8</button>
                <button onClick={this.nine} className="number">9</button>
                <button onClick={this.divide} className="number">/</button> 
            </div>
             <div className="buttom">
                <button onClick={this.four} className="number">4</button>
                <button onClick={this.five} className="number">5</button>
                <button onClick={this.six} className="number">6</button>
                <button onClick={this.subtract} className="number">-</button>
            </div>
            <div className="buttom">
                <button onClick={this.one} className="number">1</button>
                <button onClick={this.two} className="number">2</button>
                <button onClick={this.three} className="number">3</button>
                <button onClick={this.multiply} className="number">*</button>
            </div>
            <div className="buttom">
                <button onClick={this.equal} className="number">0</button>
                <button onClick={this.equal} className="number">=</button>
                <button onClick={this.clear} className="number">c</button>
                <button onClick={this.add} className="number">+</button>
            </div>
 

        </div>
    )
}

}
export default Calculator