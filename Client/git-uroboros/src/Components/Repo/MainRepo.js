import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CardRepo from "./CardRepo";

const MainRepo = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [ErrorCatch, setError] = useState(false);
  const [repoInfo, setRepoInfo] = useState();

  useEffect(() => {
    GetRepo();
  }, []);

  const GetRepo = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/repo");
      const resJson = await response.json();
      if (!resJson.success) {
        throw new Error(resJson.message);
      }
      setRepoInfo(resJson.data.repo);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Fragment>
      {IsLoading && (
        <div className="center spinner">
          <Spinner animation="grow" />
        </div>
      )}
      {!IsLoading && repoInfo && <CardRepo repo={repoInfo} />}
    </Fragment>
  );
};

export default MainRepo;
