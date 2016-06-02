import TodoConstants from '../constants/TodoConstants';
import {dispatch, register} from '../dispatcher/AppDispatcher';
import axios from 'axios';

export default{

    getItems(){
        axios.get('/api/todos').then((response) => {
            dispatch({
                actionType: TodoConstants.GET_ITEMS,
                todos: response.data
            });
        }).catch((response) => {
            console.error(response);
        });
    },

    newItem(text){
        axios.post('/api/todos', {
            text: text
        }).then((response) => {
            dispatch({
                actionType: TodoConstants.NEW_ITEM,
                todo: response.data
            });
        }).catch((response) => {
            console.error(response);
        });
    },

    deleteItem(_id){
        axios({
            method: 'DELETE',
            url: '/api/todos',
            data: {
                _id: _id
            }
        }).then((response) => {
            dispatch({
                actionType: TodoConstants.DELETE_ITEM,
                _id: _id
            });
        }).catch((response) => {
            console.error(response);
        })

    },

    finishItem(_id){
        axios.patch('/api/todos', {
            _id: _id,
            done: true
        }).then((response) => {
            dispatch({
                actionType: TodoConstants.FINISH_ITEM,
                todo: response.data
            });
        }).catch((response) => {
            console.error(response);
        })

    }
}
