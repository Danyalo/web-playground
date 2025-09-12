const letterboxd = require('letterboxd').default;
require('dotenv').config();

module.exports = async () => {
  let user = process.env.LETTERBOXD_USER;
  const items = await letterboxd(user, (error, items) => {
    if (error) {
      return console.log(error);
    }
  });
  
  const processedItems = items.map(item => ({
    ...item,
    uri: item.uri.replace(`/${user.toLowerCase()}/`, '/')
  }));

  return processedItems;
};