import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>
      Home Page
    </h1>
    <p>
      Hello form abhay Sharma
    </p>
    <Link to="/about">
      go to about &rarr;
    </Link>
  </Layout>
);
