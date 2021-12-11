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

const GetRepo = async () => {
  const octoKit = AuthGit();
  const repoReq = await octoKit.request("GET /repos/fgarancini/git-uroboros");
  const repo = {
    full_name: repoReq.data.full_name,
    html_url: repoReq.data.html_url,
    created_at: repoReq.data.created_at,
    updated_at: repoReq.data.updated_at,
    visibility: repoReq.data.visibility,
  };
  return repo;
};

module.exports = {
  GetProfile,
  GetRepo
};
