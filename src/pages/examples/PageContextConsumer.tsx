/** @jsx jsx */
import { css } from '@emotion/core';
import PageContext from './PageContext';

const style = css`
  width: 100%;
  textarea {
    width: 100%;
    height: 500px;
  }
`;

export default function PageContextConsumer() {
  return (
    <PageContext.Consumer>
      {context => (
        <div css={style}>
          <div>PageContext</div>
          <textarea cols={30} rows={10}>
            {JSON.stringify(context.response, null, '  ')}
          </textarea>
        </div>
      )}
    </PageContext.Consumer>
  );
}
