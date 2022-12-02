import React, {Component} from 'react'

export default class Ccomponent extends Component{
    constructor(props){
        super(props) 

        this.state = {
            count: 0
        }

        this.clickIncrement = this.clickIncrement.bind(this);
        this.clickDecrement = this.clickDecrement.bind(this);
        this.clickReset = this.clickReset.bind(this);
    }
    //стейт обновлять через странную стрелочку
    clickIncrement(){
        this.setState(state => ({ count: state.count + 1 
        }));
    }

    clickDecrement(){
        this.setState(state =>({ count: state.count - 1
        }))
    }

    clickReset(){
        this.setState({
            count: 0
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickIncrement}>Добавить 1</button>
                <button onClick={this.clickDecrement}>Отнять 1</button>
                <button onClick={this.clickReset}>Очистить</button>
            </div>
        )
    }
}
