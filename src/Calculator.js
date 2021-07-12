import React from "react"
import './Calculator.css'
import { Component} from "react"

class Calculator extends Component {
    constructor() {
        super();
        this.state = { chain: ""}
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
        


selector = (a) => {
        const value = a;
        switch(value) {
            case 'clear':
                this.setState({ chain: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ chain: this.state.chain + value});
        }
    }
    calculate = () => {
            // eslint-disable-next-line no-eval
            const result = eval(this.state.chain);
            this.setState({chain: result});
      
    }

        render() {
    return(
        <div className="container">
            <div className="container-calculator">
                <input type="text" className="display" value={this.state.chain}/>
                
                
                <div className="row-buttons">
                    <button onClick={this.seven} className="buttons" value="7" >7</button>
                    <button onClick={this.eigth} className="buttons">8</button>
                    <button onClick={this.nine} className="buttons">9</button>
                    <button onClick={this.divide} className="buttons">/</button> 
                </div>
                <div className="row-buttons">
                    <button onClick={this.four} className="buttons">4</button>
                    <button onClick={this.five} className="buttons">5</button>
                    <button onClick={this.six} className="buttons">6</button>
                    <button onClick={this.subtract} className="buttons">-</button>
                </div>
                <div className="row-buttons">
                    <button onClick={this.one} className="buttons">1</button>
                    <button onClick={this.two} className="buttons">2</button>
                    <button onClick={this.three} className="buttons">3</button>
                    <button onClick={this.multiply} className="buttons">*</button>
                </div>
                <div className="row-buttons">
                    <button onClick={this.zero} className="buttons">0</button>
                    <button onClick={this.equal} className="buttons">=</button>
                    <button onClick={this.clear} className="buttons">c</button>
                    <button onClick={this.add} className="buttons">+</button>
                </div>
    
            </div>
        </div>
    )
}

}
export default Calculator