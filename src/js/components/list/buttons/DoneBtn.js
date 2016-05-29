import React from 'react';

class DoneBtn extends React.Component{
    render(){
        return(
            <span className='glyphicon glyphicon-ok pull-right' onClick={this.props.clickHandler}></span>
        );
    }
}

DoneBtn.propTypes = {
    clickHandler: React.PropTypes.func
}

export default DoneBtn;
