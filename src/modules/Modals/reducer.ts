import * as React from 'react';

export interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

export const actionTypes = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
};

// ACTIONS
export type ClickEvent = (e: React.MouseEvent<any>) => (dispatch) => any;

export const open: ClickEvent = () => dispatch => {
  return dispatch({ type: actionTypes.OPEN });
};

export const close: ClickEvent = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSE });
};

// REDUCERS
export default function modal(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN:
      return { ...state, isOpen: true };
    case actionTypes.CLOSE:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
