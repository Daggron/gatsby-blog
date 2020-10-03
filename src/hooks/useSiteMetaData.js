import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetaData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
