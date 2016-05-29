import {dispatch, register} from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import { EventEmitter } from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'list_updated';

var _list = [
    {id: 1, description: 'This is the first item', inProgress: true}
];

const _addNewItem = (description) =>{
    let id = ( _list.reduce((x, y) => { return (x.id > y.id) ? x.id : y.id }, 0) ) + 1;
    _list.push({
        id,
        description,
        inProgress: true
    });
}

const _finishItem = (id) =>{
    _list.map((item)=>{
        if(item.id == id){
            item.inProgress = false;
        }
        return item;
    });
}

const _deleteItem = (id) =>{
    _.remove(_list, (item) =>{
        return item.id == id;
    });
}

const TodoStore = Object.assign(EventEmitter.prototype, {
    emitChange(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback){
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    getList(){
        return _list;
    },

    dispatcherIndex: register(function(action){
        switch(action.actionType){
            case TodoConstants.NEW_ITEM:
                _addNewItem(action.description);
                break;
            case TodoConstants.FINISH_ITEM:
                _finishItem(action.id);
                break;
            case TodoConstants.DELETE_ITEM:
                _deleteItem(action.id);
                break;
        }
        TodoStore.emitChange();
    })
});

export default TodoStore;
