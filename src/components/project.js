import * as React from 'react';
import './project.css';

const Project = ({ project }) => {
  return (
    <div className="project-item pointer" onClick={() => onProjectClick(project.projects.url)}>
      <div className="header">
        <img src={project.projects.image1.mediaItemUrl} alt="thumbnail" />
      </div>
      <div className="body">
        <div className="title">
          <span>{project.title}</span>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: project.content }} />
        <div className="tags">
          {project.projects.tags.map((tag, index) => {
            return (
              <div key={index} className="tag">
                {tag.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const onProjectClick = (url) => {
  window.open(url, '_blank').focus();
};

export default Project;
