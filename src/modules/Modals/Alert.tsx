import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from '../../redux/store';
import { ClickEvent, close, open, State } from './reducer';

interface Actions {
  open: ClickEvent;
  close: ClickEvent;
}

const connected = connect(
  (state: StoreState): State => state.modal,
  (dispatch): Actions => ({
    open: bindActionCreators(open, dispatch),
    close: bindActionCreators(close, dispatch),
  })
)(
  class Alert extends React.Component<State & Actions, any> {
    public render() {
      if (!this.props.isOpen) {
        return null;
      }
      return (
        <div>
          <div>Alert</div>
          <div onClick={this.props.close}>CLOSE</div>
        </div>
      );
    }
  }
);

export default connected;
