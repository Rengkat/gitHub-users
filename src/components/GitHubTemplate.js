import React from "react";

function GitHubTemplate({ data, error }) {
  return (
    <div className="grid w-full">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 mx-auto gap-5 ">
        {data.map((user) => (
          <ul
            className="bg-[#2b6777] max-w-sm flex flex-col items-center rounded-lg shadow-md"
            key={user.id}>
            <div>
              <h1>{error}</h1>
            </div>
            <div className="w-40 h-40 py-5">
              <img
                className="rounded-full "
                src={user.avatar_url}
                alt={user.login}
              />
            </div>
            <li>
              <h3
                className="py-3"
                style={{ fontSize: "2rem", marginTop: "0rem" }}>
                {user.login.charAt(0).toUpperCase() + user.login.slice(1)}
              </h3>
            </li>
            <li>
              <a
                className="bg-[#f64c72] p-2 rounded-lg shadow text-white"
                href={user.html_url}
                target="_blank">
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
    </div>
  );
}

export default GitHubTemplate;
