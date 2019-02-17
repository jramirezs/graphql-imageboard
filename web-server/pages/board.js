import React from 'react';

import { Query } from 'react-apollo';
import { GET_BOARD_THREADS } from '../data/queries';

import Head from '../components/Head';
import Layout from '../components/Layout';
import Thread from '../components/Thread';
import ThreadForm from '../components/ThreadForm';

class BoardsPage extends React.Component {
  render() {
    return (
      <Query
        query={GET_BOARD_THREADS}
        // fetchPolicy="cache-and-network"
        variables={{ code: this.props.query.code }}
      >
        {({ data, error, loading }) => {
          if (error) return <p>Error</p>;
          if (loading) return <p>Loading...</p>;

          const board = data.board;

          return (
            <React.Fragment>
              <Head title={board.description} />
              <Layout title={`${board.description} ${board.code}`}>
                <div>
                  {board.threads.map(({ token, originalPost, lastPosts }) => (
                    <Thread
                      key={token}
                      originalPost={originalPost[0]}
                      replies={lastPosts}
                    />
                  ))}
                </div>
                <div>
                  <h3>Create a new thread</h3>
                  <ThreadForm
                    board={this.props.query.code}
                    onCreated={() => {
                      window.scrollTo(0, 0);
                    }}
                  />
                </div>
              </Layout>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default BoardsPage;
