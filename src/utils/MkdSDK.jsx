import { tokenExpireError } from '../authContext'

export default function MkdSDK() {
  this._baseurl = "https://reacttask.mkdlabs.com";
  this._project_id = "reacttask";
  this._secret = "5fchxn5m8hbo6jcxiq3xddofodoacskye";
  this._table = "";
  this._custom = "";
  this._method = "";

  const raw = this._project_id + ":" + this._secret;
  let base64Encode = btoa(raw);

  this.setTable = function (table) {
    this._table = table;
  };

  this.login = async function (email, password, role) {
    const response = await fetch(`${this._baseurl}/v2/api/lambda/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-project": base64Encode,
      },
      body: JSON.stringify({ email, password, role })
    })

    const user = response.json()
    return user
  };

  this.getHeader = function () {
    return {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "x-project": base64Encode,
    };
  };

  this.baseUrl = function () {
    return this._baseurl;
  };

  this.callRestAPI = async function (payload, method) {
    const header = {
      "Content-Type": "application/json",
      "x-project": base64Encode,
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTg4NzAyMzYsImV4cCI6MTY1ODg3MzgzNn0.c4C2ooGV0j-LcZtwpJ8DVlwCwytLoP5QgQtKP2hJ7PI',
    };

    switch (method) {
      case "GET":
        const getResult = await fetch(
          this._baseurl + `/v1/api/rest/${this._table}/GET`,
          {
            method: "post",
            headers: header,
            body: JSON.stringify(payload),
          }
        );
        const jsonGet = await getResult.json();

        if (getResult.status === 401) {
          throw new Error(jsonGet.message);
        }

        if (getResult.status === 403) {
          throw new Error(jsonGet.message);
        }
        return jsonGet;

      case "PAGINATE":
        if (!payload.page) {
          payload.page = 1;
        }
        if (!payload.limit) {
          payload.limit = 10;
        }
        const paginateResult = await fetch(
          this._baseurl + '/v1/api/rest/videos/PAGINATE',
          {
            method: "post",
            headers: header,
            body: JSON.stringify(payload),
          }
        );
        const jsonPaginate = await paginateResult.json();
        console.log(jsonPaginate)

        if (paginateResult.status === 401) {
          throw new Error(jsonPaginate.message);
        }

        if (paginateResult.status === 403) {
          throw new Error(jsonPaginate.message);
        }
        return jsonPaginate;
      default:
        break;
    }
  };

  this.check = async function (role) {
    //TODO
    const response = await fetch(`${this._baseurl}/v2/api/lambda/check`, {
      method: "post",
      headers: this.getHeader(),
      body: JSON.stringify({ role })
    })
    const data = await response.json()

    console.log(data)
    return data
  };

  return this;
}
