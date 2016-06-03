import React from 'react';
import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';

export default ( InnerComponent, stateCallback ) => class extends React.Component
{
    constructor(props){
        super(props);
        this.state = stateCallback( props );
        this._onTodosChange = this._onTodosChange.bind(this);
        TodoStore.addChangeListener(this._onTodosChange);
    }

    componentDidMount(){
        if(!this.state.todos.length){
            console.log('Calling action getTodos...');
            TodoActions.getTodos();
        }
    }

    componentWillUnmount(){
        TodoStore.removeChangeListener( this._onTodosChange );
    }

    _onTodosChange(){
        console.log('Updating state from view..');
        this.setState( stateCallback( this.props ) );
    }

    render(){
        return <InnerComponent {...this.state}  {...this.props} />
    }
}
