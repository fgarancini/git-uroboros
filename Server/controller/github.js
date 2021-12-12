const gitService = require("../services/github");
const AppError = require("../utils/appErr");

const GetProfile = async (req, res, next) => {
  try {
    const profile = await gitService.GetProfile();
    res.status(200).json({
      status: "success",
      data: {
        profile,
      },
    });
  } catch (error) {
    return next(new AppError("Profile not found", 404));
  }
};

const GetRepo = async (req, res, next) => {
  try {
    const repo = await gitService.GetRepo();
    res.status(200).json({
      status: "success",
      data: {
        repo,
      },
    });
  } catch (error) {
    next(new AppError("Repository not found", 404));
  }
};

const GetCommits = async (req, res, next) => {
  try {
    const commits = await gitService.GetCommits();
    res.status(200).json({
      status: "success",
      data: {
        commits,
      },
    });
  } catch (error) {
    return next(new AppError("Commits not found", 404));
  }
};
module.exports = {
  GetProfile,
  GetCommits,
  GetRepo,
};
