import * as React from 'react';
import './project.css';
import Project from './project';
import { projectList } from '../pages/projects.module.css';
import info from '../images/icon-info.png';

const CategoryProject = ({ category, projects }) => {
  const categoryMap = {
    independent: {
      name: 'Independent',
      hint: 'Projects that I did on my own'
    },
    maintenance: {
      name: 'Maintenance',
      hint: 'Projects that I maintained, be adding new features o fixing bugs'
    },
    integration: {
      name: 'Integration',
      hint: 'Popular industry applications that I integrated with other services'
    }
  };

  return (
    <div>
      <div className="category-header">
        <h2 className="category-title">{categoryMap[category].name}</h2>
        <div className="tooltip">
          <img src={info} alt="info" height={20} width={20} />
          <span className="tooltip-text">
            <span>{categoryMap[category].hint}</span>
          </span>
        </div>
      </div>
      <div className={projectList}>
        {projects.map((node, index) => {
          return <Project key={`${category}_${index}`} project={node} />;
        })}
      </div>
    </div>
  );
};

export default CategoryProject;
