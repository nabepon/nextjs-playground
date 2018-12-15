/** @jsx jsx */
import Link from 'next/link';
import * as React from 'react';

export default class PagesNav extends React.Component {
  public render() {
    return (
      <div>
        Navi[--
        <Link href="/">
          <span>index</span>
        </Link>
        --
        <Link href="/app">
          <span>app</span>
        </Link>
        --
        <Link href="/examples">
          <span>examples</span>
        </Link>
        --]
      </div>
    );
  }
}
