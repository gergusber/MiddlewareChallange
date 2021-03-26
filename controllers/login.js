import fetcher from "node-fetch";
const catchError = (error) => {
  console.log(error);
};

const postLogin = async (req, res, next) => {
  console.log("PASO POR LOGING");
  const body = {
    client_id: process.env.USER,
    client_secret: 2,
  };

  const url = `${process.env.API_URL}/login`;
  console.log(url);
  fetcher(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      // if (res.statusCode != 200) {
      //   {
      //     throw new Error(res.statusCode);
      //   }
      // }
      res.json();
    })
    .then((json) => console.log(json))
    .catch((err) => {
      console.log(err);
    });
  next();
};

export { postLogin };
