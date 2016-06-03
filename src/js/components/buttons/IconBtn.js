import React from 'react';

class IconBtn extends React.Component{
    render(){
        let icon = `glyphicon glyphicon-${this.props.iconClass} pull-right`;
        return(
            <span className={ icon } onClick={ this.props.clickHandler} ></span>
        );
    }
}

IconBtn.propTypes = {
    clickHandler: React.PropTypes.func,
    iconClass: React.PropTypes.string.isRequired
}

export default IconBtn;
