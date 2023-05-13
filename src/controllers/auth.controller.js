const { authService } = require("../services");

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    const userResponse = {
      id: user._id,
      username: user.username,
    };
    res.cookie("nToken", user.token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 900000,
    });
    res.status(200).json({
      message: "Register Successful!",
      user: userResponse,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body);
    const userResponse = {
      id: user._id,
      username: user.username,
    };
    res.cookie("nToken", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 900000,
    });
    res.status(200).json({
      message: "Login Successful!",
      user: userResponse,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("nToken");
    res.status(200).json({
      message: "Bye!",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  register,
  login,
  logout,
};
