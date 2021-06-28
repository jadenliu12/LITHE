const fs = require('fs');
const moment = require('moment');

const todosModel = require('./todos.js');

function create(postId) {
  return new Promise((resolve, reject) => { 
    let accomplishedTodos = null;
    todosModel.list().then((todos) => {
      todos = todos.map((t) => {
        if (t.id === postId) {
          accomplishedTodos = t;
          t.doneTs = moment().unix();;          
        }
        return t;
      });

      fs.writeFile('data-todos.json', JSON.stringify(todos), (err) => {
        if (err) reject(err);

        resolve(accomplishedTodos);
      });
    });
  });
}

module.exports = {
  create,
};
