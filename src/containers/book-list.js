import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
import Toasts from './toasts';
import { addToast } from '../actions';

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (<li
                key={book.title}
                onClick={() => {
                  this.props.selectBook(book);
                  // this.props.addToast({ text: "Hello" });
                }}
                className="list-group-item">
                {book.title}
              </li>);
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
        <Toasts />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {books: state.books};
}

// Anything returned from this function will end up as mapStateToProps
// on the BookList container
function mapDispatchToProps(dispatch) {
  // When selectBook is called, the result should be passed to all of reducer_books.
  // 'dispatch' takes actions and flow them through reducers
  return bindActionCreators({ selectBook, addToast }, dispatch);
}
// return a container (smart component)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
