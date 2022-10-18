import * as React from 'react';
import Layout from '../components/layout';
import CategoryProject from '../components/category_project';
import { graphql, useStaticQuery } from 'gatsby';
import { container, search, header } from './projects.module.css';

const ProjectsPage = (props) => {
  const [searchProject, setSearch] = React.useState('');
  const data = useProjectData();
  const items = getProjectItems(data);

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
        {items.map(([key, value], index) => {
          return <CategoryProject key={index} category={key} projects={value} />;
        })}
      </section>
    </Layout>
  );

  function getProjectItems(data) {
    return Object.entries(
      data.allWpPage.nodes
        .filter((node) => searchProject === '' || node.title.toLowerCase().search(searchProject.toLowerCase()) > -1)
        .reverse()
        .reduce((a, b) => {
          const category = b.projects.category;
          a[category] = category in a ? [...a[category], b] : [b];
          return a;
        }, {})
    );
  }

  function useProjectData() {
    return useStaticQuery(graphql`
      query MyQuery {
        allWpPage {
          nodes {
            projects {
              url
              category
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
  }
};

export default ProjectsPage;
