import fetcher from "node-fetch";

const getPolicies = async (req, res, next) => {
  const url = `${process.env.API_URL}/policies`;
  fetcher(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: req.headers["authorization"],
    },
  }).then((response) => {
    response
      .json()
      .then((x) => {
        console.log(req.query.limit);
        if (req.query.limit > 0) {
          return Array.from(x).slice(0, req.query.limit);
        } else {
          return Array.from(x).slice(0, 10);
        }
      })
      .then((r) => {
        return res.status(200).json(r);
      });
  });
};

const getPolicybyId = async (req, res, next) => {
  const id = req.params.id;
  const url = `${process.env.API_URL}/policies`;
  fetcher(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: req.headers["authorization"],
    },
  }).then((response) => {
    response
      .json()
      .then((x) => {
        return Array.from(x).filter((x) => x.id === id)[0];
      })
      .then((r) => {
        return res.status(200).json(r);
      });
  });
};

export { getPolicies, getPolicybyId };
