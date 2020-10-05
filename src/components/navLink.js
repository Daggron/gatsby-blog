import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropType from 'prop-types';

export default function NavLink({ to, children }) {
  return (
    <Link to={to} css={css`
      display: inline-block;
      font-size: 0.875rem;
    `}>
      {children}
    </Link>
  )
};

NavLink.defaultProps = {
  children: <>Read more &rarr;</>,
}

NavLink.propTypes = {
  to: PropType.string.isRequired,
  children: PropType.node,
}