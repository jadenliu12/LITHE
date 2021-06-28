import axios from 'axios';

// Production server URL
const userAvatarBaseUrl = 'http://lithe.us-east-1.elasticbeanstalk.com/api';

export function listUserAvatar() {
  let url = `${userAvatarBaseUrl}/usersAvatar`;

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then(function (res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}


export function createUserAvatar(user_id, hair, eye, nose, mouth, body) {
  let url = `${userAvatarBaseUrl}/usersAvatar`;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      user_id,
      hair,
      eye,
      nose,
      mouth,
      body
    })
    .then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}
