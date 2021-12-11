const { Octokit, App } = require("octokit");

const AuthGit = () => {
  const octoKit = new Octokit({ auth: process.env.GIT_TOKEN });
  return octoKit;
};

const GetProfile = async () => {
  const octoKit = AuthGit();
  const profileReq = await octoKit.request("GET /user");
  const profile = {
    login: profileReq.data.login,
    avatar_url: profileReq.data.avatar_url,
    repos_url: profileReq.data.repos_url,
    name: profileReq.data.name,
    created_at: profileReq.data.created_at,
  };
  return profile;
};

module.exports = {
  GetProfile,
};
