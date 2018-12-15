import { jsx } from '@emotion/core';
import React from 'react';

declare var global: {
  jsx: any;
};

global.jsx = jsx;

export default function Wrapper(props) {
  return <div>{props.children}</div>;
}
