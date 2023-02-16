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

const createProduct = async ({ name }) => {
  const [{ insertId: createID }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return { id: createID, name };
};

module.exports = {
  getAll,
  getByID,
  createProduct,
};
// I wrote the functions in this file with the mentorship of Henrique Baeta