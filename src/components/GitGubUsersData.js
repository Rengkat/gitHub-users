import React, { useState, useEffect } from "react";
import GitHubTemplate from "./GitHubTemplate";
import SearchInput from "./SearchInput";

function GitGubUsersData() {
  const [data, setData] = useState("");

  const gitHubUsers = async () => {
    const respons = await fetch("https://api.github.com/users");
    const users = await respons.json();
    console.log(users);
    setData(users);
  };

  useEffect(() => {
    gitHubUsers();
  }, []);

  return (
    <>
      <SearchInput data={data} />
      <GitHubTemplate data={data} />
    </>
  );
}

export default GitGubUsersData;
