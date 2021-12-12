import React, { Fragment, useEffect, useState } from "react";
import CardRepo from "./CardRepo";

const MainRepo = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [repoInfo, setRepoInfo] = useState();

  useEffect(() => {
    GetRepo();
  }, []);

  const GetRepo = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/repo");
    const resJson = await response.json();
    setRepoInfo(resJson.data.repo);
    setIsLoading(false);
  };

  return (
    <div>
      {!IsLoading && repoInfo && <CardRepo repo={repoInfo}></CardRepo>}
    </div>
  );
};

export default MainRepo;
