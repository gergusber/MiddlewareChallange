import moment from "moment";

import jwt from "jwt-simple";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  var decoded = jwt.decode(token, `${process.env.SECRET}`);

  if (decoded) {
    const currentTime = moment().valueOf();
    if (decoded.expires_in < currentTime) {
      //Token expirado
      res.status(401).json({
        statusCode: 401,
        error: "Unauthorized",
        message: "invalid secret or client id",
      });
    } else {
      const Headers = decoded.type + " " + decoded.token;
      req.headers["authorization"] = Headers;
      next();
    }
  }
};

export default verifyToken;
