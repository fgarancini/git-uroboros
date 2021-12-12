import React, { Fragment, useEffect, useState } from "react";
import Commits from "./Commits";
import "./MainCommits.css";
const MainCommits = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [commits, setCommits] = useState();

  useEffect(() => {
    GetCommits();
  }, []);

  const GetCommits = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/commits");
    const resJson = await response.json();
    setCommits(resJson.data.commits);
    setIsLoading(false);
  };

  return (
    <div className="commit-list">
      {!IsLoading && commits && <Commits item={commits} />}
    </div>
  );
};

export default MainCommits;
