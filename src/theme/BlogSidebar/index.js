// src/theme/BlogSidebar/index.js
import React from 'react';

export default function BlogSidebar({sidebar}) {
  const posts = sidebar.items;
  
 const parseDate = (permalink) => {
 const monthMap = {
   'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
   'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
 };

 // Try different date formats
 const standardDate = permalink.match(/(\d{4})-(\d{2})-(\d{2})/);
 const textDate = permalink.match(/(\d{4})-([a-z]{3})-(\d{2})/);
 const longDate = permalink.match(/(\d{4}).*?(\d{1,2}).*?August/i); // Added for August format

 if (standardDate) {
   return {
     year: parseInt(standardDate[1]),
     month: parseInt(standardDate[2]) - 1
   };
 } else if (textDate) {
   return {
     year: parseInt(textDate[1]),
     month: monthMap[textDate[2].toLowerCase()]
   };
 } else if (longDate) {
   return {
     year: parseInt(longDate[1]),
     month: 7 // August is month 7 (0-based)
   };
 }
 return null;
};

  const groupPostsByYearAndMonth = (posts) => {
    const grouped = {};
    posts.forEach(post => {
      const date = parseDate(post.permalink);
      if (!date) return;
      
      const {year, month} = date;
      if (!grouped[year]) grouped[year] = {};
      if (!grouped[year][month]) grouped[year][month] = [];
      grouped[year][month].push(post);
    });
    return grouped;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const groupedPosts = groupPostsByYearAndMonth(posts);

  return (
    <nav className="sidebar">
      <h3>Recent Posts</h3>
      {Object.entries(groupedPosts)
        .sort(([a], [b]) => b - a)
        .map(([year, months]) => (
          <div key={year}>
            <h4>{year}</h4>
            {Object.entries(months)
              .sort(([a], [b]) => b - a)
              .map(([month, posts]) => (
                <div key={month} style={{marginLeft: '1rem'}}>
                  <h5>{monthNames[parseInt(month)]}</h5>
                  <ul>
                    {posts.map(post => (
                      <li key={post.permalink}>
                        <a href={post.permalink}>{post.title}</a>
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
