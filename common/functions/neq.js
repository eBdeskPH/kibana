export const neq = () => ({
  name: 'neq',
  help: 'Return if the context is not equal to the argument',
  args: {
    _: {
      types: ['boolean', 'number', 'string', 'null'],
      required: true,
      help: 'The value to compare the context to',
    },
  },
  fn: (context, args) => {
    return context !== args._;
  },
});
