import React from 'react';
import DoneBtn from './buttons/DoneBtn';
import TodoActions from '../../actions/TodoActions';

const classNames = require('classnames');

class TodoItem extends React.Component{
    _markAsDone(){
        console.log(this.props.item);
        TodoActions.finishItem(this.props.item.id);
    }
    _getClassName(inProgress){
        return classNames('item', {'item--done': !inProgress});
    }
    render(){

        return(
            <div className={this._getClassName(this.props.item.inProgress)}>
                <div className='item__content'>
                    <span className='item__content__text'>{this.props.item.description}</span>
                    <DoneBtn clickHandler={this._markAsDone.bind(this)}/>
                    <span className='glyphicon glyphicon-trash pull-right'></span>
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: React.PropTypes.object.isRequired
}

export default TodoItem;
