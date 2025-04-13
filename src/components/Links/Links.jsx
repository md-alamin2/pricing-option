import React from "react";

const Links = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-slate-500">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Links;
