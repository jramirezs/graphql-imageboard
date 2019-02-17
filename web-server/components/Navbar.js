import React from 'react';
import { Navbar, NavbarBrand, A } from '@bootstrap-styled/v4';
import Link from 'next/link';

const Nav = props => {
  return (
    <Navbar color="faded" light>
      <Link href="/" passHref>
        <NavbarBrand tag={A}>
          ImgBoard {props.title && `- ${props.title}`}
        </NavbarBrand>
      </Link>
    </Navbar>
  );
};

export default Nav;
