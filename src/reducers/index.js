import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import ToastsReducer from './reducer_toasts';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  toasts: ToastsReducer
});

export default rootReducer;
