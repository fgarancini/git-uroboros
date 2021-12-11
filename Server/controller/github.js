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

module.exports = {
  GetProfile,
};
