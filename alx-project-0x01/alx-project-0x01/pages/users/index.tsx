import Header from "@/components/layout/Header";

import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserPageProps } from "@/interfaces/index";

const UsersPage: React.FC<UserPageProps> = ({ posts }) => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
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

export default UsersPage;
