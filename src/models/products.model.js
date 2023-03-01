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
// I wrote the functions in this file with the mentorship of Henrique Baeta

const createProduct = async ({ name }) => {
  const [{ insertId: createID }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return { id: createID, name };
};

const updateProduct = async ({ name, id }) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute(

    `DELETE FROM StoreManager.products
    WHERE id = ?`, [id],
  );
};

module.exports = {
  getAll,
  getByID,
  createProduct,
  updateProduct,
  deleteProduct,
};