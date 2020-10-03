import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropType from 'prop-types';

export default function NavLink({ to, text }) {
  return (
    <Link to={to} css={css`
      display: inline-block;
      font-size: 0.875rem;
    `}>
      {text}
    </Link>
  )
};

NavLink.defaultProps = {
  text: <>Read more &rarr;</>,
}

NavLink.propTypes = {
  to: PropType.string.isRequired,
  text: PropType.node,
}