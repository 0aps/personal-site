import * as React from 'react';
import { projectItem, header, body, title, description, tags } from './project.module.css';

const Project = ({ project }) => {
  return (
    <div className={projectItem}>
      <div className={header}></div>
      <div className={body}>
        <div className={title}>{project.title}</div>
        <div className={description}></div>
        <div className={tags}></div>
      </div>
    </div>
  );
};

export default Project;
