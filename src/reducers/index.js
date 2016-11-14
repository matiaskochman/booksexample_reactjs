import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

// any key that is put in combineReducers is a key
// that will be in the global state
const rootReducer = combineReducers({
  books:BooksReducer,
  activeBook:ActiveBookReducer
});

export default rootReducer;
