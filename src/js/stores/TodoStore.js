import {dispatch, register} from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import { EventEmitter } from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'list_updated';

const _updateTodo = (item, list ) => {
    list.map((todo) => {
        if(todo._id == item._id){
            todo.done = item.done;
        }
        return todo;
    });
}

const _deleteItem = (_id, list) =>{
    _.remove(list, (item) =>{
        return item._id == _id;
    });
}

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this._list = [];
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeChangeListener(CHANGE_EVENT, callback);
    }

    getList(){
        return this._list;
    }

    handleActions(action){
        switch(action.actionType){
            case TodoConstants.GET_ITEMS:
                this._list = action.todos;
                break;
            case TodoConstants.NEW_ITEM:
                this._list.push(action.todo);
                break;
            case TodoConstants.FINISH_ITEM:
                _updateTodo(action.todo, this._list);
                break;
            case TodoConstants.DELETE_ITEM:
                _deleteItem(action._id, this._list);
                break;
        }
        this.emit(CHANGE_EVENT)
    }
}

const todoStore = new TodoStore;
register(todoStore.handleActions.bind(todoStore));

export default todoStore;
