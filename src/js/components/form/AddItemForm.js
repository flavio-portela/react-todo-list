import React from 'react';
import TodoActions from '../../actions/TodoActions';

const _setText = (text)=>{
    return {text: text}
}

class AddItemForm extends React.Component{
    constructor(props){
        super();
        this.state = _setText('');
    }

    _handleTextChange(e){
        this.setState(_setText(e.target.value));
    }

    _handleSubmit(e){
        e.preventDefault();
        let text = this.state.text.trim();
        if(!text){
            return;
        }
        // add new item
        console.log('Calling action addTodo...');
        TodoActions.addTodo(text);
        // clear form
        this.setState(_setText(''));
    }

    render(){
        return(
            <div className='col-md-12 form_container'>
                <form className='' onSubmit={this._handleSubmit.bind(this)}>
                    <div className='form-group'>
                        <input type='text'
                            maxlength='10'
                            placeholder='Add new item'
                            value={this.state.text}
                            className='form-control'
                            onChange={this._handleTextChange.bind(this)}/>

                        <input type='submit'
                            className='form-control btn btn-primary'
                            value='ADD ITEM' />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddItemForm;
