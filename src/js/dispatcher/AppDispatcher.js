import { Dispatcher } from 'flux';
const dispatcher = new Dispatcher();

export function register(callback){
  return dispatcher.register(callback);
}

export function dispatch(action){
    console.log(action);
    dispatcher.dispatch(action);
}
