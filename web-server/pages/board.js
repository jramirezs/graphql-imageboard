import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Head from '../components/Head';
import Layout from '../components/Layout';

const GET_BOARD_THREADS = gql`
  query getBoardThreads($code: String!) {
    board(where: { code: $code }) {
      code
      description
      threads: threads(last: 10) {
        token
        originalPost: posts(where: { originalPost: true }) {
          token
          text
          image {
            name
            size
          }
        }
        lastPosts: posts(last: 3) {
          token
          text
          replyTo {
            token
          }
          image {
            name
            size
          }
        }
      }
    }
  }
`;

class BoardsPage extends React.Component {
  render() {
    return (
      <Query
        query={GET_BOARD_THREADS}
        variables={{ code: this.props.query.code }}
      >
        {({ data, error, loading }) => {
          if (error) return <p>Error</p>;
          if (loading) return <p>Loading...</p>;

          return (
            <React.Fragment>
              <Head title={data.board.description} />
              <Layout>
                <h3>{data.board.description}</h3>
                <div>
                  {data.board.threads.map(
                    ({ token, originalPost, lastPosts }) => (
                      <div key={originalPost[0].token}>
                        <div>
                          <h3>{originalPost[0].title}</h3>
                          <p>
                            <a href="#" style={{ marginRight: '0.5rem' }}>
                              {originalPost[0].token}
                            </a>
                            {originalPost[0].text}
                          </p>
                        </div>
                        {lastPosts
                          .filter(post => post.token !== token)
                          .map(post => (
                            <div style={{ marginLeft: '1rem' }} key={post.id}>
                              <h3>{post.title}</h3>
                              <p>
                                {post.replyTo && (
                                  <a href="#" style={{ marginRight: '0.5rem' }}>
                                    >{post.replyTo.token}
                                  </a>
                                )}
                                <span>{post.text}</span>
                              </p>
                            </div>
                          ))}
                        <hr />
                      </div>
                    )
                  )}
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
