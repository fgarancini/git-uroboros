import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ErrorModal from "../UIComponents/ErrorModal";
import Commits from "./Commits";
import "./MainCommits.css";
const MainCommits = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [ErrorCatch, setError] = useState(false);
  const [commits, setCommits] = useState();

  useEffect(() => {
    GetCommits();
  }, []);

  const GetCommits = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/commits");
      const resJson = await response.json();
      if (resJson.success === false) {
        throw new Error(resJson.message);
      }
      setCommits(resJson.data.commits);
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
      <div className="commit-list">
        {!IsLoading && commits && <Commits item={commits} />}
      </div>
    </Fragment>
  );
};

export default MainCommits;
