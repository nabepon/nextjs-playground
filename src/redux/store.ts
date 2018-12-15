import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunkMiddleware from 'redux-thunk';
import modal, { State as ModalState } from '../modules/Modals/reducer';

export interface StoreState {
  modal: ModalState;
}

export const initStore = () => {
  return createStore(
    combineReducers<StoreState>({
      modal,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
