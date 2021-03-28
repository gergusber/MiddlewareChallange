import fetcher from "node-fetch";
import moment from "moment";

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
        return {
          token: x.token,
          type: x.type,
          expires_in: moment().add(1, "hour").valueOf(),
        };
      })
      .then((r) => {
        return res.status(200).json(r);
      });
  });
};

export { postLogin };
