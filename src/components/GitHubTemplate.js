import React from "react";

function GitHubTemplate({ data }) {
  return (
    <div className="container">
      {data.map((user) => (
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
      ))}
    </div>
  );
}

export default GitHubTemplate;
