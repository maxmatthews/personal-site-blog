import React from 'react';

import favicon from './favicon.ico';

export default class HTML extends React.Component {
  randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
        </head>
        <body {...this.props.bodyAttributes}>
        <style
          dangerouslySetInnerHTML={{
            __html: [
              'body {',
              `  background-image: url(${require(`./bgs/bg-0${this.randNum(
                1,
                50
              )}.jpg`)}) !important;
              background-repeat: no-repeat;
              background-size: cover;`,
              '}',
            ].join('\n'),
          }}
        />
        {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            style={{maxHeight:"100vh", overflowY: "scroll", padding: "50px 0", "WebkitOverflowScrolling": "touch"}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
