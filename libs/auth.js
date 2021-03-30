import moment from "moment";

import jwt from "jwt-simple";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    var decoded = jwt.decode(token, `${process.env.SECRET}`);

    if (decoded) {
      const currentTime = moment().valueOf();
      if (decoded.expires_in < currentTime) {
        res.status(401).json({
          code: 401,
          message: "invalid secret or client id",
        });
      } else {
        const Headers = decoded.type + " " + decoded.token;
        req.headers["authorization"] = Headers;
        next();
      }
    }
  } catch (err) {
    return res.status(400).json({
      code: 400,
      message: "Bad Request",
    });
  }
};

export default verifyToken;
