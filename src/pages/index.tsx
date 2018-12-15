/** @jsx jsx */
import * as React from 'react';
import PagesNav from '../components/PagesNav';
import style from '../utils/styles/pink';

interface Props {
  userAgent: string;
}

export default class IndexPage extends React.Component<Props, any> {
  public static async getInitialProps({ req }): Promise<Props> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return {
      userAgent,
    };
  }

  public render() {
    return (
      <div>
        <div css={style}>
          <h1>Testing Next.js App written in TypeScript with Jest</h1>
        </div>
        <div>{this.props.userAgent}</div>
        <PagesNav />
      </div>
    );
  }
}
