const getProfile = async (req, res) => {
    try {
      const user = req.user;
      res.status(200).json({
        success: true,
        fullName,
        email
      });
    } catch (error) {
      console.error("Error in getProfile controller:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports =getProfile;
  