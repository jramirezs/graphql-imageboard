const { forwardTo } = require('prisma-binding');

const Query = {
  board: forwardTo('db'),
  boards: forwardTo('db'),
  thread: forwardTo('db'),
  threads: forwardTo('db'),
  posts: forwardTo('db'),
};

module.exports = Query;
