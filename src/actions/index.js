import createToast from "../factories/create-toast";

export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return ({
    type: 'BOOK_SELECTED',
    payload: book
  });
}

export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  };
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  };
}
