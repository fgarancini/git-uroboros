import React, { Fragment, useEffect, useState } from "react";
import CardRepo from "./CardRepo";

const MainRepo = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [repoInfo, setRepoInfo] = useState();

  useEffect(() => {
    GetProfile();
  }, []);

  const GetProfile = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/repo");
    const resJson = await response.json();
    setRepoInfo(resJson.data.repo);
    setIsLoading(false);
  };

  return (
    <Fragment>
      {!IsLoading && repoInfo && <CardRepo repo={repoInfo}></CardRepo>}
    </Fragment>
  );
};

export default MainRepo;
