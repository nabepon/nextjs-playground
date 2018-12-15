/** @jsx jsx */
import * as React from 'react';
import PagesNav from '../../components/PagesNav';
import OpenButton from '../../modules/Modals/OpenButton';
import * as api from '../../utils/api';
import style from '../../utils/styles/pink';
import PageContext, * as T from './PageContext';
import PageContextConsumer from './PageContextConsumer';

export default class IndexPage extends React.Component<T.Props, any> {
  public static async getInitialProps(): Promise<T.Props> {
    const sample = await api.sample();

    return {
      response: {
        sample,
      },
    };
  }

  public render() {
    if (typeof window !== 'undefined') {
      // tslint:disable-next-line
      console.log(this.props.response);
    }
    return (
      <PageContext.Provider value={this.props}>
        <div>
          <div css={style}>
            <h1>Testing Next.js App written in TypeScript with Jest</h1>
          </div>
          <PagesNav />
          <OpenButton />
          <PageContextConsumer />
        </div>
      </PageContext.Provider>
    );
  }
}
