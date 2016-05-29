import React from 'react';
import IconBtn from './buttons/IconBtn';
import TodoActions from '../../actions/TodoActions';

const classNames = require('classnames');

class TodoItem extends React.Component
{
    _finishItem(){
        // do not trigger action if item is already done
        if(!this.props.item.inProgress){
            return;
        }
        TodoActions.finishItem(this.props.item.id);
    }

    _deleteIten(){
        TodoActions.deleteItem(this.props.item.id);
    }

    render(){
        let getClassName = (inProgress) => classNames('item', {'item--done': !inProgress});
        return(
            <div className={getClassName(this.props.item.inProgress)}>
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
