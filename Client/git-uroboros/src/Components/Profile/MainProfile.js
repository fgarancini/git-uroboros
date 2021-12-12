import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ErrorModal from "../UIComponents/ErrorModal";
import CardProfile from "./CardProfile";

const MainProfile = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [ErrorCatch, setError] = useState(false);
  const [profileInfo, setProfile] = useState(undefined);

  useEffect(() => {
    GetProfile();
  }, []);

  const GetProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/profile");
      const resJson = await response.json();
      console.log(resJson);
      if (resJson.success === false) {
        throw new Error(resJson.message);
      }
      setProfile(resJson.data.profile);
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
      {!IsLoading && profileInfo && <CardProfile item={profileInfo} />}
    </Fragment>
  );
};

export default MainProfile;
