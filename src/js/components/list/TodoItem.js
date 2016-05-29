import React from 'react';
import DoneBtn from './buttons/DoneBtn';
import DeleteBtn from './buttons/DeleteBtn';
import TodoActions from '../../actions/TodoActions';

const classNames = require('classnames');

class TodoItem extends React.Component{
    _finishItem(){
        console.log(this.props.item);
        TodoActions.finishItem(this.props.item.id);
    }

    _deleteIten(){
        console.log(this.props.item);
        TodoActions.deleteItem(this.props.item.id);
    }

    _getClassName(inProgress){
        return classNames('item', {'item--done': !inProgress});
    }

    render(){
        return(
            <div className={this._getClassName(this.props.item.inProgress)}>
                <div className='item__content'>
                    <span className='item__content__text'>{this.props.item.description}</span>
                    <DoneBtn clickHandler={this._finishItem.bind(this)}/>
                    <DeleteBtn clickHandler={this._deleteIten.bind(this)} />
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: React.PropTypes.object.isRequired
}

export default TodoItem;
