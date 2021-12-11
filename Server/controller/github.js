const gitService = require("../services/github");
const AppError = require("../utils/appErr");

const GetProfile = async (req, res, next) => {
  const profile = await gitService.GetProfile();
  if (!profile) {
    return next(new AppError("Profile not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      profile,
    },
  });
};

const GetRepo = async (req,res,next) => {
  const repo =  await gitService.GetRepo();
  if (!repo) {
    return next(new AppError("Repository not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      repo,
    },
  });
};
module.exports = {
  GetProfile,
  GetRepo
};
