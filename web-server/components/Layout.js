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

const Title = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme['$gray-lighter']};
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
        }}
      >
        <>
          <Global />
          <Navbar />
          {this.props.title && (
            <Title>
              <h2>{this.props.title}</h2>
            </Title>
          )}
          <PageContainer>{this.props.children}</PageContainer>
        </>
      </BootstrapProvider>
    );
  }
}

export default Layout;
