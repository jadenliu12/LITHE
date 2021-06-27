import axios from 'axios';

// Production server URL
const userBaseUrl = 'lithe.us-east-1.elasticbeanstalk.com/api';

export function listUsers() {
  let url = `${userBaseUrl}/users`;

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then(function (res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}


export function createUser(username, password, email) {
  let url = `${userBaseUrl}/users`;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      username,
      password,
      email
    })
    .then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}
