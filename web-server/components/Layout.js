import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BootstrapProvider from '@bootstrap-styled/provider';

import Navbar from '../components/Navbar';

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

const PageContainer = styled.div`
  padding: 1rem;
`;

class Layout extends Component {
  render() {
    return (
      <BootstrapProvider
        theme={{
          ['$font-family-sans-serif']: '"Nunito", Helvetica, sans-serif',
          ['$font-size-base']: '14px',
          ['$input-border-radius']: '0',
          ['$primary']: 'red',
        }}
      >
        <>
          <Global />
          <Navbar title={this.props.title} />
          <PageContainer>{this.props.children}</PageContainer>
        </>
      </BootstrapProvider>
    );
  }
}

export default Layout;
