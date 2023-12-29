import axios from "axios";

export function GET(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
      })
      .then(
        (response) => resolve(response),
        (err) => reject(err)
      )
      .catch((error) => reject(error));
  });
}
export function POST(url, params, header) {
  var headers = { "Content-Type": "application/json; charset=utf-8" };
  if (header) headers = header;
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: headers,
      })
      .then(
        (response) => resolve(response),
        (err) => reject(err)
      )
      .catch((error) => reject(error));
  });
}
export function DELETE(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        data: params,
      })
      .then(
        (response) => resolve(response),
        (err) => reject(err)
      )
      .catch((error) => reject(error));
  });
}
export function PATCH(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, params, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
      .then(
        (response) => resolve(response),
        (err) => reject(err)
      )
      .catch((error) => reject(error));
  });
}

export default {
  acswitchtimeGet() {
    return GET("/api/acswitchtime");
  },
  acswitchtimeSet(Query) {
    return POST("/api/acswitchtime", Query);
  },
  acoptGet() {
    return GET("/api/acopt");
  },
  acoptSet(Query) {
    return POST("/api/acopt", Query);
  },
  fridgeswGet() {
    return GET("/api/sw");
  },
  fridgeswSet(Query) {
    return POST("/api/sw", Query);
  },
  cfgGet() {
    return GET("/api/cfg");
  },
  cfgSet(Query) {
    return POST("/api/cfg", Query);
  },
  currtempGet() {
    return GET("/api/currtemp");
  },
  tp100Get() {
    return GET("/api/tp100");
  },
  envtp100Get() {
    return GET("/api/envtp100");
  },
  envtp100Set(Query) {
    return POST("/api/envtp100", Query);
  },
};
