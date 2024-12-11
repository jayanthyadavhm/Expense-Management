const getUser = async (req, res) => {
  try {
    const user = req.user; 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

   
    res.json({
      username: user.fullName,
      email: user.email,
    });
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getUser; 
