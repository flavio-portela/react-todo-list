import React from 'react';
import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';

import TodoItem from './TodoItem';
import AddItemForm from '../form/AddItemForm';

const _getTodos = () => {
    return {
        todos: TodoStore.getList()
    };
}

class TodoList extends React.Component
{
    constructor(props){
        super();
        this._onTodosChange = this._onTodosChange.bind(this);
        this.state = _getTodos();
        TodoStore.addChangeListener(this._onTodosChange);
    }

    componentDidMount(){
        if(!this.state.todos.length){
            console.log('Calling action getTodos...');
            TodoActions.getTodos();
        }
    }

    componentWillUnmount(){
        TodoStore.removeChangeListener(this._onTodosChange);
    }

    _onTodosChange(){
        console.log('Updating state from view..');
        this.setState(_getTodos());
    }

    render(){
        let todoList = this.state.todos.map( todo => {
            return <TodoItem key={ todo._id } todo={ todo } />
        });
        return(
            <div className='row'>
                <div className='col-md-12'>
                    { todoList }
                </div>
                <AddItemForm />
            </div>
        );
    }
}

export default TodoList;
