import axios from 'axios';

// Production server URL
const userInfoBaseUrl = 'http://lithe.us-east-1.elasticbeanstalk.com/api';

export function listUserInfo() {
  let url = `${userInfoBaseUrl}/usersInfo`;

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then(function (res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}


export function createUserInfo(username, weight, height, calories, water, sleep) {
  let url = `${userInfoBaseUrl}/usersInfo`;

  console.log(`Making POST request to: ${url}`);
  console.log(username, weight, height, calories, water, sleep)

  return axios
    .post(url, {
      username,
      weight,
      height,
      calories,
      water,
      sleep
    })
    .then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}
