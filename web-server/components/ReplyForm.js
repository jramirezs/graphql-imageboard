import React, { Component } from 'react';

import uuid from 'uuid/v4';
import { Input, FormGroup, Form, Button } from '@bootstrap-styled/v4';

import { Mutation } from 'react-apollo';

import { GET_THREAD_POSTS, GET_BOARD_THREADS } from '../data/queries';
import { CREATE_POST_MUTATION } from '../data/mutations';

import uploadFile from '../uploadFile';

class ReplyForm extends Component {
  initialState = {
    text: '',
    image: {
      tag: '',
      name: '',
      height: 0,
      width: 0,
      size: 0,
    },
  };
  constructor(props) {
    super(props);

    this.state = this.initialState;

    this.fileInput = React.createRef();
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async file => {
    const result = await uploadFile(file);
    this.setState({ image: { ...result } });
  };

  render() {
    return (
      <div>
        <Mutation
          mutation={CREATE_POST_MUTATION}
          refetchQueries={[
            {
              query: GET_THREAD_POSTS,
              variables: { token: this.props.thread },
            },
            {
              query: GET_BOARD_THREADS,
              variables: { code: this.props.board },
            },
          ]}
        >
          {(createPost, { loading, error }) => (
            <Form
              onSubmit={async e => {
                e.preventDefault();

                if (this.fileInput.current.files.length > 0) {
                  await this.uploadFile(this.fileInput.current.files[0]);
                }

                await createPost({
                  variables: {
                    token: uuid(),
                    thread: this.props.thread,
                    text: this.state.text,
                    imageTag: this.state.image.tag,
                    imageName: this.state.image.name,
                    imageSize: this.state.image.size,
                    imageHeight: this.state.image.height,
                    imageWidth: this.state.image.width,
                  },
                });

                this.setState({ ...this.initialState });

                // Reset file input (uncontrolled)
                this.fileInput.current.value = '';

                if (this.props.onCreated) {
                  this.props.onCreated();
                }
              }}
            >
              <FormGroup>
                <label htmlFor="content">Content</label>
                <Input
                  id="content"
                  type="textarea"
                  name="text"
                  placeholder="Content"
                  value={this.state.text}
                  onChange={this.handleChange}
                  required
                  style={{ height: '5rem' }}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="file">File</label>
                <input id="file" type="file" name="file" ref={this.fileInput} />
              </FormGroup>
              <Button color="primary" type="submit" disabled={loading}>
                Post
              </Button>
            </Form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default ReplyForm;
