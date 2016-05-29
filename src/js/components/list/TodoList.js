import React from 'react';
import TodoStore from '../../stores/TodoStore';

import TodoItem from './TodoItem';
import AddItemForm from '../form/AddItemForm';

const _getList = ()=>{
    return {list: TodoStore.getList()};
}

class TodoList extends React.Component
{
    constructor(props){
        super();
        this._onListChange = this._onListChange.bind(this);
        this.state = _getList();
    }

    componentWillMount(){
        // Add change listeners
        TodoStore.addChangeListener(this._onListChange);
    }

    componentWillUnmount(){
        // Remove change listeners
        TodoStore.removeChangeListener(this._onListChange);
    }

    _onListChange(){
        this.setState(_getList());
    }

    render(){
        let list = this.state.list.map(item => {
            return <TodoItem key={item.id} item={item} />
        });
        return(
            <div className='row'>
                <div className='col-md-12'> {list} </div>
                <AddItemForm />
            </div>
        );
    }
}

export default TodoList;
