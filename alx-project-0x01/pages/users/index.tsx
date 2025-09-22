import Header from "@/components/layout/Header";
import { UserPageProps } from "@/interfaces";

import React from "react";
import UserCard from "@/components/common/UserCard";

const Users: React.FC<UserPageProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};



export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.org/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
