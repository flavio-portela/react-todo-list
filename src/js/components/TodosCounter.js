import React from 'react';

class TodosCounter extends React.Component
{
    render(){
        function reducer(accumulator, todo){
            if(todo.done){
                accumulator++;
            }
            return accumulator;
        }

        return(
            <div className='col-md-12'>
                <div className="page-header">
                    <h2>Completed: { this.props.todos.reduce(reducer, 0) } <small>Total: { this.props.todos.length }</small></h2>
                </div>
            </div>
        );
    }
}

export default TodosCounter;
