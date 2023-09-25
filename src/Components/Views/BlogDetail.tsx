import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogDetail = ({ post } : any) => {

  
  return (
    <div>
      <h1>{post.heading}</h1>
      <p>{post.description}</p>
      <Image width={500} height={500} alt='blog-image' src={post.mainImg} />
    </div>
  );
};

export default BlogDetail;
