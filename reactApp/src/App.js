import './App.css';
import Ccomponent from './Ccomponent';
import ToDoItem from './ToDoItem/ToDoItem';
import todoData from './ToDoData';
import React, { Component } from 'react';

class App extends Component{
    constructor(){
      super();
      this.state = {
        todosItems: todoData
      };

      this.handleSubmit = this.handleSubmit.bind(this);

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

    handleChange = id =>{
      const index = this.state.todosItems.map(item => item.id).indexOf(id);
      this.setState(state =>{
        let {todosItems} = state;
        todosItems[index].completed = true;
        return todosItems;
      })
    }

  render(){
    const{todosItems}=this.state;
    const activeTasks = todosItems.filter(task => task.completed === false);
    const completedTasks = todosItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item =>{
      return(
        <ToDoItem
        key ={item.id}
        description={item.desciption} 
        completed={item.completed} 
        handleChange={()=>{this.handleChange(item.id)}}
        />
      )
    })
   
    return (
      <div className='App'>
        <h1 className='title'>cписок неприятностей</h1>
        <h2 className='titleBlock'>хотите придумать себе больше проблем?</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value ={this.state.input}/>

        </form>
        {finalTasks}
      </div>
    );
  }
}

export default App;
