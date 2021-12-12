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
    html_url: profileReq.data.html_url,
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

const GetCommits = async () => {
  const octoKit = AuthGit();
  const commitsReq = await octoKit.request(
    "GET /repos/fgarancini/git-uroboros/commits"
  );

  const commits = commitsReq.data.map((commitInfo) => {
    const commit = {
      sha: commitInfo.sha,
      html_url: commitInfo.html_url,
      author: commitInfo.commit.author.name,
      message: commitInfo.commit.message,
    };
    return commit;
  });

  return commits;
};

module.exports = {
  GetProfile,
  GetCommits,
  GetRepo,
};
