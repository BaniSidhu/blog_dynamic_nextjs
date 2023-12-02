import React from "react";
// import { useRouter } from "next/router";
const blogData = [
    {
      id: 1,
      slug: "top-eng",
      descrition: "Bassam Tanvir is in London",
    },
    {
      id: 2,
      slug: "top-bassam",
      descrition: "Bassam Tanvir is in TURKEY",
    },
    {
      id: 3,
      slug: "top-bani",
      descrition: "Bassam Tanvir is in kOREA",
    },
  ];
  
  export default function Blog({ params }: { params: { slug: string } }) {
    const selectedBlog = blogData.find((item) => item.slug === params.slug);
  
    if (!selectedBlog) {
      // Handle the case when the blog with the given slug is not found
      return <div>Blog not found</div>;
    }
  
    return <div>{selectedBlog.descrition}</div>;
  }
  