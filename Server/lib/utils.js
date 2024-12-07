const jwt = require('jsonwebtoken');

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "18d", 
  });

  
  res.cookie("jwt", token, {
    maxAge: 18 * 24 * 60 * 60 * 1000, 
    httpOnly: true,  
    sameSite: "strict",  
  });

  return token;
};

module.exports = generateToken;
