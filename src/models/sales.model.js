const connection = require('./database/connection');

const getSales = async () => {
  const [sales] = await connection.execute(
    `SELECT sale_id AS saleId, date, product_id AS productId, quantity 
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales
    ON sales_products.sale_id = sales.id
    ORDER BY saleId, productId`,
  );
  return (sales);
};

const getSalesByID = async (id) => {
  const [sales] = await connection.execute(
    `SELECT date, product_id AS productId, quantity 
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales
    ON sales_products.sale_id = sales.id
    WHERE sales.id = ?`,
    [id],
  );
  return (sales);
};

module.exports = {
  getSales,
  getSalesByID,
};