import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PostAbbrev from '../components/Post-Abbrev';
import usePost from '../hooks/usePost';

export default () => {
  const posts = usePost();
  return (
    <Layout>
      <h1>
        Home Page
      </h1>
      <p>
        Hello form abhay Sharma
      </p>
      {
        posts.map(eachPost => (
          <PostAbbrev key={eachPost.slug} post={eachPost}/>
        ))
      }
    </Layout>
  );
};
