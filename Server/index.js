const dotenv = require("dotenv");
const { Octokit, App } = require("octokit");

dotenv.config({ path: "./.env" });

const octoKit = new Octokit({ auth: process.env.GIT_TOKEN });

const HelloUser = async (octoKit) => {
    const {
      data: { login },
    } = await octoKit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
}

HelloUser(octoKit);

const GetRepo = async (octoKit) => {
    const repo = await octoKit.request("GET /repos/fgarancini/git-uroboros/commits");
    console.log(repo);
}

GetRepo(octoKit);

