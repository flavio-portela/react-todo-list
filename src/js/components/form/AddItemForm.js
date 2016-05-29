import React from 'react';
import TodoActions from '../../actions/TodoActions';

class AddItemForm extends React.Component{
    constructor(props){
        super();
        this._handleTextChange = this._handleTextChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this.state = {
            text: ''
        };
    }

    _handleTextChange(e){
        this.setState({
            text: e.target.value
        });
    }

    _handleSubmit(e){
        e.preventDefault();
        let text = this.state.text.trim();
        if(!text){
            return;
        }
        // add new item
        TodoActions.newItem(text);

        // clear form
        this.setState({
            text: ''
        });
    }

    render(){
        return(
            <div className='col-md-12 form_container'>
                <form className='' onSubmit={this._handleSubmit}>
                    <div className='form-group'>
                        <input type='text'
                            maxlength='10'
                            placeholder='Add new item'
                            value={this.state.text}
                            className='form-control'
                            onChange={this._handleTextChange}/>

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
