import fetcher from "node-fetch";

const getClients = async (req, res, next) => {
  const url = `${process.env.API_URL}/clients`;
  fetcher(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: req.headers["authorization"],
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      response
        .json()
        .then((clients) => {
          if (req.query.limit > 0) {
            return Array.from(clients).slice(0, req.query.limit);
          } else {
            return Array.from(clients).slice(0, 10);
          }
        })
        .then((r) => {
          return res.status(200).json(r);
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

const getClientsbyId = async (req, res, next) => {
  const id = req.params.id;
  const url = `${process.env.API_URL}/clients`;
  fetcher(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: req.headers["authorization"],
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      response
        .json()
        .then((x) => {
          return Array.from(x).filter((x) => x.id === id)[0];
        })
        .then((r) => {
          return res.status(200).json(r);
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

const getClientsbyIdAndPolicies = async (req, res, next) => {
  const id = req.params.id;
  const url = `${process.env.API_URL}/policies`;
  fetcher(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: req.headers["authorization"],
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      response
        .json()
        .then((x) => {
          return Array.from(x).filter((x) => x.clientId === id);
        })
        .then((r) => {
          return res.status(200).json(r);
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

export { getClients, getClientsbyId, getClientsbyIdAndPolicies };
