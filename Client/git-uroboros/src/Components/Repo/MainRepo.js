import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ErrorModal from "../UIComponents/ErrorModal";
import CardRepo from "./CardRepo";

const MainRepo = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [ErrorCatch, setError] = useState(false);
  const [repoInfo, setRepoInfo] = useState();

  useEffect(() => {
    GetRepo();
  }, []);

  const GetRepo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/repo");
      const resJson = await response.json();
      if (resJson.success === false) {
        throw new Error(resJson.message);
      }
      setRepoInfo(resJson.data.repo);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      {ErrorCatch && <ErrorModal error={ErrorCatch}/>}
      {IsLoading && (
        <div className="center spinner">
          <Spinner animation="grow" />
        </div>
      )}
      <div>{!IsLoading && repoInfo && <CardRepo repo={repoInfo} />}</div>
    </Fragment>
  );
};

export default MainRepo;
