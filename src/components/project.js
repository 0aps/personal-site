import * as React from 'react';
import './project.css';

const Project = ({ project }) => {
  return (
    <div className="project-item" onClick={onProjectClick}>
      <div className="header">
        <img src={project.projects.image1.mediaItemUrl} alt="thumbnail" />
      </div>
      <div className="body">
        <div className="title"><a href={project.projects.url}>{project.title}</a></div>
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

const onProjectClick = () => {

}

export default Project;
