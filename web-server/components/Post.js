import React, { useState } from 'react';
import dayjs from 'dayjs';

import styled from 'styled-components';
import { Button, Img, Row, Col } from '@bootstrap-styled/v4';

import ImageTag from '../components/ImageTag';

const Container = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: #f7f7f9;
`;

const Post = ({ token, image, text, date, replyTo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <div>
        <span>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')} - </span>
        <span>Post #{token}</span>
        <Button size="sm" className="ml-3 float-right" outline>
          Reply
        </Button>
      </div>
      <div>
        {image && (
          <div>
            <ImageTag
              url={fullSizeLink}
              name={image.name}
              size={image.size}
              height={image.height}
              width={image.width}
            />
          </div>
        )}
        <Row className="mt-2">
          {image && (
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
                  src={
                    expanded
                      ? `https://res.cloudinary.com/dwbib4ses/image/upload/dev-imageboard/${
                          image.tag
                        }`
                      : `https://res.cloudinary.com/dwbib4ses/image/upload/h_250/dev-imageboard/${
                          image.tag
                        }`
                  }
                />
              </a>
            </Col>
          )}
          {expanded && <div className="w-100 mb-3" />}
          <Col>
            {replyTo && <a href="#">>{replyTo.token}</a>}
            <span>{text}</span>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Post;
