import TodoConstants from '../constants/TodoConstants';
import {dispatch, register} from '../dispatcher/AppDispatcher';

export default{
    getItems(){
        actionType: TodoConstants.GET_ITEMS
    }
    newItem(item){
        dispatch({
            actionType: TodoConstants.NEW_ITEM,
            description: item
        });
    },

    deleteItem(id){
        dispatch({
            actionType: TodoConstants.DELETE_ITEM,
            id: id
        });
    },

    finishItem(id){
        dispatch({
            actionType: TodoConstants.FINISH_ITEM,
            id: id
        });
    }
}
