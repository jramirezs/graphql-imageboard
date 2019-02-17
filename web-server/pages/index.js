import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from '@bootstrap-styled/v4';

import Head from '../components/Head';
import Layout from '../components/Layout';

import BoardCard from '../components/BoardCard';

import { GET_BOARDS } from '../data/queries';

class BoardsPage extends React.Component {
  async getInitialProps() {
    console.log('hello there');
  }
  render() {
    return (
      <React.Fragment>
        <Head title="Boards" />
        <Layout>
          <Query query={GET_BOARDS} variables={{ id: this.props.id }}>
            {({ data, error, loading }) => {
              if (error) return <p>Error</p>;
              if (loading) return <p>Loading...</p>;

              return (
                <Row>
                  {data.boards.map(board => (
                    <Col key={board.id} md={4}>
                      <BoardCard tag={board.code} title={board.description} />
                    </Col>
                  ))}
                </Row>
              );
            }}
          </Query>
        </Layout>
      </React.Fragment>
    );
  }
}

export default BoardsPage;
