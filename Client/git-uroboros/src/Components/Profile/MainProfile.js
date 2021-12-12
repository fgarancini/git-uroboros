import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CardProfile from "./CardProfile";

const MainProfile = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [ErrorCatch, setError] = useState(false);
  const [profileInfo, setProfile] = useState(undefined);

  useEffect(() => {
    GetProfile();
  }, []);

  const GetProfile = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/profile");
      const resJson = await response.json();
      if (!resJson.success) {
        throw new Error(resJson.message);
      }
      setProfile(resJson.data.profile);
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
      {!IsLoading && profileInfo && <CardProfile item={profileInfo} />}
    </Fragment>
  );
};

export default MainProfile;
