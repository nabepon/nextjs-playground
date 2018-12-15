import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ClickEvent, open } from './reducer';

export default connect(
  null,
  dispatch => ({
    open: bindActionCreators(open, dispatch),
  })
)(function OpenButton(props: { open: ClickEvent }) {
  return <span onClick={props.open}>ModalOpen</span>;
});
