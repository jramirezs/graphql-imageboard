import React from 'react';
import styled from 'styled-components';
import { A } from '@bootstrap-styled/v4';
import Link from 'next/link';

const Container = styled.div`
  border: 1px solid #adb5bd;
  margin-bottom: 1rem;

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
        <A>
          <div className="text-center">
            <h2>{tag}</h2>
            <p>{title}</p>
          </div>
        </A>
      </Link>
    </Container>
  );
};

export default BoardCard;
