import gql from 'graphql-tag';

export const CREATE_THREAD_MUTATION = gql`
  mutation CREATE_THREAD_MUTATION(
    $token: String!
    $board: String!
    $title: String
    $text: String!
    $imageTag: String!
    $imageName: String!
    $imageSize: Int!
    $imageHeight: Int!
    $imageWidth: Int!
  ) {
    createThread(
      data: {
        token: $token
        posts: {
          create: {
            token: $token
            title: $title
            text: $text
            originalPost: true
            image: {
              create: {
                tag: $imageTag
                name: $imageName
                size: $imageSize
                height: $imageHeight
                width: $imageWidth
              }
            }
          }
        }
        board: { connect: { code: $board } }
      }
    ) {
      id
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $token: String!
    $thread: String!
    $text: String!
    $imageTag: String!
    $imageName: String!
    $imageSize: Int!
    $imageHeight: Int!
    $imageWidth: Int!
  ) {
    createPost(
      data: {
        token: $token
        text: $text
        originalPost: true
        image: {
          create: {
            tag: $imageTag
            name: $imageName
            size: $imageSize
            height: $imageHeight
            width: $imageWidth
          }
        }
        thread: { connect: { token: $thread } }
      }
    ) {
      id
    }

    updateThread(data: { archived: false }, where: { token: $thread }) {
      id
    }
  }
`;
