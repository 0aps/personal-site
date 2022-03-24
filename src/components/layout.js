import * as React from 'react';
import { Link } from 'gatsby';
import { container, header, navLinks, navLinkItem, navLinkText, active, logo } from './layout.module.css';

const Layout = ({ pageTitle, children, uri }) => {
  return (
    <>
      <title>Sin Imaginación {pageTitle}</title>
      <header className={header}>
        <h1 className={logo}>Ángel Piña Santana</h1>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={`${navLinkText} ${uri === '/' ? active : ''}`}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={`${navLinkText} ${uri === '/projects' ? active : ''}`}>
                Projects
              </Link>
            </li>
            <li className={navLinkItem}>
              <a href="/blog" className={navLinkText} target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li className={navLinkItem}>
              <a
                href="https://0aps.me/blog/wp-content/uploads/CV-Ángel-Piña.pdf"
                className={navLinkText}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={container}>{children}</main>
    </>
  );
};
export default Layout;
