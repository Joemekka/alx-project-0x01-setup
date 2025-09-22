import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

import React from "react";
import UserCard from "@/components/common/UserCard";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <UserCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
