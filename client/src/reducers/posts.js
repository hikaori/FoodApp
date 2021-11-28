// state -> posts
// reducer default
// const reducer = (state = [], action)

export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;

    case 'CREATE':
      return [...posts, action.payload];

    default:
      return posts;
  }
};
