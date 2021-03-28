import fetcher from "node-fetch";
import moment from "moment";

const getClients = async (req, res, next) => {
  const url = `${process.env.API_URL}/policies`;
  //   fetcher(url, {
  //     method: "GET",
  //     body: JSON.stringify(req.query),
  //     headers: { "Content-Type": "application/json", authorization: "" },
  //   }).then((response) => {
  //     response
  //       .json()
  //       .then((x) => {
  //         return {
  //           token: x.token,
  //           type: x.type,
  //           expires_in: moment().add(1, "hour").valueOf(),
  //         };
  //       })
  //       .then((r) => {
  //         return res.status(200).json(r);
  //       });
  //   });
  return;
};

export { getClients };
