const { forwardTo } = require('prisma-binding');

const Mutation = {
  createThread: forwardTo('db'),
  updateThread: forwardTo('db'),
  async createPost(parent, args, ctx, info) {
    // Workaround to make image null
    if (!args.data.image.create.tag) {
      delete args.data.image;
    }

    const item = await ctx.db.mutation.createPost(args, info);

    return item;
  },
};

module.exports = Mutation;
