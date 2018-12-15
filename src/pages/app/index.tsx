import * as React from 'react';
import PagesNav from '../../components/PagesNav';

interface Props {
  userAgent: string;
}

export default class CarsPage extends React.Component<Props, any> {
  public static async getInitialProps({ req }): Promise<Props> {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  public render() {
    return (
      <div>
        <div>{this.props.userAgent}</div>
        <PagesNav />
      </div>
    );
  }
}
