import React, { useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import styled from 'styled-components';
import { Button, Img, Row, Col } from '@bootstrap-styled/v4';

import ImageTag from '../components/ImageTag';
import Post from '../components/Post';

const Container = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const Thread = ({ originalPost, replies }) => {
  const [expanded, setExpanded] = useState(false);

  const image = originalPost.image;

  const fullSizeLink = `https://res.cloudinary.com/dwbib4ses/image/upload/dev-imageboard/${
    image.tag
  }`;

  const thumbnailLink = `https://res.cloudinary.com/dwbib4ses/image/upload/h_250/dev-imageboard/${
    image.tag
  }`;

  return (
    <Container>
      <div className="mb-1">
        <ImageTag
          url={fullSizeLink}
          name={image.name}
          size={image.size}
          height={image.height}
          width={image.width}
        />
      </div>
      <Row>
        <Col md="2">
          <a
            href={fullSizeLink}
            onClick={e => {
              e.preventDefault();
              setExpanded(!expanded);
            }}
          >
            <Img
              fluid={!expanded}
              alt={image.name}
              src={expanded ? fullSizeLink : thumbnailLink}
            />
          </a>
        </Col>
        {expanded && <div className="w-100 mb-3" />}
        <Col>
          <div>
            <span>
              <strong>
                {originalPost.title && `${originalPost.title} - `}
              </strong>
              <span>
                {dayjs(originalPost.createdAt).format('YYYY-MM-DD HH:mm:ss')} -{' '}
              </span>
              <Link href={`/thread?id=${originalPost.token}`}>
                <a>Thread #{originalPost.token}</a>
              </Link>
              <Button size="sm" className="ml-3" outline>
                Reply
              </Button>
            </span>
            <p>{originalPost.text}</p>
          </div>
          <div>
            {replies
              .filter(post => post.token !== originalPost.token)
              .map(post => (
                <Post
                  key={post.token}
                  token={post.token}
                  text={post.text}
                  image={post.image}
                  date={post.createdAt}
                  replyTo={post.replyTo}
                />
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Thread;
