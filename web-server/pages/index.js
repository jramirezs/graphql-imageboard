import React from 'react';
import { Query } from 'react-apollo';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import gql from 'graphql-tag';

import Head from '../components/Head';
import Layout from '../components/Layout';

import BoardBox from '../components/BoardBox';

const BOARDS_QUERY = gql`
  query {
    boards(orderBy: code_ASC) {
      id
      code
      description
    }
  }
`;

class BoardsPage extends React.Component {
  async getInitialProps() {
    console.log('hello there');
  }
  render() {
    return (
      <React.Fragment>
        <Head title="Boards" />
        <Layout>
          <Query query={BOARDS_QUERY} variables={{ id: this.props.id }}>
            {({ data, error, loading }) => {
              if (error) return <p>Error</p>;
              if (loading) return <p>Loading...</p>;

              return (
                <Grid textAlign="center">
                  <Row>
                    {data.boards.map(board => (
                      <Col key={board.id} md={4}>
                        <BoardBox tag={board.code} title={board.description} />
                      </Col>
                    ))}
                  </Row>
                </Grid>
              );
            }}
          </Query>
        </Layout>
      </React.Fragment>
    );
  }
}

export default BoardsPage;
