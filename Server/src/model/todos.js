const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

function list(unaccomplishedOnly = false,searchText = '') {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync('data-todos.json')) {
      fs.writeFileSync('data-todos.json', '');
    }

    fs.readFile('data-todos.json', 'utf8', (err, data) => {
      if (err) reject(err);

      let todos = data ? JSON.parse(data) : [];
      if (unaccomplishedOnly) {
        todos = todos.filter((t) => {
          return !t.doneTs;
        });
      }
      if (searchText) {
        todos = todos.filter((t) => {
          return t.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        });
      }
      resolve(todos);
    });
  });
}

function create(mood, text) {
  return new Promise((resolve, reject) => {
    const newTodos = {
      id: uuidv4(),
      mood: mood.charAt(0).toUpperCase() + mood.slice(1),
      text: text,
      ts: moment().unix(),
      doneTs: null,
    };

    list().then((todos) => {
      todos = [newTodos, ...todos];
      fs.writeFile('data-todos.json', JSON.stringify(todos), (err) => {
        if (err) reject(err);

        resolve(newTodos);
      });
    });
  });
}

module.exports = {
  list,
  create,
};