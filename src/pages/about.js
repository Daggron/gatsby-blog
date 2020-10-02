import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <h1>
      About Me
    </h1>
    <p>
      This is my personal website
    </p>
    <Link to="/">
      &larr; Back to home
    </Link>
  </Layout>
);

export default About;