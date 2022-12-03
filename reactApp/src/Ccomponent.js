import React, {Component} from 'react'
import './styles.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';




export default class Ccomponent extends Component{
    constructor(props){
        super(props); 

        this.state = {
            input:"",
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //стейт обновлять через странную стрелочку
    // clickIncrement(){
    //     this.setState(state => ({ count: state.count + 1 
    //     }));
    // }
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        if(this.state.input !=""){
            this.setState({
                input: this.state.input,
                items: [...this.state.items, this.state.input],
                input: ""
            })
        }
    }

   
    render(){
        return (
            <div>
                <Stack direction ="column" spacing={2}>
                    <TextField id="outlined-basic" label="Введите что-нибудь" variant="outlined" value = {this.state.input} onChange = {this.handleChange} />
                    <Button variant="contained" onClick ={this.handleSubmit}>Подтвердить</Button>
                </Stack>
                <ul>
                    {this.state.items.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
