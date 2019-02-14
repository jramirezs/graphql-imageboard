import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'Imageboard'}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" href="/hiring/static/favicon.ico" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
    />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
};

export default Head;
