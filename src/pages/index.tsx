import * as React from 'react';
import PagesNav from '../components/PagesNav';
import dummyImage from '../utils/600x400.png';
import styles from './styles.scss';

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
        <div className={styles.sample}>
          <h1>Testing Next.js App written in TypeScript with Jest</h1>
        </div>
        <div>{this.props.userAgent}</div>
        <img src={dummyImage} />
        <PagesNav />
      </div>
    );
  }
}
