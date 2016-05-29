import {dispatch, register} from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import { EventEmitter } from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'list_updated';

const _addNewItem = (description, list) =>{
    let id = _.uniqueId();
    list.push({
        id,
        description,
        inProgress: true
    });
}

const _finishItem = (id, list) =>{
    list.map((item)=>{
        if(item.id == id){
            item.inProgress = false;
        }
        return item;
    });
}

const _deleteItem = (id, list) =>{
    _.remove(list, (item) =>{
        return item.id == id;
    });
}

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this._list = [
            {id: _.uniqueId(), description: 'This is the first item', inProgress: true}
        ];
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
            case TodoConstants.NEW_ITEM:
                _addNewItem(action.description, this._list);
                break;
            case TodoConstants.FINISH_ITEM:
                _finishItem(action.id, this._list);
                break;
            case TodoConstants.DELETE_ITEM:
                _deleteItem(action.id, this._list);
                break;
        }
        this.emit(CHANGE_EVENT)
    }
}

const todoStore = new TodoStore;
register(todoStore.handleActions.bind(todoStore));

export default todoStore;
