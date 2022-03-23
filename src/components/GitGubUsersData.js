import React, { useState, useEffect } from "react";
import GitHubTemplate from "./GitHubTemplate";
import SearchInput from "./SearchInput";

function GitGubUsersData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const gitHubUsers = async () => {
    setLoading(true);
    try {
      const respons = await fetch("https://api.github.com/users");
      const users = await respons.json();
      setLoading(false);
      setData(users);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    gitHubUsers();
  }, []);

  return (
    <>
      <SearchInput data={data} />
      <GitHubTemplate data={data} error={error.message} />
    </>
  );
}

export default GitGubUsersData;
