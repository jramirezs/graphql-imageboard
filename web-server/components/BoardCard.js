import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  border: 1px solid #adb5bd;
  margin-bottom: 1rem;
  text-align: center;

  &:hover {
    border-color: #343a40;
  }

  a,
  a:hover,
  a:visited {
    color: #212529;
    text-decoration: none;
  }
`;

const BoardCard = ({ tag, title }) => {
  return (
    <Container>
      <Link href={`/board?code=${tag}`} passHref>
        <a>
          <div>
            <h2>{tag}</h2>
            <p>{title}</p>
          </div>
        </a>
      </Link>
    </Container>
  );
};

export default BoardCard;
