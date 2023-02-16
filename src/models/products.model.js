const connection = require('./database/connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  console.log(result);
  return result;
};

const getByID = async (productID) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = (?)',
    [productID],
  );

  return result;
};

module.exports = {
  getAll,
  getByID,
};