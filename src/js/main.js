require('../css/styles.styl');

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/list/TodoList';

ReactDOM.render(<TodoList />, document.getElementById('app'));
