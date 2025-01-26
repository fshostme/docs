// src/components/CustomBlogSidebar.js
import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { groupBy } from 'lodash';

function CustomBlogSidebar({posts}) {
  const postsByYear = groupBy(posts, post => {
    const date = new Date(post.metadata.date);
    return date.getFullYear();
  });

  const groupByMonth = (yearPosts) => {
    return groupBy(yearPosts, post => {
      const date = new Date(post.metadata.date);
      return date.getMonth();
    });
  };

  return (
    <nav className="sidebar">
      <h2>Recent Posts</h2>
      {Object.entries(postsByYear)
        .sort(([a], [b]) => b - a)
        .map(([year, yearPosts]) => (
          <div key={year}>
            <h3>{year}</h3>
            {Object.entries(groupByMonth(yearPosts))
              .sort(([a], [b]) => b - a)
              .map(([month, monthPosts]) => (
                <div key={month} className="margin-left--sm">
                  <h4>{new Date(0, month).toLocaleString('default', {month: 'long'})}</h4>
                  <ul>
                    {monthPosts.map(post => (
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
