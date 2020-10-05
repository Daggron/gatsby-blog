import { Link } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PostAbbrev from '../components/Post-Abbrev';
import usePost from '../hooks/usePost';

export default () => {
  const posts = usePost();
  return (
    <>
      <Hero />
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
    </>
  );
};
