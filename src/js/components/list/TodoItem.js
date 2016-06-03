import React from 'react';
import IconBtn from './buttons/IconBtn';
import TodoActions from '../../actions/TodoActions';

const classNames = require('classnames');

class TodoItem extends React.Component
{
    _finishTodo(){
        // do not trigger action if item is already done
        if(this.props.todo.done){
            return;
        }
        TodoActions.finishTodo(this.props.todo._id);
    }

    _deleteTodo(){
        TodoActions.deleteTodo(this.props.todo._id);
    }

    render(){
        let getClassName = (done) => classNames( 'item', { 'item--done': done } );
        return(
            <div className={ getClassName(this.props.todo.done) }>
                <div className='item__content'>
                    <span className='item__content__text'>
                        { this.props.todo.description }
                    </span>
                    <IconBtn clickHandler={ this._finishTodo.bind(this) }
                        iconClass='ok'/>
                    <IconBtn clickHandler={ this._deleteTodo.bind(this) }
                        iconClass='trash'/>
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: React.PropTypes.object.isRequired
}

export default TodoItem;
