import React, { useState } from "react";

function SearchInput({ data }) {
  const [input, setInput] = useState([]);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((user) => {
      return user.login.toLowerCase().includes(searchWord.toLowerCase());
    });
    setInput(newFilter);
  };
  return (
    <div className="my-5 text-center">
      <div className="text-center">
        <input
          type="text"
          className="px-10 md:px-20  py-2  rounded-lg"
          value={input}
          onChange={handleFilter}
        />
        <button className="bg-[#f64c72] p-2 rounded-lg shadow text-white">
          Search
        </button>
      </div>
      {input.length !== 0 && (
        <div className="container">
          {input.map((user) => {
            return (
              <ul key={user.id}>
                <div className="image">
                  <img src={user.avatar_url} alt={user.login} />
                </div>
                <li>
                  <h3 style={{ fontSize: "2rem", marginTop: "0rem" }}>
                    {user.login.charAt(0).toUpperCase() + user.login.slice(1)}
                  </h3>
                </li>
                <li>
                  <a href={user.html_url} target="_blank">
                    <button>
                      Profile <i className="fa fa-link"></i>
                    </button>
                  </a>
                </li>
                <li style={{ padding: "1rem 0rem" }}>
                  {user.followers_url.length} Followers
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
