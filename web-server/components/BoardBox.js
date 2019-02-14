import React from 'react';
import Link from 'next/link';

import Anchor from '../components/styled/Anchor';

const BoardBox = ({ tag, title }) => {
  return (
    <Link href={`/board?code=${tag}`} passHref>
      <Anchor>
        <div>
          <h2>{tag}</h2>
          <p>{title}</p>
        </div>
      </Anchor>
    </Link>
  );
};

export default BoardBox;
