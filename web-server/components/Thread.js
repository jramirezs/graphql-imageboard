import React, { useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import styled from 'styled-components';
import { Button, Img, Row, Col } from '@bootstrap-styled/v4';

import ImageTag from '../components/ImageTag';
import Post from '../components/Post';
import ReplyModal from '../components/ReplyModal';

const Container = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme['$gray-lighter']};
`;

const Thread = ({ board, originalPost, replies, preview }) => {
  const [expanded, setExpanded] = useState(false);
  const [isRepliying, setIsRepliying] = useState(false);

  const image = originalPost.image;

  const fullSizeLink = `https://res.cloudinary.com/dwbib4ses/image/upload/dev-imageboard/${
    image.tag
  }`;

  const thumbnailLink = `https://res.cloudinary.com/dwbib4ses/image/upload/h_250/dev-imageboard/${
    image.tag
  }`;

  return (
    <Container>
      <div className="mb-3">
        <ImageTag
          url={fullSizeLink}
          name={image.name}
          size={image.size}
          height={image.height}
          width={image.width}
        />
      </div>
      <Row>
        <Col md="3" className="text-center">
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
            <div>
              <strong>
                {originalPost.title && `${originalPost.title} - `}
              </strong>
              <span>
                {dayjs(originalPost.createdAt).format('YYYY-MM-DD HH:mm:ss')}
              </span>
              {preview && (
                <Link href={`/thread?id=${originalPost.token}`} passHref>
                  <Button size="sm" className="ml-3" outline>
                    See all posts
                  </Button>
                </Link>
              )}
              <Button
                size="sm"
                className="ml-3"
                outline
                onClick={() => setIsRepliying(true)}
              >
                Reply
              </Button>
              <small className="float-right text-muted">
                Thread #{originalPost.token}
              </small>
            </div>
            <p className="my-3">{originalPost.text}</p>
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
      <ReplyModal
        board={board.code}
        thread={originalPost.token}
        isOpen={isRepliying}
        onClose={() => {
          setIsRepliying(false);
        }}
      />
    </Container>
  );
};

export default Thread;
