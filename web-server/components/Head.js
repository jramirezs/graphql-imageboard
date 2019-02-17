import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>ImgBoard {props.title ? ` - ${props.title}` : ''}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" href="/static/favicon.ico" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Nunito"
    />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
};

export default Head;
