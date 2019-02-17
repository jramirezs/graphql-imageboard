import React from 'react';
import Link from 'next/link';
import { Button } from '@bootstrap-styled/v4';

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
            <>
              <Head title={thread.board.description} />
              <Layout
                title={`${thread.board.description} ${thread.board.code}`}
              >
                <div>
                  <div className="mb-3">
                    <Link href={`/board?code=${thread.board.code}`} passHref>
                      <Button size="sm" outline>
                        ⬅ Back to board
                      </Button>
                    </Link>
                  </div>
                  <Thread
                    key={thread.token}
                    board={thread.board}
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
            </>
          );
        }}
      </Query>
    );
  }
}

export default ThreadsPage;
