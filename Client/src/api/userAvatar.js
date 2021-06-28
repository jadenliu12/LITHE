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


export function createUserAvatar(username, hair, eye, nose, mouth, body, gender) {
  let url = `${userAvatarBaseUrl}/usersAvatar`;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
      username,
      hair,
      eye,
      nose,
      mouth,
      body, 
      gender
    })
    .then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}
