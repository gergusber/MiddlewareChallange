import fetcher from "node-fetch";
import moment from "moment";
import jwt from "jwt-simple";

const postLogin = async (req, res, next) => {
  const url = `${process.env.API_URL}/login`;
  fetcher(url, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    response
      .json()
      .then((x) => {
        if (x.statusCode) {
          return res.status(x.statusCode).json({
            statusCode: x.statusCode,
            error: x.error,
            message: x.message,
          });
        }

        const token = jwt.encode(
          {
            token: x.token,
            type: x.type,
            expires_in: moment().add(1, "hour").valueOf(),
          },
          `${process.env.SECRET}`
        );
        return res.status(200).json({
          token: token,
          type: x.type,
          expires_in: moment().add(1, "hour").valueOf(),
        });
      })
      .catch((r) => {
        return res.status(500).json(r);
      });
  });
};

export { postLogin };
