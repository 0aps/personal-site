import * as React from 'react';
import Layout from '../components/layout';
import About from '../components/about';
import '../components/global.css';

const IndexPage = (props) => {
  return (
    <Layout {...props}>
      <About />
    </Layout>
  );
};

export default IndexPage;
