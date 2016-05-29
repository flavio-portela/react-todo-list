import React from 'react';

class DeleteBtn extends React.Component{
    render(){
        return(
            <span className='glyphicon glyphicon-trash pull-right'
                onClick={this.props.clickHandler}></span>
        );
    }
}

DeleteBtn.propTypes = {
    clickHandler: React.PropTypes.func
}

export default DeleteBtn;
