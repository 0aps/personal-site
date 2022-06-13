import * as React from 'react';
import Layout from '../components/layout';
import Project from '../components/project';
import { graphql, useStaticQuery } from 'gatsby';
import { container, projectList, search, header } from './projects.module.css';

const ProjectsPage = (props) => {
  const [searchProject, setSearch] = React.useState('');
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

  const items = data.allWpPage.nodes.filter(
    (node) => searchProject === '' || node.title.toLowerCase().search(searchProject.toLowerCase()) > -1
  );
  return (
    <Layout pageTitle="Projects" {...props} max={true}>
      <section className={container}>
        <h1 className={header}>Projects</h1>
        <h3 className="info text-center">Click on a project for details</h3>
        <input
          type="text"
          id="filter"
          name="filter"
          className={search}
          placeholder="Search by project name"
          value={searchProject}
          onChange={(e) => setSearch(e.target.value)}
        />
        <hr />
        <div className={projectList}>
          {items.map((node, index) => {
            return <Project key={index} project={node} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
