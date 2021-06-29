import axios from 'axios';

// Production server URL
const userGroupBaseUrl = 'http://lithe.us-east-1.elasticbeanstalk.com/api';

export function listUserGroup() {
  let url = `${userGroupBaseUrl}/usersGroup`;

  console.log(`Making GET request to: ${url}`);

  return axios.get(url).then(function (res) {
    if (res.status !== 200)
      throw new Error(`Unexpected response code: ${res.status}`);

    return res.data;
  });
}


export function createUserGroup(group_id, user_a, user_b, user_c, user_d, user_e, user_f, user_g, user_h) {
  let url = `${userGroupBaseUrl}/usersGroup`;

  console.log(`Making POST request to: ${url}`);

  return axios
    .post(url, {
        group_id,
        user_a,
        user_b,
        user_c,
        user_d,
        user_e, 
        user_f,
        user_g,
        user_h
    })
    .then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
}
