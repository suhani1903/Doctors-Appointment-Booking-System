import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Only check email, not password (never store password in token!)
    if (decoded.email === process.env.ADMIN_EMAIL) {
      next();
    } else {
      return res.json({ success: false, message: "Not Authorized Login Again" });
    }

  } catch (error) {
    console.log("Auth Error:", error.message);
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
};

export default authAdmin;
