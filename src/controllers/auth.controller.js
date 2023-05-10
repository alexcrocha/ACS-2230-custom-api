const register = async (req, res) => {
  res.status(200).json({
    message: "Register Successful!",
  });
};

const login = async (req, res) => {
  res.status(200).json({
    message: "Login Successful!",
  });
};

const logout = async (req, res) => {
  res.status(200).json({
    message: "Bye!",
  });
};

module.exports = {
  register,
  login,
  logout,
};
