const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel }  = require('../../../src/models');
const connection = require('../../../src/models/database/connection');
const { productsMock } = require('../../../tests/mocks/productsMock');

describe('test productsModel', () => {
  it('if all products are listed', async () => {
// Arrange
    sinon.stub(connection, 'execute').resolves([productsMock]);
// Act
    const result = await productsModel.getAll();
// Assert
    expect(result).to.be.deep.equal(productsMock);
  })
  it('if product with correct ID is received', async () => {
// Arrange
    sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);
// Act
    const result = await productsModel.getByID(1);
// Assert
    expect(result).to.be.deep.equal([productsMock[0]]);
  });
  it('if a new product is successfully created', async function () {
// Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
// Act
    const product = await productsModel.createProduct({ name: 'Xablau' });
// Assert
    expect(product).to.be.deep.equal({ id: 4, name: 'Xablau' });
  });
    afterEach(function () {
      sinon.restore();
  });
});

//https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-service-live-lectures/tests/unit/models/passenger.model.test.js
// https://github.com/CarolinaKauark/msc-do-zero/blob/solved-exercise/src/tests/unit/models/person.model.test.js