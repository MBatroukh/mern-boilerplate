import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
    </nav>

    <hr />
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  background: #ccc;
`;

export default Header;
