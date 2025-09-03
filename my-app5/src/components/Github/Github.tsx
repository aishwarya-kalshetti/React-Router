import React from "react";
import { useLoaderData } from "react-router-dom";
import '../../App.css'

interface GithubData {
  followers: number;
  avatar_url: string;
}

function Github() {
  const data = useLoaderData() as GithubData;

  return (
    <div className="github-container">
      <h2>Github Followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="GitHub avatar" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aishwarya-kalshetti");
  return response.json();
};
