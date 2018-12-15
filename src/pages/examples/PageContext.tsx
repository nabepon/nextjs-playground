import * as React from 'react';
export interface Props {
  response: object;
}
const initialState: Props = { response: {} };
const PageContext = React.createContext(initialState);
export default PageContext;
