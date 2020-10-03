import { css } from '@emotion/core'
import React from 'react'
import NavLink from './navLink'

export default function PostAbbrev({ post }) {
  return (
    <article css={css`
      border-bottom: 1px solid #ddd;
      margin-bottom: 0.75rem;
      padding-bottom: 1rem
    `}>
      <h3>
        { post.title }
      </h3>
      <p>
        { post.excerpt }
      </p>
      <NavLink to={post.slug} />
    </article>
  )
}
