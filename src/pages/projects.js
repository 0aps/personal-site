import * as React from 'react';
import Layout from '../components/layout';
import Project from '../components/project';
import { graphql, useStaticQuery } from 'gatsby';
import { container, projectList } from './projects.module.css';

const ProjectsPage = (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPage {
        nodes {
          projects {
            url
            image1 {
              mediaItemUrl
            }
            image2 {
              mediaItemUrl
            }
            image3 {
              mediaItemUrl
            }
            image4 {
              mediaItemUrl
            }
            image5 {
              mediaItemUrl
            }
            tags {
              name
            }
          }
          content
          title
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Projects" {...props} max={true}>
      <section className={container}>
        <h1>Projects</h1>
        <p>Click on a project for details</p>
        <input type="text" id="filter" name="filter" />
        <hr />
        <div className={projectList}>
          {data.allWpPage.nodes.map((node, index) => {
            return <Project key={index} project={node} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
