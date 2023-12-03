'use client'
import React from "react";


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
  // Use the slug directly from params
  const { slug } = params;

  // Find the corresponding blog item based on the slug
  const selectedBlog = blogData.find((item) => item.slug === slug);

  if (!selectedBlog) {
    // Handle the case when the blog with the given slug is not found
    return <div>Blog not found</div>;
  }


  // Rest of your component logic

  return (
    <div>
      {selectedBlog.descrition}
      {/* You can use move_to1 and move_to2 as needed */}
    </div>
  );
}
