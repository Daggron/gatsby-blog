import { css } from '@emotion/core'
import React from 'react'
import NavLink from './navLink'
import Image from 'gatsby-image';
import { Link } from 'gatsby';

export default function PostAbbrev({ post }) {
  console.log(post);
  return (
    <article css={css`
      border-bottom: 1px solid #ddd;
      margin-bottom: 0.75rem;
      padding-bottom: 1rem;
      display: flex;
    `}>
      <Link to={post.slug} css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}>
        <Image fluid={post.image.childImageSharp.fluid} alt=""/>
      </Link>
      <div>
        <h3>
          { post.title }
        </h3>
        <p>
          { post.excerpt }
        </p>
        <NavLink to={post.slug} />
      </div>
    </article>
  )
}
