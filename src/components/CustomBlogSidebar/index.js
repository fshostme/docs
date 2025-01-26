// src/components/CustomBlogSidebar/index.js
import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

function CustomBlogSidebar() {
  const { blogs } = usePluginData('docusaurus-plugin-content-blog');
  
  const groupPostsByYearAndMonth = (posts) => {
    const grouped = {};
    
    posts.forEach(post => {
      const date = new Date(post.metadata.date);
      const year = date.getFullYear();
      const month = date.getMonth();
      
      if (!grouped[year]) {
        grouped[year] = {};
      }
      if (!grouped[year][month]) {
        grouped[year][month] = [];
      }
      
      grouped[year][month].push(post);
    });
    
    return grouped;
  };

  const groupedPosts = groupPostsByYearAndMonth(blogs);
  const years = Object.keys(groupedPosts).sort((a, b) => b - a);

  return (
    <nav className={clsx(styles.sidebar, 'thin-scrollbar')}>
      <h3 className={styles.sidebarTitle}>
        {translate({
          id: 'theme.blog.sidebar.recentPosts',
          message: 'Recent Posts',
        })}
      </h3>
      {years.map(year => (
        <div key={year}>
          <h4 className={styles.yearTitle}>{year}</h4>
          {Object.entries(groupedPosts[year])
            .sort(([a], [b]) => b - a)
            .map(([month, posts]) => (
              <div key={month} className={styles.monthGroup}>
                <h5 className={styles.monthTitle}>
                  {new Date(0, month).toLocaleString('default', { month: 'long' })}
                </h5>
                <ul className={styles.postsList}>
                  {posts.map(post => (
                    <li key={post.id}>
                      <a href={post.metadata.permalink}>{post.metadata.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </nav>
  );
}

export default CustomBlogSidebar;
