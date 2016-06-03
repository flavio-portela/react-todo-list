import React from 'react';
import IconBtn from './buttons/IconBtn';
import TodoActions from '../actions/TodoActions';

const classNames = require('classnames');

class TodoItem extends React.Component
{
    _finishTodo(){
        console.log('Calling action toggleTodo...');
        TodoActions.toggleTodo(this.props.todo._id);
    }

    _deleteTodo(){
        console.log('Calling action deleteTodo...');
        TodoActions.deleteTodo(this.props.todo._id);
    }

    render(){
        let itemClassName = (done) => classNames( 'item', { 'item--done': done } );
        let doneBtnClassName = (done) => classNames( 'ok', { 'ok--done': done } );
        return(
            <div className={ itemClassName(this.props.todo.done) }>
                <div className='item__content'>
                    <span className='item__content__text'>
                        { this.props.todo.description }
                    </span>
                    <IconBtn clickHandler={ this._finishTodo.bind(this) }
                        iconClass={ doneBtnClassName(this.props.todo.done) } />
                    <IconBtn clickHandler={ this._deleteTodo.bind(this) }
                        iconClass='trash' />
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: React.PropTypes.object.isRequired
}

export default TodoItem;
