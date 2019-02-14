import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider, Normalize } from '@smooth-ui/core-sc';

import Navbar from '../components/Navbar';

const Container = styled.div`
  padding: 1rem;
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider
        theme={{
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          primary: '#7d4cdb',
        }}
      >
        <>
          <Normalize />
          <Navbar />
          <Container>{this.props.children}</Container>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
