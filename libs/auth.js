import moment from "moment";

import jwt from "jwt-simple";

const verifyToken = (req, res, next) => {
  //   console.log("VERIFY TOKEN");
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1]; //[1]TOKEN
  var decoded = jwt.decode(token, `${process.env.SECRET}`);
  //   console.log("DECODED DATA", decoded);

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
