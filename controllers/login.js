import fetcher from "node-fetch";
import moment from "moment";
import jwt from "jwt-simple";

const postLogin = async (req, res, next) => {
  const url = `${process.env.API_URL}/login`;
  fetcher(url, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      response.json().then((x) => {
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
      });
    })
    .catch((err) => {
      err.json().then((errorMessage) => {
        return res.status(errorMessage.statusCode).json({
          code: errorMessage.statusCode,
          message: errorMessage.message,
        });
      });
    });
};

export { postLogin };
