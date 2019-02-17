import gql from 'graphql-tag';

export const GET_BOARDS = gql`
  query {
    boards(orderBy: code_ASC) {
      id
      code
      description
    }
  }
`;

export const GET_BOARD_THREADS = gql`
  query getBoardThreads($code: String!) {
    board(where: { code: $code }) {
      id
      code
      description
      threads: threads(orderBy: updatedAt_DESC, last: 10) {
        id
        token
        originalPost: posts(where: { originalPost: true }) {
          id
          token
          title
          text
          image {
            name
            size
            tag
            width
            height
          }
          createdAt
        }
        lastPosts: posts(last: 3) {
          id
          token
          text
          image {
            name
            size
            tag
            width
            height
          }
          createdAt
        }
      }
    }
  }
`;

export const GET_THREAD_POSTS = gql`
  query getThreadPosts($token: String!) {
    thread(where: { token: $token }) {
      token
      originalPost: posts(where: { originalPost: true }) {
        id
        token
        title
        text
        image {
          name
          size
          tag
          width
          height
        }
        createdAt
      }
      lastPosts: posts {
        id
        token
        text
        image {
          name
          size
          tag
          width
          height
        }
        createdAt
      }
      board {
        id
        code
        description
      }
    }
  }
`;
