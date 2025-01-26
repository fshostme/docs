import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import { CustomBlogSidebar } from '@site/src/components/CustomBlogSidebar';

export default function BlogListPageWrapper(props) {
  return (
    <>
      <BlogListPage {...props} />
      <CustomBlogSidebar />
    </>
  );
}
