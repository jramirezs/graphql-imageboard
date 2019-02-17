import React from 'react';
import Link from 'next/link';

import { Query } from 'react-apollo';
import { GET_THREAD_POSTS } from '../data/queries';

import Head from '../components/Head';
import Layout from '../components/Layout';
import Thread from '../components/Thread';
import ReplyForm from '../components/ReplyForm';

class ThreadsPage extends React.Component {
  render() {
    return (
      <Query
        query={GET_THREAD_POSTS}
        variables={{ token: this.props.query.id }}
      >
        {({ data, error, loading }) => {
          if (error) return <p>Error</p>;
          if (loading) return <p>Loading...</p>;

          const thread = data.thread;

          return (
            <React.Fragment>
              <Head title={thread.board.description} />
              <Layout
                title={`${thread.board.description} ${thread.board.code}`}
              >
                <div>
                  <Link href={`/board?code=${thread.board.code}`}>
                    <a>Back to board</a>
                  </Link>
                  <Thread
                    key={thread.token}
                    originalPost={thread.originalPost[0]}
                    replies={thread.lastPosts}
                  />
                </div>
                <div>
                  <h3>Create a new post</h3>
                  <ReplyForm
                    board={thread.board.code}
                    thread={this.props.query.id}
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

export default ThreadsPage;
