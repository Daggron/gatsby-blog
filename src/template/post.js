import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { css } from '@emotion/core';
import NavLink from '../components/navLink';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
 query ($slug: String!) {
   mdx (frontmatter: { slug: { eq: $slug } }) {
     frontmatter {
       title
       Author
     }
     body
    }
  }
`

export default function post({ data: { mdx : post } }) {
  return (
    <Layout>
      <h1>
        { post.frontmatter.title }
      </h1>
      <p>
        { post.frontmatter.Author }
      </p>
      <NavLink to="/">
        &larr; back to home
      </NavLink>
      <MDXRenderer>
        { post.body }
      </MDXRenderer>
    </Layout>
  )
}
