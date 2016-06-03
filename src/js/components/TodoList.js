import React from 'react';
import TodoStore from '../stores/TodoStore';

import TodoItem from './TodoItem';
import AddItemForm from './form/AddItemForm';
import TodosCounter from './TodosCounter';
import TodoStoreControllerView from './mixins/TodoStoreControllerView';

const _getTodos = () => {
    return {
        todos: TodoStore.getList()
    };
}

const TodoList = (props) =>
{
        let todoList = props.todos.map( todo => {
            return <TodoItem key={ todo._id } todo={ todo } />
        });
        return(
            <div className='row'>
                <TodosCounter todos={ props.todos } />
                <div className='col-md-12'>
                    { todoList }
                </div>
                <AddItemForm />
            </div>
        );
}

export default TodoStoreControllerView(TodoList, _getTodos);
