import React, { Fragment, useEffect, useState } from "react";
import CardProfile from "./CardProfile";

const MainProfile = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [profileInfo, setProfile] = useState();
  
  useEffect(() => {
    GetProfile();
  }, []);

  const GetProfile = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/profile");
    const resJson = await response.json();
    setProfile(resJson.data.profile);
    setIsLoading(false);
  };

  return (
    <Fragment>
      {!IsLoading && profileInfo && <CardProfile item={profileInfo} />}
    </Fragment>
  );
};

export default MainProfile;
