import React from 'react';
import IconBtn from './buttons/IconBtn';
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
                    <IconBtn clickHandler={this._finishItem.bind(this)}
                        iconClass='ok'/>
                    <IconBtn clickHandler={this._deleteIten.bind(this)}
                        iconClass='trash'/>
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: React.PropTypes.object.isRequired
}

export default TodoItem;
